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
        
            var title = response[0].title;
            var  duration = response[0].duration;
           duration = duration/60000;
            var minute = duration.toFixed(1);
            $(".container--results").html("<p>" + title + "</p>"+ "<p class='duration'>Duration: " +  minute + "</p>");
            
            
        }
    }); 
  
});







function theme(){
    var x = document.getElementById("options").value;
    if(x == "dark") { 
         $("body").css({"background" : "url(https://png.pngtree.com/thumb_back/fw800/back_pic/03/93/55/6257e6764c4417d.jpg)","background-repeat": "no-repeat", "background-position": "50% 50%", "background-size": "100%", "background-attachment": "fixed"}); 
    }else{
        document.querySelector("body").style.background = "url('http://hdwpro.com/wp-content/uploads/2017/12/Animated-Cool-Background.jpg')";
    }
 // document.getElementById("demo").innerHTML = "You selected: " + x;
}