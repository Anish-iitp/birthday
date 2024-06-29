function updateDateTime() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  
  // Base date: 8th July 2022, 21:21:21
  var baseDate = new Date(2022, 6, 8, 21, 21, 21);
  var diff = today - baseDate;
  
  var diffDate = new Date(diff);

  var yearDiff = diffDate.getUTCFullYear() - 1970;
  var monthDiff = diffDate.getUTCMonth();
  var dayDiff = diffDate.getUTCDate() - 1;
  var hourDiff = diffDate.getUTCHours();
  var minuteDiff = diffDate.getUTCMinutes();
  var secondDiff = diffDate.getUTCSeconds();
  
  var formattedDateTime = yearDiff + " years " +
                          monthDiff + " months " +
                          dayDiff + " days " +
                          hourDiff + " hours " +
                          minuteDiff + " minutes " +
                          secondDiff + " seconds";
  
  document.getElementById("time").innerHTML = formattedDateTime;
  setTimeout(updateDateTime, 1000);
}

updateDateTime();
