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