$(function() {
    flag = true; //true - login, false - registration
    var flag = {Value: true};

    login();

    act_button = $("h2.active");
    inact_button = $("h2.inactive");

    act_button.on("click", function () {
        makeOtherChoise(act_button, inact_button, flag, true);
        // alert(flag.Value);
    });
    inact_button.on("click", function () {
        makeOtherChoise(act_button, inact_button, flag, false);
        // alert(flag.Value);
    });

});

function makeOtherChoise(act_button, inact_button, flag, sender)
{
    if (flag.Value === sender)
        return;

    temp = act_button.attr("class");
    act_button.attr("class", inact_button.attr("class"));
    inact_button.attr("class", temp);
    flag.Value = sender;
    if (flag.Value === true) login(); else registration();
}

function login() {
    $(".for-rem").remove();
    $("#formFooter").remove();

    $("#formContent").append("<div id=\"formFooter\"></div>");

    $("#formContent form")
        .append("<input type=\"text\" id=\"login\" class=\"fadeIn second for-rem\" name=\"login\" placeholder=\"Login\">")
        .append("<input type=\"password\" id=\"password\" class=\"fadeIn third for-rem\" name=\"password\" placeholder=\"Password\">")
        .append("<input type=\"submit\" class=\"fadeIn fourth for-rem\" id=\"log-sub\" value=\"Log In\">");
    // $("#log-sub").on("click", submintLogin());
    $("#formContent form").attr("action", "sign_in/");
    $("#formFooter")
        .append("<a class=\"underlineHover\" href=\"#\">Forgot Password?</a>");
}

function registration() {
    $(".for-rem").remove();
    $("#formFooter").remove();

    $("#formContent")
        .animate({"max-width": "1200px", "max-height": "90%"}, 1000);
    $("#formContent").append("<div id=\"formFooter\"></div>");

    // $("#formContent").append("<form></form>");
    // $("#formContent").append("<div id=\"formFooter\"></div>");

    $("#formContent form")
        .append("<input type=\"text\" id=\"f_name\" class=\"fadeIn second for-rem\" name=\"f_name\" placeholder=\"Name\">")
        .append("<input type=\"text\" id=\"s_name\" class=\"fadeIn second for-rem\" name=\"s_name\" placeholder=\"Surname\">")
        .append("<input type=\"email\" id=\"email\" class=\"fadeIn second for-rem\" name=\"email\" placeholder=\"E-mail\">")
        .append("<input type=\"text\" id=\"login\" class=\"fadeIn second for-rem\" name=\"login\" placeholder=\"Login\">")
        .append("<input type=\"text\" id=\"location\" class=\"fadeIn second for-rem\" name=\"location\" placeholder=\"Location\">")
        .append("<input type=\"password\" id=\"password\" class=\"fadeIn third for-rem\" name=\"password\" placeholder=\"Password\">")
        .append("<input type=\"submit\" class=\"fadeIn fourth\" id=\"reg-sub for-rem\" value=\"Sign up\">");

    // $("#log-reg").on("submit", submintRegistration);
    $("#formContent form").attr("action", "sign_up/");

    $("#formContent form input").css("width", "30%");

    $("#formFooter")
        .append("<a class=\"underlineHover\" href=\"#\"></a>");
    // $("#formFooter")
    //     .append("<a class=\"underlineHover\" href=\"#\">Forgot Password?</a>")
}

// function submintRegistration() {
//     f_name = '"f_name":"' + $("#f-name").val() + '"';
//     s_name = '"s_name":"' + $("#s-name").val() + '"';
//     email = '"email":"' + $("#email").val() + '"';
//     log = '"login":"' + $("#login").val() + '"';
//     loc = '"location":"' + $("#location").val() + '"';
//     password = '"password":"' + $("#password").val() + '"';
//
//     str = f_name + ', ' + s_name + ', ' + email + ', ' + log + ', ' + loc + ', ' + password;
//     strJSON = JSON.parse(str);
//     console.log(strJSON);
//     // alert(str);
//     sendRegistration(strJSON);
// }

// function sendRegistration(strJson) {
//     console.log("create post is working!");
//     $.ajax({
//         url : "/base/authorization/registration",
//         type : "POST",
//         data : strJSON, // data sent with the post request
//         dataType : 'json',
//
//         // handle a successful response
//         success : function(json) {
//             // $('#post-text').val(''); // remove the value from the input
//             console.log(json); // log the returned json to the console
//             console.log("success"); // another sanity check
//         },
//
//         // handle a non-successful response
//         error : function(xhr,errmsg,err) {
//             // $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
//             //     " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
//             console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
//         }
//     });
// }