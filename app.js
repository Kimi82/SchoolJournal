var allAVG = [];
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
function cage(intMarks, intImportance, subject, paragraph, ImportanceAVG){
    this.intMarks = intMarks;
    this.intImportance = intImportance;
    this.subject = subject;
    this.paragraph = paragraph;
    
    
    this.choose = function(){
        if(intMarks=="" || intImportance=="" || subject=="" || paragraph=="" ){
            body = document.getElementById("body")
            var warning = document.createElement("div");
            warning.classList.add("alert", "alert-danger");
            warning.setAttribute("role","alert");
            warning.innerText = "One of the fields is empty!";
            warning.setAttribute("id", "warning");
            body.appendChild(warning);
            //delete warning after 3 sec
            setTimeout(function(){ 
                var elem = document.getElementById("warning");
                elem.parentNode.removeChild(elem);

             }, 2000);
            
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
        
        //adding importance to array and print it to AVG div
        allAVG.push(intMarks);
        
        var sum = 0;
        for(var i=0; i<allAVG.length; i++){ 
            sum += allAVG[i];
            avgsum = sum/allAVG.length;
            
        }
        avgsum = Math.round(avgsum * 100) / 100; // rounding
        var avgcard = document.getElementById("avgcard").innerHTML="AVG: "+avgsum;

        


        //deleting warning
        if(warning) document.getElementById('warning').outerHTML = "";
           
        
        
        
        

    }

  
}

