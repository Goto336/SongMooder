







$("select.options").change(function(){
    var change = $(this).children("option:selected").val();
     $("#main").css("background-color","black");
});