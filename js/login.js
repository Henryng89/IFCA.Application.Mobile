


$(document).one('pagecreate', function () {
     USERNAME = localStorage.getItem("username");

    if (USERNAME == null) {
        $(".btnBack").hide();
        $(".btnHome").hide();
    } else {
        $(".subtitle").html("Welcome " + USERNAME);
        $.mobile.changePage("menu.html", {
            changeHash: false
        });
    }

    $("#btnSignIn").click(function () {

        if ($("#username").val().length > 0 && $("#password").val().length > 0) {

            alert("you have successfully signin");

            localStorage.setItem("username", $("#username").val());
            localStorage.setItem("token", "abcdefg");
            $(".subtitle").html("Welcome " + $("#username").val());
            $(".btnBack").show();
            $.mobile.navigate("menu.html", { transition: "slide", info: "info about the #bar hash" });
        } else {
            alert("Username or password  is mendatory");
        }
    });



});


