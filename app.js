var submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", function(){
    var marks = document.getElementById("marks").value
    var importance = document.getElementById("importance").value
    var desc = document.getElementById("desc").value
    var subject = document.getElementById("subject").value
    var intMarks = parseInt(marks);
    var intImportance = parseInt(importance);
    var paragraph = document.getElementById("desc").value

    var cage1 = new cage(intMarks, intImportance, subject, paragraph)
    cage1.choose();
    
    
    
    
})
    //making one "cage"
function cage(intMarks, intImportance, subject, paragraph){
    this.intMarks = intMarks;
    this.intImportance = intImportance;
    this.subject = subject;
    this.paragraph = paragraph;

    this.choose = function(){
        if(intMarks=="" || intImportance=="" || subject=="" || paragraph=="" ){
            var body = document.getElementsByClassName("container");
            var warning = document.createElement("div");
            warning.classList.add("alert", "alert-danger");
            warning.setAttribute("role","alert");
            warning.innerText = "All input must be full!";
            body.appendChild(warning);
            
        } else{
            this.print();
        }
    

        
    }

    this.print = function(){
        var deck = document.getElementById("deck");
        var desc = document.createElement("div");
        
        desc.classList.add("card", "text-white", "bg-success", "mb-3")
        desc.style.setProperty("max-width", "18rem")

        var descHead = document.createElement("div")
        descHead.classList.add("card-header")
        descHead.innerHTML = subject;

        var descTitle = document.createElement("h5");
        descTitle.classList.add("card-title")
        descTitle.innerHTML = intMarks;

        var descPara = document.createElement("p");
        descPara.classList.add("card-text")
        descPara.innerHTML = paragraph;
        
        desc.append(descHead);
        desc.append(descTitle);
        desc.append(descPara);
        deck.appendChild(desc);
        

    }
}

