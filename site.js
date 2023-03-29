
$(document).ready(function(){
    var valueNum = window.sessionStorage.userdata;
    if (valueNum != "1") {
      $("#myModal").modal();
    }
});
  function cancel(){
    window.sessionStorage.userdata = "1";
  }
  function show(){
    window.sessionStorage.userdata = "0";
    $("#myModal").modal();
  }
