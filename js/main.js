$(document).ready(function() {

    $("#tab-bar .listing-item").click(function() {
        $("#tab-bar .listing-item.active").removeClass("active")
        $(this).addClass("active")
        var active = $("#tab-bar .listing-item.active").attr('data')
        switch (active) {
            case '1':
                $(".list .selected").removeClass('selected')
                $(".list .top-seller").addClass('selected')
                break;
            case '2':
                $(".list .selected").removeClass('selected')
                $(".list .featured").addClass('selected')
                break;
            case '3':
                $(".list .selected").removeClass('selected')
                $(".list .most-review").addClass('selected')
                break;
        }
    });

    const modalContainer = $(".modal-container");

    $(".mobile-icon").click(function() {
        $(".modal-nav").css("display", "block");
    });
    $(".modal-close").click(function() {
        $(".modal-nav").css("display", "none");
    });
});