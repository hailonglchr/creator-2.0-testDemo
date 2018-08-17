# creator-2.0-testDemo
creator 2.x cc.Label异常：
问题1：使用loadResDir，显示加载进度会有问题，不能动态修改文字内容，加载百分比显示不出。
        cc.loader.loadResDir("Img", function(completedCount, totalCount, item){
            var _progress = parseInt(completedCount / totalCount  * 100);
            console.log("***Res load Progress >>> ", _progress + "%");
            self.progressLabel.string = _progress + "%";
        },function (err, objects, urls) { 
            console.log("***Res load Success...", objects);
            cc.director.loadScene("start");
        });
        
问题2：testLabel2 使用艺术字体，不能显示，会抛出很多错误，这里就不粘贴了，可以下载工程手动手动一下num1字体。（num1艺术字体第一字创建参数显示正常，可是不能正常使用，当抛出异常时，艺术字体的属性全部自动清空）

以上两问题在1.9.3使用正常，这是在升级过程中遇到的问题。
