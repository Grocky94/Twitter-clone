
let verified = document.getElementById("Verified");
let showFilter = document.getElementById("filter-box")
let page = document.getElementById("screen")
let cross = document.getElementById("cross")
let more = document.getElementById("clickMore");

document.addEventListener("DOMContentLoaded", function () {

    verified.addEventListener('click', function open() {
        // alert('clicked');

        if (showFilter.style.display === "none") {
            showFilter.style.display = "block"

        } else {
            showFilter.style.display = "none"

        }
    })

    cross.addEventListener('click', function close() {

        if (showFilter.style.display === "block") {
            showFilter.style.display = "none"
        } else {
            showFilter.style.display = "block"
        }
    })


    more.addEventListener("pointerdown", function pop() {
        if (moreBox.style.display === "none") {
            moreBox.style.display = "block"
        } else {
            moreBox.style.display = "none"
        }
    })
let moreBox = document.getElementById("more-div");

    document.addEventListener("click", function moveOut(e) {
        if (e.target !== more) {
            moreBox.style.display = "none"
        }else {
            moreBox.style.display = "block"
        }
    })

    let draftBtn = document.getElementById("draftBtn")
    let draftBox = document.getElementById("draft")
    draftBtn.addEventListener("click", function dft(e) {
        if (draftBtn.contains(e.target)) {
            if (draftBox.style.display === "none") {
                draftBox.style.display = "block";
            } else {
                draftBox.style.display = "none";
            }
        }
    });
});
