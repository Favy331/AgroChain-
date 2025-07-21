"use strict";

$(document).ready(function() {
    $("#signupBtn").on("click", () =>{
        signup();
    })

    const signup = () => {
        const url = "index.php/signup";
        const email = $("#email").val();
        const password = $("#password").val();
        const formData = new FormData(signupForm);
        const data = {
            email: email,
            password:password
        }
        $.ajax({
            url:url,
            method: "POST",
            data: formData,
            dataType: "JSON",
            success: (response) =>{
                const json = JSON.parse(response);
                console.log(response);
                if (json.statuscode == 200) {
                    alert(json.status);
                } else {
                    alert(json.status);
                }
            },
            error: (err) => {
                console.log(err);
            }
        })
    }
});
