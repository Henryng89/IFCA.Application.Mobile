var SERVER_END_POINT_API = "http://localhost:55280/";
var PHONE_REGISTRATION = true;
var PUSH_NOTIFICATIONS = false;
var AUTO_LOGIN = true;
var USERNAME = null;

$(document).one('pagebeforecreate', function () {

    USERNAME = localStorage.getItem("username");

    if (USERNAME != null) {
        $(".subtitle").html("Welcome " + USERNAME);
    }

    $(".btnHome").click(function () {
    
      //  alert(USERNAME);
        if (USERNAME == null) {

            $.mobile.changePage("login.html", {
                changeHash: false
            });

        } else {
            $.mobile.changePage("menu.html", {
                changeHash: false
            });
           
        }
    });

  


    $.ajaxSetup({
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connect.\n Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found. [404]');
            } else if (jqXHR.status == 401) {
                alert('401 Unauthorized');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert(jqXHR.responseText);

            }
        }
    });

    $(".btnPower").click(function () {

        if (confirm('Are you sure you want to exit the app?')) {
            alert("Off the app");
            localStorage.clear();
            navigator.app.exitApp();

        } else {
            // Do nothing!
        }

    });

    if (localStorage.getItem("Token") != "") {
        $.ajaxSetup({
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("Token")
            }
        });
    }


});

function showLoading() {
    $.mobile.loading("show", {
        text: "Loading",
        textVisible: true,
        textonly: false,
    });
}

function HideLoading() {
    $.mobile.loading("hide");
}
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    var hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
function convertJsonDateTime(data) {
    var dateString = data;
    var reggie = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
    var dateArray = reggie.exec(dateString);
    var dateObject = new Date(
        (+dateArray[1]),
        (+dateArray[2]) - 1, // Careful, month starts at 0!
        (+dateArray[3]),
        (+dateArray[4]),
        (+dateArray[5]),
        (+dateArray[6])
    );
    return dateObject;
}

$(document).on({
    ajaxStart: function () {
        showLoading();
    },
    ajaxStop: function () {
        HideLoading();
    }
});


