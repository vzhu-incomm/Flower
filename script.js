function loadAnimation() {
    document.getElementById("frame").style.display = "block";
    document.getElementById("textOne").innerText = document.getElementById("inputOne").value;


    // horizontal();
    timer();
}

var frameNum = 1;
function timer() {


    if (frameNum < 7) {
        if (frameNum % 1 == 0) {
            document.getElementById("frame").src = "/img/Frame" + frameNum + "-r.png";
        }
        frameNum = frameNum + 1;
        my_time = setTimeout('timer()', 750);
    } else if (frameNum<=9){
        if (frameNum == 8){
            document.getElementById("box").style.display = "block";
        }
        if (frameNum == 9){
            document.getElementById("click").style.display = "block";
        }
        frameNum = frameNum + 1;
        my_time = setTimeout('timer()', 1400);
    } 

}

function boxZoom(){
    var w = document.getElementById('box').style.width;
    wnum = w.slice(0, -2);
    wnum = parseFloat(wnum);

    var t = document.getElementById('box').style.top;
    tnum = t.slice(0, -2);
    tnum = parseFloat(tnum);

    var l = document.getElementById('box').style.left;
    lnum = l.slice(0, -2);
    lnum = parseFloat(lnum);

    if (wnum < 20){
        document.getElementById('box').style.width = wnum + 0.2 + "vw";
        document.getElementById('box').style.top = tnum - 0.09 + "vh";
        document.getElementById('box').style.left = lnum - 0.09 + "vw";
        my_time = setTimeout('boxZoom()', 100);
    } else {
        document.getElementById('box').src = "/img/giftcard.png"
        document.getElementById('textTwo').style.display="block";
        document.getElementById('two').innerText=document.getElementById("inputTwo").value;
    }

}    

// function showBox() {
//     document.getElementById("box").style.display = "block";

// }

function box() {

    if (document.getElementById("boxback").style.display == "none") {
        document.getElementById("boxback").style.display = "block";
        document.getElementById("boxfront").style.display = "block";
        document.getElementById("boxlid").style.display = "block";
    }
    var y = document.getElementById('boxback').style.top;
    ynum = y.slice(0, -2);
    ynum = parseFloat(ynum);
    if (ynum < 26) {
        document.getElementById('boxback').style.top = ynum + 0.025 + "vh";
        document.getElementById('boxfront').style.top = ynum + 0.025 + "vh";
        document.getElementById('boxlid').style.top = ynum + 0.025 + "vh";
        document.getElementById('giftcard').style.top = ynum + 0.025 + "vh";

    } else if (ynum < 41) {
        if (document.getElementById("giftcard").style.display == "none") {
            document.getElementById("giftcard").style.display = "block";
        }
        document.getElementById("textTwoText").style.display = "flex";
        document.getElementById('boxback').style.top = ynum + 0.025 + "vh";
        document.getElementById('giftcard').style.top = ynum + 0.025 + "vh";
        document.getElementById('textTwoText').innerText = document.getElementById("inputTwo").value;
        document.getElementById('textTwoText').style.top = document.getElementById('giftcard').style.top;
        //document.getElementById('textTwoText').style.height=document.getElementById('giftcard').style.height;

        //console.log(document.getElementById('textTwoText').style.top);
        document.getElementById('boxfront').style.top = ynum + 0.025 + "vh";
    } else if (ynum < 60) {
        document.getElementById('boxback').style.top = ynum + 0.025 + "vh";
        document.getElementById('boxfront').style.top = ynum + 0.025 + "vh";
    }

    // var x = document.getElementById('boxlid').style.top;
    // xnum = x.slice(0, -2);
    // xnum = parseFloat(xnum);
    // document.getElementById('boxback').style.top = xnum + 0.025 + "vh";
    // document.getElementById('boxfront').style.top = xnum + 0.025 + "vh";
    // document.getElementById('boxlid').style.top = xnum + 0.025 + "vh";

}
