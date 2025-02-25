function IWontStealYourCreditCardInformation() {
    var n
    n = parseFloat(document.getElementById('numberIn').value)
    if (!Number.isInteger(n) || n < 2) {
        showOverlay('InputNotValid', n)
        return
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            showOverlay('isntPrime', n)
            return
        }
    }
    showOverlay('isPrime', n)
}

function showOverlay(caseType, num) {
    const overlay = document.getElementById("overlay");
    const overlayText = document.getElementById("overlay-text");
    if (caseType == 'isPrime') {
        overlayText.textContent = "WOW, " + num + " is now mine and is a prime number, incredible "
    }
    if (caseType == 'isntPrime') {
        overlayText.textContent = "Unfortunately, " + num + " is not a prime number, but I got your credit card information now, muhahahaha"
    }
    if (caseType == 'InputNotValid') {
        overlayText.textContent = "I said, put in your credit card information, what is that?"
    }
    setTimeout(() => overlay.classList.remove("hidden"), 10);
    setTimeout(() => overlay.classList.add("hidden"), 3000);
}