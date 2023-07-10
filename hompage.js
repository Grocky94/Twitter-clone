let verified = document.getElementById("Verified");
let showFilter = document.getElementById("filter-box");
let page = document.getElementById("screen");
let cross = document.getElementById("cross");
let more = document.getElementById("clickMore");
let moreBox = document.getElementById("more-div");
let draftBtn = document.getElementById("draftBtn");
let draftBox = document.getElementById("draft");
let profBtn = document.getElementById("prof-tool");
let profBox = document.getElementById("addition-child-more-small-div");
let profTool = document.getElementById("twitter-for-professional");
let profpopup = document.getElementById("Professional-box");
let profpopupClose = document.getElementById("x");
let middleArea = document.getElementById("middle-body");
let rightArea = document.getElementById("right-body");


// linstner to load all together
document.addEventListener("DOMContentLoaded", function () {


    // for closeing verify popup screen 
    cross.addEventListener('click', function () {
        if (showFilter.style.display === "block") {
            showFilter.style.display = "none";
        } else {
            showFilter.style.display = "block";
        }
    });

    // function made to stop default property 
    moreBox.addEventListener("click", function (e) {
        e.stopPropagation();// use to not trigger screen when call child listner
    });

    document.addEventListener("click", function () {
        moreBox.style.display = "none";
    });

   

});

// for verify 
verified.addEventListener('click', function () {
    if (showFilter.style.display === "none") {
        showFilter.style.display = "block";
    } else {
        showFilter.style.display = "none";
    }
})
// made for more btn listner 
more.addEventListener("click", function (e) {
    e.stopPropagation();//use to not trigger child listner
    if (getComputedStyle(moreBox).display === "none") {
        moreBox.style.display = "block";
        profBox.style.display = "none";
    } else {
        moreBox.style.display = "none";
    }
});

// listner for draft 
draftBtn.addEventListener("click", function (e) {
    if (draftBtn.contains(e.target)) {
        if (draftBox.style.display === "none") {
            draftBox.style.display = "block";
        } else {
            draftBox.style.display = "none";
        }
    }
});

// listner for profession 
profBtn.addEventListener("click", function () {
    if (getComputedStyle(profBox).display === "none") {
        profBox.style.display = "block";
    } else {
        profBox.style.display = "none";
    }
});
// listner for professional inner child 
profTool.addEventListener("click", function (e) {
    e.stopPropagation();
    if (e.currentTarget === profTool) {
        profpopup.style.display = "block"
        middleArea.style.position = 'fixed';
        rightArea.style.position = 'fixed';
    } else {
        profpopup.style.display = "none"
    }
})
profpopupClose.addEventListener("click", function (e) {
    if (e.currentTarget === profpopupClose) {
        console.log(e.target)
        profpopup.style.display = "none"
        middleArea.style.position = 'relative';
        rightArea.style.position = 'relative';
    } else {
        profpopup.style.display = "block"
        middleArea.style.position = 'fixed';
        rightArea.style.position = 'fixed';

    }
})