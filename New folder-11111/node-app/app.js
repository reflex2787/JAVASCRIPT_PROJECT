
var btn=document.querySelector("#button");
var cb=document.querySelector(".main-box")

btn.addEventListener(
    "click",
    function (e){
     var divele=document.createElement("div")
     divele.classList.add("box")
     cb.appendChild(divele)
     var sdiv=document.createElement("div")
     sdiv.classList.add("top")
     divele.appendChild(sdiv)
     var inp=document.createElement("input")
     divele.appendChild(inp)
     sdiv.innerHTML ='<i class="fa-solid fa-trash"></i>';
     sdiv.querySelector("i").addEventListener(
        "click",
        function(e){
        divele.remove()
        }
     )
     
     
    
     
    }
)