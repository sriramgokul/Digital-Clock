

function DisplayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let mins = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());

    if(hr > 12){
        hr = hr - 12;
        document.getElementById("ampm").innerHTML = ampm;
        ampm.innerHTML = "PM";
    }
    
    document.getElementById("hours").innerHTML = padZero(hr);
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("seconds").innerHTML = sec;
}

function padZero(num) {
    return num < 10 ? "0" + num : num;
}


setInterval(DisplayTime,500);