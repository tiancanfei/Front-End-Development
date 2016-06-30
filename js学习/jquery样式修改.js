/**
 * Created by andehang on 16/6/20.
 * jquery样式修改
 */

function log(str) {
    console.log(str);
}
//获取修改css样式使用css()只能获取具体的属性值,不能写一个通用的属性值比如:background(需要具体到background-color),margin(需要具体到margin-left)
/*******************************获取css属性**********************************/
//$(选择器).css("css属性名称");
function getHeight() {
    var dom = $("#setHeight");
    log(dom.css("margin-left"));
}

/*******************************设置css属性**********************************/
/*
设置单个属性:
 $(选择器).css("css属性名称","属性value字符串");
设置多个属性,传入对象即可({"css属性名称":"属性value字符串"}):
 $(选择器).css({"css属性名称":"属性value字符串"});
 */


function setHeight(value) {
    var height = $("#div-height").val();
    if (height != 0)
    {
        $("#setHeight").css("height",height + "px");
        return;
    }
    $("#setHeight").css("height",value + "px");
}

function setCssAttr() {
    var height = $("#div-height").val() + "px";
    var width = $("#div-width").val() + "px";
    var backgroundColor = $("#div-background-color").val() + "";

    log(height,width,backgroundColor);
    var dom = $("#setHeight");
    if (backgroundColor.length != 0) {
       dom.css({"height":height,
                "width":width,
                "background-color":backgroundColor
       });
    }

}

/**********************************获取dom元素的尺寸*******************************/
//$("选择器").width()元素宽度
//$("选择器").height()元素高度
//$("选择器").innerWidth()
//$("选择器").innerHeight()
//$("选择器").outerWidth()
//$("选择器").outerHeight()