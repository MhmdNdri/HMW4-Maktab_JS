function addZero(val) {
    if (val < 10) {
        return "0" + val;
    } else {
        return val;
    }
}
function clock() {
    let myDate = new Date();


    document.getElementById("local").innerHTML = addZero(myDate.getHours()) + ":" + addZero(myDate.getMinutes()) +
        ":" + addZero(myDate.getSeconds());


    let utc_H = myDate.getUTCHours();
    let utc_M = myDate.getUTCMinutes();

    myDate.setHours(utc_H, utc_M + 270);
        document.getElementById("tehran").innerHTML = addZero(myDate.getHours()) + ":" + addZero(myDate.getMinutes()) +
            ":" + addZero(myDate.getSeconds());


    setTimeout("clock()", 1000);  
}      
clock();