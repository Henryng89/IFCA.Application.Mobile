$(document).one('pagebeforecreate', function () {
  
    $("#btnPower").click(function () {

        if (confirm('Are you sure you want to exit the app?')) {
            alert("Off the app");
            localStorage.clear();
            navigator.app.exitApp();

        } else {
            // Do nothing!
        }

    });

  

});


