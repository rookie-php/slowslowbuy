$(function(){
    var str = window.location.search;
    var reg = /\d+/g;
    var id = str.match(reg)[0];
    /*品牌标题对应的十大品牌*/    
    // 声明变量保存商品id
    var productId = 0;
    $.ajax({
        url: 'http://157.122.54.189:9090/api/getbrand',
        data: {
            brandtitleid: id
        },
        success: function(data){
            // console.log(data);
            var html = template('Tmp-brand-top',data);
            $('#brand-top .brand-list').html(html);
        }
    })
    /*产品销量排行*/
    $.ajax({
        url: 'http://157.122.54.189:9090/api/getbrandproductlist',
        data: {
            brandtitleid: id,
            // 默认展示数量
            pagesize:4
        },
        success: function(data){
            // console.log(data);
            var html = template('Tmp-sales-top',data);
            $('#sales-top .main-body ul').html(html);
        }
    })

    /*最有用的用户评论*/
    $.ajax({
        url: 'http://157.122.54.189:9090/api/getproductcom',
        data: {
            productid:id
        },
        success:function(data){
            // console.log(data);
            var html = template('Tmp-user-comment',data);
            $('#user-comment').append(html);
        }
    })

})