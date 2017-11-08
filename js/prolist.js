$(function(){
    //获取传过来的参数
    var str = window.location.search;
    var patt1 = /\d+/g;
    /*获取参数的函数*/
    var categoryid = +str.match(patt1)[0];
    /*默认打开第一页*/ 
    var pageid = 1;
    /*声明变量保存总页数*/
    var pageNum =0;
    /*请求数据*/
    getData();
    function getData(){
        $.ajax({
            url:'http://157.122.54.189:9090/api/getproductlist',
            data: {
                categoryid:categoryid,
                pageid:pageid
            },
            success:function(data){
                // console.log(data);
                var listHtml = template('Tmp-product-list',data);
                //计算总页数
                pageNum = data.totalCount/data.pagesize;
                // 声明一个空数组 保存索引
                var pages = [];
                for(var i=0;i<pageNum;i++){
                    pages.push(i);
                }
                data.page = pages;
                // console.log(data);
                var pageHtml = template('Tmp-page',data);
                $('.main-body ul').html(listHtml);
                $('.main-footer .select select').html(pageHtml).children().eq(pageid-1).attr('selected','true');
                $('#screen').hide();
            }
        })
    }

    /*给上一页注册点击事件*/
    $('.prev-page').on('click',function(){
        if(pageid<0){
            return;
        }else{
            pageid--;
            getData();
        }
    })


     /*给下一页注册点击事件*/
     $('.next-page').on('click',function(){
        if(pageid>pageNum){
            return;
        }else{
            pageid++;        
            getData();
        }
    })

    /*给下拉选项注册点击事件*/
    $('#page-choose').on('change',function(){
        // console.log($(this));
        // console.log($(this).context.value);
        pageid = +$(this).context.value;
        getData();
    })

    // 给筛选按钮注册点击事件
    $('.main-title .t-screen a').on('click',function(){
        // console.log(123);
        $('#screen').slideToggle(300);
    })
})