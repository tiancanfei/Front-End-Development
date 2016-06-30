/**
 * Created by andehang on 16/6/20.
 * jquery基础使用
 */

function log(str) {
    console.log(str);
}


/***************************************获取和设置dom相关***********************************/
/*通常jquery的加载都是在html文档加载完毕之后才开始的*/
$(document).ready(function () {
    //试用jquery
    log("调试输出测试");

    //jquery基本语法
    //$("选择器").action();
    //获取文本:text("要设置的文本")
    (function getTextContent() {
        var text = $("#text-content").text();
        log(text);
    })();
    //获取html源码:html("要设置的html代码")
    (function getHtmlContent(){
        var html = $("#html-content").html();
        log(html);
    })();

    //获取属性:attr("属性名称","新的属性值(如果获取可以省略)")
    (function (){
        var attr = $("#attr-content").attr("myAttr");
        log("attr-content属性:" + attr);
    })();
});

//获取设置表单内容:val("要设置的内容")
function getFormValue(){
    var value = $("#name").val();
    value = value ? "输入框输入内容是:" + value : "输入框没有输入,请输入内容后再试";
    log(value);
}

function setFormValue(){
    $("#name").val("hello world");
}

/***************************************插入***********************************/
//append("要插入的html代码或者普通字符串"):在元素尾部插入
function insert()
{
    //$("#insert").append("我是尾部插入的文字");
    $("#insert").append("<div style='height: 100px;width: 100px;background-color: red'>我是刚刚添加在尾部的新元素</div>");
}
//prepend("要插入的html代码或者普通字符串"):在元素前面面插入
function preInsert()
{
    $("#insert").prepend("我是开头插入的文字");
    $("#insert").prepend("<div style='height: 100px;width: 100px;background-color: blue'>我是刚刚添加在开头的新元素</div>");
}

//before和after与append和prepend的区别在于before和after添加的是在选中元素之外的,而append和prepend是在选中元素插入子元素

/***************************************删除***********************************/
//remove():删除选中元素及其子元素
//empty():删除选中元素的子元素

function del()
{
    ("#del").remove();
}

function delChilden()
{
    ("#del").empty();
}

/**********************************获取dom*************************************/
//$("选择器").get(index):获取选择器指定的dom元素,获取到的是一个数组,index是数组下标
