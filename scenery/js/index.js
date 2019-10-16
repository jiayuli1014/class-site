
//速度数值越大速度越慢
var content_scenery_controller = document.getElementById("content_scenery_controller");
var content_scenery_imgitem = document.getElementById("content_scenery_imgitem");
var content_scenery_main = document.getElementById("content_scenery_main");
content_scenery_controller.innerHTML = content_scenery_imgitem.innerHTML;

function init() {
    if (content_scenery_controller.offsetWidth - content_scenery_main.scrollLeft <= 0) { //offsetWidth 是对象的可见宽度
        content_scenery_main.scrollLeft -= content_scenery_imgitem.offsetWidth //scrollWidth 是对象的实际内容的宽
    } else {
        content_scenery_main.scrollLeft++;
    }

}

function setTunnelTime(tunneltime) {
    var oheight = document.getElementById('content_scenery_main').offsetHeight;
    var count = document.getElementsByClassName('content_scenery_img').length;
    for (let index = 0; index < count; index++) {
        document.getElementsByClassName('content_scenery_img')[index].setAttribute('style', 'margin:0 ' + tunneltime + 'px 0 0;height:' + +oheight + 'px;');
    }
}