$(document).ready(function () {

    $(".faq-question").click(function () {
        $(this).next(".faq-answer").slideToggle(400);

        let sign = $(this).find(".faq-sign");

        if (sign.text() === "+") {
            sign.text("−");
        } else {
            sign.text("+");
        }
    });

});
