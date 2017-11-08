$(function(){
    getproductData();

    function getproductData(){
        $.ajax({
            url:'http://157.122.54.189:9090/api/getinlanddiscount',
            success:function(data){
                console.log(data);
                var html = template('lis',data);

                $('#main ul').html(html);
            }

        })
    }
})