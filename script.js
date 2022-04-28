function loadAnimation() {
    document.getElementById("frame").style.display = "block";
    document.getElementById("textOne").innerText = sParameter1;


    // horizontal();
    timer();
}


var query = window.location.search.substring(1);
    // pulls variables from URL string
    function getURLVariable(name) {
        url = location.href;
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( url );
        return results == null ? null : decodeURIComponent(results[1]);
    }
    var sParameter1, sParameter2, sParameter3, color;
    // gifter //
    sParameter1 = getURLVariable('to');
    
    //sParameter1 = "Zach & Kelsey";
    
    // special message //	
    sParameter2 = getURLVariable('message');	
    //sParameter2 = "Congratulations from Sarah & Eric";	
    

    sParameter3 = getURLVariable('color');	
    //sParameter2 = "Congratulations from Sarah & Eric";	
    var color = sParameter3;


var frameNum = 1;
function timer() {


    if (frameNum <= 7) {
        if (frameNum % 1 == 0) {
            
            if (frameNum <= 4) {
                document.getElementById("frame").src = ".../img/Frame" + frameNum + ".png";
            } else {
                document.getElementById("frame").src = ".../img/Frame" + frameNum + "-"+color + ".png";
            }
            console.log(document.getElementById("frame").src);
        }

        frameNum = frameNum + 1;
        my_time = setTimeout('timer()', 750);
    } else if (frameNum <= 9) {
        if (frameNum == 8) {
            document.getElementById("box").style.display = "block";
        }
        if (frameNum == 9) {
            document.getElementById("click").style.display = "block";
        }
        frameNum = frameNum + 1;
        my_time = setTimeout('timer()', 1400);
    } 
    else {
        boxZoom();
    }

}

function boxZoom() {
    var w = document.getElementById('box').style.width;
    wnum = w.slice(0, -2);
    wnum = parseFloat(wnum);

    var t = document.getElementById('box').style.top;
    tnum = t.slice(0, -2);
    tnum = parseFloat(tnum);

    var l = document.getElementById('box').style.left;
    lnum = l.slice(0, -2);
    lnum = parseFloat(lnum);

    if (wnum < 15) {
        document.getElementById('box').style.width = wnum + 0.3 + "vw";
        document.getElementById('box').style.top = tnum - 0.09 + "vh";
        document.getElementById('box').style.left = lnum - 0.09 + "vw";
        my_time = setTimeout('boxZoom()', 100);
    } else {
        document.getElementById('box').src = "/img/giftcard.png"
        document.getElementById('textTwo').style.display = "block";
        document.getElementById('two').innerText = sParameter2;
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
        document.getElementById('textTwoText').style.top = document.getElementById('giftcard').style.top+5;
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
