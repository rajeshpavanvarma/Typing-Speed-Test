let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let result = document.getElementById("result");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

let uniqueId = setInterval(function() {
    let spanElement = parseInt(timer.textContent)
    let increase = spanElement + 1
    timer.textContent = increase
}, 1000)

function QuoteFun() {
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let Quote = jsonData.content
            quoteDisplay.textContent = Quote
        })
}
QuoteFun()
submitBtn.addEventListener("click", function() {
    if (quoteDisplay.textContent === quoteInput.value) {
        result.textContent = "You typed in " + timer.textContent + " seconds";
        clearInterval(uniqueId);
    } else {
        result.textContent = "You typed in incorrect sentence"
    }
})

resetBtn.addEventListener("click", function() {
    speedTypingTest.classList.toggle("d-none")
    spinner.classList.remove("d-none")
    QuoteFun()
    spinner.classList.add("d-none")
    speedTypingTest.classList.toggle("d-none")
    timer.textContent = 0
    quoteInput.value = ""
    result.textContent = ""
})