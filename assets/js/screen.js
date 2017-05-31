function screen(options){
    var self = this;
    this.width = options.width;
    this.height = options.height;
    this.object = options.object;
    this.standard = options.standard;
    this.alignment = options.alignment;
    this.success = options.success;
    this.init();
    window.addEventListener("resize", function () {
        self.init();
    });
}
screen.prototype.init = function(){
    var self = this;
    var viewWidth = document.documentElement.clientWidth;
    var viewHeight = document.documentElement.clientHeight;
    if(viewWidth>800){
        var scale = viewHeight/self.height;
        var pageWidth = self.width * scale;
        var left = (viewWidth - pageWidth)/2;
        $(self.object).css({
            'width':self.width+'px',
            'height':self.height+'px',
            '-webkit-transform':'scale('+scale+')',
            '-moz-transform':'scale('+scale+')',
            '-ms-transform':'scale('+scale+')',
            'transform':'scale('+scale+')',
            '-webkit-transform-origin':'left top',
            'left':left+'px',
            'top':'0px'
        });
    }
    else{
        if(this.standard == 'vertical' ){
            var scale = viewHeight/self.height;
            var pageWidth = self.width * scale;
            var left = (viewWidth - pageWidth)/2;
            $(self.object).css({
                'width':self.width+'px',
                'height':self.height+'px',
                '-webkit-transform':'scale('+scale+')',
                '-moz-transform':'scale('+scale+')',
                '-ms-transform':'scale('+scale+')',
                'transform':'scale('+scale+')',
                '-webkit-transform-origin':'left top',
                'left':left+'px'
            });
            if(this.alignment == 'left'){
                $(self.object).css({
                    'left':'0px'
                });
            }
            else if(this.alignment == 'right'){
                $(self.object).css({
                    'left':left*2+'px'
                });
            }
            else if(this.alignment == 'center'){
                $(self.object).css({
                    'left':left+'px'
                });
            }
        }
        else if(this.standard == 'orientation'){
            var scale = viewWidth/self.width;
            var pageHeight = self.height * scale;
            var top = (viewHeight - pageHeight)/2;
            $(self.object).css({
                'width':self.width+'px',
                'height':self.height+'px',
                '-webkit-transform':'scale('+scale+')',
                '-moz-transform':'scale('+scale+')',
                '-ms-transform':'scale('+scale+')',
                'transform':'scale('+scale+')',
                '-webkit-transform-origin':'left top',
                'width': self.width+'px',
                'top':top + 'px',
                'left':'0px'
            });
            if(this.alignment == 'top'){
                top = 0;
                $(self.object).css({
                    'top':top + 'px'
                });
            }
            else if(this.alignment == 'bottom'){
                $(self.object).css({
                    'top':top*2 + 'px'
                });
            }
            else if(this.alignment == 'center'){
                $(self.object).css({
                    'top':top + 'px'
                });
            }
        }
    }
    this.success();
};

