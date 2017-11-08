$(function(){
    compareNav();
    // categoryNav();

    function compareNav(){
        $.ajax({
            url:'http://157.122.54.189:9090/api/getcategorytitle',
            success:function(data){
                // console.log(data);
                $('#nav-tap .panel-group').html(template('navTmp',data));
                var titleId;            
                        $('#nav-tap').on('click','a',function(e){
                            // var titleId = $(e.target).attr('titleid');
                            titleId = $(this).attr('titleid');
                
                            $.ajax({
                                url:'http://157.122.54.189:9090/api/getcategory',
                                data:{
                                    titleid:titleId               
                                },
                                success:function(data){
                                    // console.log(data);
                                    var html = template('navTmp1',data);
                                    // var html = template('navListTmp',data);
                                    $('.panel-body ul').html(html);
                                }
                            })
                            
                        });
            }
        })
    }   
        var location = window.location.href;
        console.log(location);


})
