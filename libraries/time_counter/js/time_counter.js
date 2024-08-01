function start_counter(datetime_var, examID) {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let end_datetime = datetime_var;
        //"Jul 30, 2021 07:39:00"

        countDown = new Date(end_datetime).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;
            //document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = makeMeTwoDigits(Math.floor((distance % (day)) / (hour))),
                document.getElementById("minutes").innerText = makeMeTwoDigits(Math.floor((distance % (hour)) / (minute))),
                document.getElementById("seconds").innerText = makeMeTwoDigits(Math.floor((distance % (minute)) / second));

            //do something later when date is reached
            if (distance < 0) {
                //alert("Tiem is up !")
                    //You could do auto submit here                
                location.href = "ExamResult.aspx?ExamID=" + examID;
                clearInterval(x);
            }
            //seconds
        }, 0)


}

function makeMeTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
}