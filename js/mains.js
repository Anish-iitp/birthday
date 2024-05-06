

function updateDateTime() {
    var today = new Date();
    var year = today.getFullYear();  // Year
    var month = today.getMonth() + 1; // Months are zero-indexed (January = 0)
    var day = today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    //taking base as 8th july 2022 21:21:21
    //have to find how much time got passed from the base date in years months days hours minutes seconds
    var yearr;
    var monthh;
    var dayy;
    var hourss;
    var minutess;
    var secondss;
    yearr = year - 2022;
    monthh = month - 7;
    dayy = day - 8;
    hourss = hours - 21;
    minutess = minutes - 21;
    secondss = seconds - 21;
    if (secondss < 0) {
      secondss += 60;
      minutess--;
    }
    if (minutess < 0) {
      minutess += 60;
      hourss--;
    }
    if (hourss < 0) {
      hourss += 24;
      dayy--;
    }
    if (dayy < 0) {
      dayy += 30;
      monthh--;
    }
    if (monthh < 0) {
      monthh += 12;
      yearr--;
    }
    
    // Add leading zero for single digit hours or minutes or seconds
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var formattedDateTime = yearr + " years " + monthh + " months " + dayy + " days " + hourss + " hours " + minutess + " minutes " + secondss + " seconds";
    document.getElementById("time").innerHTML = formattedDateTime;
    setTimeout(updateDateTime, 1000);
  }
  
  updateDateTime();
  