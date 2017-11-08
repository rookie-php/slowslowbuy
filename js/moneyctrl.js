//获取数据
$(function(){

    //声明变量保存页码数
    var currentPage = 0;
    //声明变量保存总页数
    var pageCount = 0;
    //封装请求数据的函数 重名 请注意
    function getData(){
        $.ajax({
            url: 'http://157.122.54.189:9090/api/getmoneyctrl',
            data: {
                pageid: currentPage
            },
            success: function(data){
                // console.log(data);
                //插入产品列表数据
                var html = template('Tmp-discount-goods',data);
                //计算总页数
                pageCount = Math.ceil(data.totalCount/data.pagesize);
                // console.log(pageCount);
                //声明空数组 保存页面数
                var pageArr = [];
                for(var i=0;i<pageCount;i++){
                    pageArr.push(i);
                }
                // console.log(pageArr);
                //添加个data 为了把这页码数传过去
                data.pages = pageArr;
                //要把默认选中项改变 根据当前页面数变
                $('#page-choose').html(template('TmpPage',data)).children().eq(currentPage).attr('selected','true');
                $('#main .discount-body').html(html);
            }
        })
    }

    //调用
    getData();

    //给上一页注册点击事件 小于第一页 就不做动作 否则就--
    $('.prev-page').on('click',function(){
        if(currentPage<=0){
            return;
        }else{
            currentPage--;                
            getData();
        }
    })
    //给下一页注册点击事件 大于最后一页 就不做动作 否则就++
    $('.next-page').on('click',function(){
        //因为是向上取整的 所以比较时要剪掉1
        if(currentPage>=pageCount-1){
            return;
        }else{
            currentPage++;        
            getData();
        }
    })

    //给下拉菜单change事件
    $('#page-choose').on('change',function(){
        // console.log($(this).context.value);
        currentPage = $(this).context.value-1;
        getData();
    })
})

