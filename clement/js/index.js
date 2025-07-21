"use strict";

$(document).ready(function(){
    alert("Welcome to Agro chain");
})

singup = () =>{
    const url = "index.php/singup";
    $("#email")
    $.ajax({
        url:url,
        method: "POST",
        data: data,
        dataType: "JSON",
        success: (response) =>{
          console.log(response);
          if(response.statuscode == 200){
         } else{
                alert(json.status)
            }
        },
        error: (err) => {
            console.log(err);
        }

    })
}

