var apiKey = "fd2beb4e9b5dd8ed0468119fb3cfaaad";

var apiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?" +
    "q=Vancouver" +
    "&more=json" +
        "&units=metric" +
        "&cnt=7" +
        // the upper line is for how many days you want weather forcast for from 1 to 7
        "&appid=" + apiKey;

console.log(apiUrl);

$.getJSON(apiUrl, function(data){
    console.log(data);

    console.log(data.list[0].weather[0].main);
   
   var conditions =  data.list[0].weather[0].main;

    if(conditions === "Rain" || conditions === "Clouds" || conditions === "Drizzle"  || conditions === "Thunderstorm"){
        document.querySelector(".cloud1").style.display='block';
        document.querySelector(".text").innerText = "Rains are Romantic.";
        // result = url(".cloud1");
    }else{
        document.querySelector(".sunny").style.display='block';
        document.querySelector(".text").innerText = "Yehh! Lets go to beach";
        // result = url(".sunny");
    }
   
    // var days = ['Sunday','Monday','Tuesday','Wednusday','Thursday','Friday', 'Saturday'];
   
    for(var i = 0; i < data.list.length; i++) {
    var today = data.list[i].dt*1000;

        var thedate = new Date(today);

        var thedate = thedate + "";
        console.log(thedate);

        $('<div/>', {
            'class': 'date',
            'text': thedate.substring(0, thedate.length - 42)
        }).appendTo($('body'));


        console.log(data.list[i].temp.day);

        $('<div/>', {
            'class': 'temp current',
            'text': data.list[i].temp.day
        }).appendTo($('body')).fadeIn();


        $('<div/>', {
            'class': 'temp evening',
            'text': data.list[i].temp.eve
        }).appendTo($('body')).fadeIn();

        $('<div/>', {
            'class': 'temp current',
            'text': data.list[i].weather[0].main
        }).appendTo($('body'));

        
      

        var weatherIcon = data.list[i].weather[0].icon;


        $('<img/>', {
            'class': 'weather-icon',
            'src': 'http://openweathermap.org/img/w/' + weatherIcon + '.png'
        }).appendTo($('body'));

    }
});

















