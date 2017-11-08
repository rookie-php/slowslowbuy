$(function () {
    getPorductsList();
    var Imgarr = [];

    function getPorductsList() {
        $.ajax({
            url: 'http://157.122.54.189:9090/api/getinlanddiscount',
            success: function (data) {
                console.log(data);
                var html = template('productsTmp',data);
                $('.productList ul').html(html);
            }
        })
    }

    
})

var pattern = /jpg$/;