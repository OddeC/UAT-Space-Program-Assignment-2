function countdownTimer(){
    console.log("countdownTimer() started");
    var CurrTime = 50

    setTimeout(function(){
        document.getElementById("BlastOffText"),innerHTML = CurrTime;
        console.log("45")
        currTIme = currTime - 5;
    }, 5000);

setTimeout(function(){
    document.getElementById("BlastOffText"),innerHTML = CurrTime;
    console.log("40")
    currTIme = currTime - 5;
}, 10000);

setTimeout(function(){
    document.getElementById("BlastOffText"),innerHTML = CurrTime;
    console.log("35")
    currTIme = currTime - 5;
}, 15000);

setTimeout(function(){
    document.getElementById("BlastOffText"),innerHTML = CurrTime;
    currTIme = currTime - 5;
    console.log("30")
}, 20000);

setTimeout(function(){
    document.getElementById("BlastOffText"),innerHTML = CurrTime;
    currTIme = currTime - 5;
    console.log("25")
}, 25000);

setTimeout(function(){
    document.getElementById("BlastOffText"),innerHTML = CurrTime;
    currTIme = currTime - 5;
    console.log("20")
}, 30000);

setTimeout(function(){
    document.getElementById("BlastOffText"),innerHTML = CurrTime;
    currTIme = currTime - 5;
    console.log("15")
}, 35000);

setTimeout(function(){
    document.getElementById("BlastOffText"),innerHTML = CurrTime;
    currTIme = currTime - 5;
    console.log("10")
}, 40000);

setTimeout(function(){
    document.getElementById("BlastOffText"),innerHTML = CurrTime;
    currTIme = currTime - 5;
    console.log("5")
}, 45000);

setTimeout(function(){
    document.getElementById("BlastOffText"),innerHTML = "BlastOff!!";
    console.log("Blastoff")
    currTIme = currTime - 5;
}, 50000);
}