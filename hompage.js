
let verified = document.getElementById("Verified");
let showFilter = document.getElementById("filter-box")
let page = document.getElementById("screen")
let cross = document.getElementById("cross")

verified.addEventListener('click', function open() {
    // alert('clicked');

    if (showFilter.style.display == "none") {
        showFilter.style.display = "block"

    } else {
        showFilter.style.display = "none"

    }
})



cross.addEventListener('click', function close() {

    if (showFilter.style.display = "block") {
        showFilter.style.display = "none"
    } else {
        showFilter.style.display = "block"

    }
})
