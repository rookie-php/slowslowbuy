$(function(){
    //获取一级分类(导航)数据数据
    $.ajax({
        url:'http://157.122.54.189:9090/api/getcategorytitle',
        success: function(data){
            var itemTitle = template('Tmp-item-wrap',data);
            // 一级导航标题
            $('#main .item-wrap').html(itemTitle);
        }
    })

    //给每个一级导航标题注册点击事件 手机上的点击事件跟PC端的点击事件
    $('.item-wrap').on('click','.item .item-title',function(){
        //测试事件是否触发
        // console.log(124);
        // 获取当前的id
        var titleId = $(this).attr('titleId');
        var $this = $(this);
        // console.log(titleId);
        $.ajax({
            url:'http://157.122.54.189:9090/api/getcategory',
            data:{
                titleid:titleId
            },
            success:function(data){
                // console.log(data);
                var itemBody = template('Tmp-item-list',data);
                // 点击当前的 要隐藏兄弟节点 显示自己
                $('.item .item-body').eq(titleId).toggleClass('ishide').children().html(itemBody);
                $this.children().toggleClass('xs');

            }
        })
    })

})
