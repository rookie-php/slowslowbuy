$(function(){
   
    var location = window.location.search;
    var loc = location.substring(location.lastIndexOf('=')+1,location.length);
    console.log(loc);

    $.ajax({
        url:'http://157.122.54.189:9090/api/getdiscountproduct',
        data:{
            productid:loc
        },
        success:function(data){
            console.log(data);
            var html = template('zhekou',data);
            $('form').html(html);
        }
    })
})