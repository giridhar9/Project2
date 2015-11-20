$(document).ready(function(){
  $('.bxslider').bxSlider({
   auto: true,
   pager: false,
   controls: false,
   minSlides: 1,
   maxSlides: 3,
   slidewidth: 0,
   slidemargin: 0
});
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "It's Sunday";
    weekday[1] = "It's Monday";
    weekday[2] = "It's Tuesday";
    weekday[3] = "It's Wednesday";
    weekday[4] = "It's Thursday";
    weekday[5] = "It's Friday";
    weekday[6] = "It's Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("today").innerHTML = n;
    q = "WE'RE OPEN!";
    s = "WERE CLOSED!";
    if( n==weekday[0] || n==weekday[6] ) {
    	document.getElementById("res-status").innerHTML = s;
    }
    else{
    	document.getElementById("res-status").innerHTML = q;
    }


    var picker = new Pikaday({ field: $('#w')[0] });

    $('#time').timepicker();
});

