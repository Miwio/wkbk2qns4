$("#addAge").click(function(){
        var x = $("#age").val();
        $("p:last").append("<br/>",x);
});