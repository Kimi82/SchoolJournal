var allAVG = [];
var allimportance = [];
var allMarks = [];
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
    //take all marks to array
    allMarks.push(cage1);
    console.log(cage1)
    
               
})



    //making one "cage"
function cage(intMarks, intImportance, subject, paragraph, ImportanceAVG){
    this.intMarks = intMarks;
    this.intImportance = intImportance;
    this.subject = subject;
    this.paragraph = paragraph;
    
    
    this.choose = function(){
        if(intMarks=="" || intImportance=="" || subject=="" || paragraph=="" || intMarks>6 || intImportance>5 ){
            body = document.getElementById("body")
            var warning = document.createElement("div");
            warning.classList.add("alert", "alert-danger");
            warning.setAttribute("role","alert");
            warning.innerText = "One of the fields is empty or Marks or importance is too high!";
            warning.setAttribute("id", "warning");
            body.appendChild(warning);
            //delete warning after 3 sec
            setTimeout(function(){ 
                var elem = document.getElementById("warning");
                elem.parentNode.removeChild(elem);

             }, 3000);
            
        } else{
            this.print();
            

        }
    

        
    }

    this.print = function(){
        //changing color of cards
        switch(intImportance){
            case 1:
            bgc = "bg-secondary"
            break;
            case 2:
            bgc = "bg-warning"
            break;

            case 3:
            bgc = "bg-danger"
            break;
            default:
            bgc = "bg-secondary"
            break;
        }
        
        var deck = document.getElementById("deck");
        var desc = document.createElement("div");
        
        desc.classList.add("card", "text-white", bgc, "mb-3")
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
        allimportance.push(intImportance);
        var sum = 0;
        var denominator = 0;
        for(var i=0; i<allAVG.length; i++){ 
            sum += allimportance[i] * allAVG[i];
            denominator += allimportance[i] 
            avgsum = sum/denominator;
            
        }
        avgsum = Math.round(avgsum * 100) / 100; // rounding
        var avgcard = document.getElementById("avgcard").innerHTML="AVG: "+avgsum;

        localStorage.setItem('marks', allMarks);
        console.log("DODANEAUUU");
        console.log(allMarks)


        //deleting warning
        if(warning) document.getElementById('warning').outerHTML = "";
           
        
        
        
        

    }
    
    //local Storage Class
    class store{
       static getMarks(){
        
        }

        static displayMarks(){

        }

        static addMarks(allMarks){  
            
        }
        static removeMarks(){

        }
    }

  
}
var deletebutton = document.getElementById("deleteButton").addEventListener("click", function(){
     document.getElementById("cardbody").innerHTML=""

    
})
