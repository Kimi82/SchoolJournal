var submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", function(){
    var marks = document.getElementById("marks").value

    if(isNaN(marks)){
        alert("SUPER TO LICZBA!")
    }
    else{
        //alert than mark is not a integer
        const warning = document.createElement("div");
        warning.innerText= "Marks need to be an numbers!";
        warning.setAttribute("role","alert")
        warning.classList.add("alert","alert-warning");
        const al = document.querySelector("body");
        al.appendChild(warning)
    }
    
    var importance = document.getElementById("importance").value
    var subject = document.getElementById("subject").value
    
})
    
//<div class="alert alert-warning" role="alert">
 // A simple warning alert—check it out!
//</div>