document.getElementById('timer').innerHTML = 15+":"+00;
  
var myTime;

$('#startbtn').click(function startTimer(){
  $('#startbtn').hide();
  $('#stopbtn').show();
  $('#chatForm').show();
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}

  document.getElementById('timer').innerHTML = m + ":" + s;
  myTime= setTimeout(startTimer, 1000);
  if(m==00 && s==00){
    clearTimeout(myTime);
    document.getElementById('timer').innerHTML = 00 + ":" + 00;
    $('#stopbtn').hide();
    $('#messagebtn').hide();
    $('#message').hide();
    $('#chatForm').hide();
    
   
  }
});

$('#stopbtn').click(function stopTimer(){
  clearTimeout(myTime);
  document.getElementById('timer').innerHTML = 00 + ":" + 00;
  $('#stopbtn').hide();
  $('#messagebtn').hide();
  $('#message').hide();
  $('#chatForm').hide();
  
});
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}