$(function(){
    $('.randNum span').each(function(index,value){
        $(value).attr('style','color:'+getRandColor()).html(getRandNum());
    })
    function getRandNum(){
        return Math.ceil(Math.random() * 10) - 1;
    }
    function getRandColor(){
        var a = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var c = Math.floor(Math.random() * 256);
        return 'rgb(' + a + ',' + b + ',' + c +')';
       }
   $('.randNum').on('click',function(){

       
        $('.randNum span').each(function(index,value){
            $(value).attr('style','color:'+getRandColor()).html(getRandNum());
        })
      
   }) 
})