function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
        textbox.addEventListener(event, function (e) {
            let heightinMeter = document.getElementById("HiM").value
            let weightinKilo = document.getElementById("WiK").value

            if (heightinMeter != '' && weightinKilo != '') {
                let BMI = weightinKilo / (Math.pow(heightinMeter, 2))

                document.getElementById("BMIcalc").value = BMI.toFixed(2)
            } else {
                document.getElementById("BMIcalc").value = ''
            }
            if (inputFilter(this.value)) {
                // Accepted value
                if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
                    this.classList.remove("input-error");
                    this.setCustomValidity("");
                }
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;

            } else if (this.hasOwnProperty("oldValue")) {
                // Rejected value - restore the previous one
                this.classList.add("input-error");
                this.setCustomValidity(errMsg);
                this.reportValidity();
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                // Rejected value - nothing to restore
                this.value = "";
            }
        });
    });
}




setInputFilter(document.getElementById("HiM"), function (value) {
    return /^-?\d*[.,]?\d{0,2}$/.test(value) && (value === "" || parseInt(value) <= 2);
}, "Please enter the right number");
setInputFilter(document.getElementById("WiK"), function (value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 300);
}, "Must be between 0 and 300");