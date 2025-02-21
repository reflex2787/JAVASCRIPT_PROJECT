var mainbox = document.querySelector(".main")
var over = document.querySelector(".overlay")
var message = ["NICE", "GOOD", "BRILLIANT", "WOW", "EXCELLENT", "AMAZING", "FANTASTIC", "SUPERB", "AWESOME",
    "MARVELOUS", "TERRIFIC", "GREAT", "PHENOMENAL", "SPECTACULAR", "OUTSTANDING"];

for (var i = 1; i <= 20; i++) {
    var divele = document.createElement("div");
    divele.classList.add("box")
    mainbox.appendChild(divele)
    var r = parseInt(Math.random() * 256).toString(16).padStart(2, "0")
    var g = parseInt(Math.random() * 256).toString(16).padStart(2, "0")
    var b = parseInt(Math.random() * 256).toString(16).padStart(2, "0")
    var colorcode = "#" + r + g + b
    divele.innerText = colorcode;
    divele.style.background = colorcode;
    divele.addEventListener(
        "click",
        function (e) {
            navigator.clipboard.writeText(e.target.innerText);
            myaudio.play()
            over.innerText = message[parseInt(Math.random() * message.length)]
            over.style.transform = "scale(1)"
            over.style.background = e.target.innerText
            setTimeout(
                function () {
                    over.style.transform = "scale(0)"
                }, 1000

            )
        }
    )


}
document.body.addEventListener(
    "mousemove",
    function () {
        var r = parseInt(Math.random() * 256).toString(16).padStart(2, "0")
        var g = parseInt(Math.random() * 256).toString(16).padStart(2, "0")
        var b = parseInt(Math.random() * 256).toString(16).padStart(2, "0")
        var colorcode = "#" + r + g + b
        document.body.style.background = colorcode;

    }
)

