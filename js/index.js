$(function(){
    // 导航部分
$.ajax({
    url:'http://157.122.54.189:9090/api/getindexmenu',
    success: function(data){
        // 导航默认显示部分
        var navShow = template('Tmp-nav',data);
        // 导航默认隐藏部分
        var navHide = template('Tmp-nav-hide',data);
        // console.log(html);
        $('#nav').append(navShow);
        $('#nav').append(navHide);
    }
})

// 超值折扣模块
$.ajax({
    url:'http://157.122.54.189:9090/api/getmoneyctrl',
    success:function(data){
        // 折扣列表
        var goodsHtml = template('Tmp-discount-goods',data);
        // console.log(goodsHtml);
        $('#discount-goods .discount-body').html(goodsHtml);
    }
})

//点击导航里的更多按钮 显示 隐藏的导航部分
//只给默认显示的导航菜单的最后一个Li代理事件
$('#nav').on('click','.nav-ul li:last',function(e){
    e.preventDefault();
    // console.log('asd');
    //切换状态
    $('#nav .nav-ul-hide').toggle();
})
})