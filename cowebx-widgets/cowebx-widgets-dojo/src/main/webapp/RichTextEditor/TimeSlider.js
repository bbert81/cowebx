define(['coweb/main','dijit/form/Slider','dijit/form/TextBox'], function(coweb) {
    var TimeSlider = function(args){
        if(!args.domNode || !args.textarea || !args.id)
            throw new Error('Slider: missing argument');
        this.domNode = args.domNode;
        this.id = args.id;
        this.build(args.domNode);
        this.history = [];
        this._textarea = args.textarea;
        this.sliderShowing = false;
        this.index = null;
        this.div = args.div;
        dojo.connect(this._textarea.div,'onclick',this,function(){
            this._onBlur();
        });
        dojo.subscribe("editorHistory", dojo.hitch(this, function(message){
             this.history.push(message.save);
        }));
        dojo.subscribe("sliderToggle", dojo.hitch(this, function(message){
             this._toggle();
        }));
    };
    var proto = TimeSlider.prototype;
    
    proto.build = function(){
        var table = dojo.create('table',{'class':'sliderTable'},this.domNode);
        var row = dojo.create('tr',{},table);
        this._sliderCell = dojo.create('td',{'class':'sliderCell'},row,'first');
        var h = dojo.create('div',{style:'width:100%;height:100%'},this._sliderCell);
        this._buttonCell = dojo.create('td',{'class':'buttonCell'},row,'last');
        this.slider = new dijit.form.HorizontalSlider({
            name: "slider",
            value: 1,
            minimum: 0,
            maximum: 1,
            intermediateChanges: true,
            style: "width:100%;",
            onChange: dojo.hitch(this, function(value) {
                this._onChange(value);
            })
        },
        h);
        var play = dojo.create('a',{'class':'go',innerHTML:'Play'},this._buttonCell);
        //dojo.connect(play, 'onclick', this, 'play');
    };
    
    proto._onChange = function(value) {
        var p = value;
        var n = Math.floor((this.history.length-1)*p);
        this.index = n;
        var state = this.history[n];
        if(state){
            this._textarea.value = state;
            this._textarea.render(true);
            this._textarea.getCharObj(true);
        }
    };
    
    proto._onBlur = function() {
        this.index = this.history.length-1;
        var state = this.history[this.index];
        if(state){
            this._textarea.value = state;
            this._textarea.render(true);
            this._textarea.getCharObj(true);
            this.slider.destroy();
            var h = dojo.create('div',{style:'width:100%;height:100%'},this._sliderCell);
            this.slider = new dijit.form.HorizontalSlider({
                name: "slider",
                value: 1,
                minimum: 0,
                maximum: 1,
                intermediateChanges: true,
                style: "width:100%;",
                onChange: dojo.hitch(this, function(value) {
                    this._onChange(value);
                })
            },h);
        }
    };
    
    proto._toggle = function(){
        if(!this.sliderShowing){
            this.sliderShowing = true;
            dojo.fadeIn({node:'sliderHolder'}).play();
        }else{
            this.sliderShowing = false;
            dojo.fadeOut({node:'sliderHolder'}).play();
        }
    };
    
    return TimeSlider;
});