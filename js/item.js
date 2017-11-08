$(function(){
	var lis = $('.search-title li');
	var subul = $('.sublist ul');
	var num1 = 0;
	var num2 = 0;
	var shopid=0;
	var areaid=0;
	lis.on('click',function(){
		var index = $(this).index();
		//子菜单对应打开或者折叠
		subul.eq(index).toggleClass('active').siblings('ul').removeClass('active');
		//找到对应的子菜单
		if(index==0 && subul.eq(0).hasClass('active') ){
			$.ajax({
				url:'http://157.122.54.189:9090/api/getgsshop',
				success:function(data){
					
					$('.shop').html(template('shopTmp',data));
					//打开的时候li就有选中项
					$('.shop li').eq(num1).addClass('active');
					$('.shop li').on('click',function(){
						
						$(this).addClass('active').siblings('li').removeClass('active');
						num1=$(this).index();
						shopid=$(this).attr('shopid');
						areaid=$('.region  li.active').attr('areaid');
							if(areaid==undefined){
								areaid=0;
							}
							
							$.ajax({
								url:'http://157.122.54.189:9090/api/getgsproduct',
								data:{
									shopid:shopid,
									 areaid:areaid
								},
								success:function(data){
									console.log(data);
									$('#info ul').html(template('lis',data))
									subul.eq(0).removeClass('active');
								}

							})

					})

				}
			})
		}
		if(index==1 && subul.eq(1).hasClass('active')){
			$.ajax({
				url:'http://157.122.54.189:9090/api/getgsshoparea',
				success:function(data){
					console.log(data);
					$('.region').html(template('regionTmp',data));
						$('.region li').eq(num2).addClass('active');
							$('.region li').on('click',function(){
						// console.log($(this));
						$(this).addClass('active').siblings('').removeClass('active');
						num2=$(this).index();
						areaid=$(this).attr('areaid');
						shopid=$('.shopid li.active').attr('areaid');
							if(shopid==undefined){
								shopid=0;
							}
							// console.log(areaid);
							$.ajax({
								url:'http://157.122.54.189:9090/api/getgsproduct',
								data:{
									shopid:shopid,
									 areaid:areaid
								},
								success:function(data){
									console.log(data);
									$('#info ul').html(template('lis',data));
									subul.eq(1).removeClass('active');

								}

							})
					})
				}
			})
		}
	})
	$.ajax({
		url:'http://157.122.54.189:9090/api/getgsproduct',
		data:{
			shopid:0,
			 areaid:0
		},
		success:function(data){
			// console.log(data);
			$('#info ul').html(template('lis',data))
		}

	})
	 window.onresize = function(){
		var width1 = $('#info ul li').width();
		// console.log(width1)
		$('#info ul li img').css('height',width1);
	 	console.log('hah');
	}
	 
function imgLazyLoad(){//扫描需要加载的div  
    $.each($("#info img"),function(i,o){  
   		 // console.log("hah");       
        //获取窗口高       
        var windowHeight=$(window).height();  
        //获取滚动条  
        var scrollTop=$(document).scrollTop();  
        windowHeight=windowHeight/2; //可以设置滚动条在显示某个高度来lazyload   windowHeight=windowHeight/2; 比如在显示屏幕高度2分之1的时候加载  
          
          
        //先判断是否是加载完的图片 跳出  
        if($(o).attr("src")==$(o).attr("pic")){  
            return true;  
        }else if( $(o).offset().top<=(scrollTop+windowHeight)  && $(o).offset().top >= scrollTop ){//判断div是不是出在可见的位置  
            if($(o).attr("pic") != undefined || $(o).attr("pic") != "undefined" ){  
                var ObjectSrc = $(o).attr("pic");  
                //把pic的值赋给src值  
                $(o).attr("src",ObjectSrc);  
                //css属性改为可见  
                $(o).css("visibility","visible");  
                //渐变时间和渐变值  
                $(o).fadeTo(1000,1.00);  
            }  
        }                 
    });   
}  
//页面第一次加载时  
imgLazyLoad();//初始化  
//判断浏览器  
$(document).scroll(imgLazyLoad);//当滚动条滚动时,扫描需要加载的div  

})