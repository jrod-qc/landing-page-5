// This is the quote Modal

$(".hero-btn").on("click", function() {
    var heroBtn = $(".hero-btn");
    var quoteModal = $(".quote-modal");


    if (heroBtn == heroBtn) {
        quoteModal.show();
        quoteModal.css("display", "flex");

    } else {
        console.log("something Went Wrong");
    }
})

$(".exitIcon").on("click", function() {
    var quoteModal = $(".quote-modal");
    var exitIcon = $(".exitIcon");


    if (exitIcon == exitIcon) {
        quoteModal.hide();

    } else {
        console.log("something Went Wrong");
    }
})


// This is the video Modal

$(".play-icon").on("click", function() {
    var playIcon = $(".play-icon");
    var videoModal = $(".video-modal");

    if (playIcon == playIcon) {
        videoModal.show();
        videoModal.css("display", "flex");
    } else {
        console.log("Something Went Wrong");
    }
})

$(".exitIcon2").on("click", function() {
    var exitIcon2 = $(".exitIcon2");
    var videoModal = $(".video-modal");

    if (exitIcon2 == exitIcon2) {
        videoModal.hide();
    } else {
        console.log("Something Went Wrong");
    }
})





// This is the quote Modal

$(".get-quote-btn").on("click", function() {
    var quoteBtn = $(".get-quote-btn");
    var quoteModal = $(".quote-modal");


    if (quoteBtn == quoteBtn) {
        quoteModal.show();
        quoteModal.css("display", "flex");

    } else {
        console.log("something Went Wrong");
    }
})

$(".exitIcon").on("click", function() {
    var quoteModal = $(".quote-modal");
    var exitIcon = $(".exitIcon");


    if (exitIcon == exitIcon) {
        quoteModal.hide();

    } else {
        console.log("something Went Wrong");
    }
})


// This is the nav section

$(".arrow").on("click", function() {
    $(".nav").css("transform", "translateX(180px)");
    $(".arrow").css("display", "none");
    $(".arrow-2").css("display", "block");
})

$(".arrow-2").on("click", function() {
    $(".nav").css("transform", "translateX(0px)");
    $(".arrow").css("display", "block");
    $(".arrow-2").css("display", "none");
})

$(".nav-click").on("click", function() {
    $(".nav").css("transform", "translateX(0px)");
    $(".arrow").css("display", "block");
    $(".arrow-2").css("display", "none");
})