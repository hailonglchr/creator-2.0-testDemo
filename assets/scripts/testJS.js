// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        mainPanel: cc.Sprite,
        testLabel: cc.Label,
    },

    onLoad () {
        var self = this;
        cc.loader.loadResDir("Img", function(completedCount, totalCount, item){
            var _progress = parseInt(completedCount / totalCount  * 100);
            console.log("***Res load Progress >>> ", _progress + "%");
            self.testLabel.string = _progress + "%";
        },function (err, objects, urls) { 
            console.log("***Res load Success...", objects);
        });
    },
});
