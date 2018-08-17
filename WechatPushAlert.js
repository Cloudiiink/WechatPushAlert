// ==UserScript==
// @name         Wechat Push Alert
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Wechat Push Alert before you push the article
// @author       Cloudiiink
// @match        https://mp.weixin.qq.com
// @include      *://mp.weixin.qq.com/*
// @grant        none
// ==/UserScript==

// let the page wait
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
    }
  }
}

(function() {
    'use strict';
    // 检查页面内是否有群发按钮
    if (document.getElementById('send_btn_main') !== null) {
        sleep(2000);
        alert("我们的文章原创标了么？");
        sleep(800);
        alert("转载的格式都对么？");
        sleep(800);
        alert("推前大佬们确认过了么？");
        sleep(800);
        alert("要修改的地方全都改了么？");
        sleep(800);
        alert("看一眼昨天的推送，真的什么都没有落下了？");
        sleep(800);
        alert("以防万一，再点进预览里看一眼吧！");
        sleep(800);
        alert("勇敢地去点下那个群发按钮吧！没什么好怕的了！");
    }
})();
