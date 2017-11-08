$(function(){
 	 var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    //循环
	    loop : true,
	    //自动播放
	    autoplay: 3000
  	}) 
  	 //标题ajax 
 	$.ajax({
 	 	url:'http://157.122.54.189:9090/api/getbaicaijiatitle',
 	 	success:function(data){
 	 		console.log(data);
 	 		$('#nav-bar ul').html(template('nvatmp',data));
 	 		$('#nav-bar ul li').on('click',function(){
 	 			title=$(this).attr('titleid');
 	 			console.log($(this).attr('titleid'));
 	 			 $.ajax({
			 		url:'http://157.122.54.189:9090/api/getbaicaijiaproduct',
			 		data:{
			 			titleid:title
			 		},
			 		success:function(data){
			 			console.log(data);
			 			$('#commodity-list').html(template('commodityTmp',data));
			 		}
			 	})
 	 		})
 	 	}
 	 	
 	})
 	//分类ajax
 	var title = 0;
 	$.ajax({
 		url:'http://157.122.54.189:9090/api/getbaicaijiaproduct',
 		data:{
 			titleid:title
 		},
 		success:function(data){
 			console.log(data);
 			$('#commodity-list').html(template('commodityTmp',data));
 		}
 	})
})