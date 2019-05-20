// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#search-button").click(function(){
    console.log('clicked')
    
    var searchTerm = $("#search-term").val();
    
    var api_url = "https://api.soundcloud.com/tracks?q="+searchTerm+"&client_id=5aa8e389ba4e24b6106af5159ab3e344"
    
   $.ajax({
        url: api_url,
        method: "GET",
        success: function(response) {
            console.log(response);
            
            $(".container--results").html('');
            
            var title = response[0].title
            
            $(".container--results").html(title);
            
        }
    }); 
  
});







//$("select.options").change(function(){
//    var change = $(this).children("option:selected").val();
//     $("#main").css("background-color","black");
//});