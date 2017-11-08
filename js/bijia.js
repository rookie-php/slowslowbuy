$(function(){
    //获取数据
    //最好封装函数 用方法来获取地址栏的ID好点
    var str = window.location.search;
    var reg = /\d+/g;
    var id = str.match(reg)[0];
    // console.log(str.match(reg)[0]);
    //发送ajax 获取商品详情
    $.ajax({
        url:'http://157.122.54.189:9090/api/getproduct',
        data:{
            productid: id
        },
        success: function(data){
            // console.log(data);
            var html = template('TmpProductDetail',data);
            $('#public-detail .pd-body').html(html);
        }
    })
    //获取商品评论
    $.ajax({
        url:'http://157.122.54.189:9090/api/getproductcom',
        data:{
            productid: id
        },
        success: function(data){
            // console.log(data);
            var html = template('TmpComment',data);
            $('.evaluate>ul').html(html);
        }
    })
})