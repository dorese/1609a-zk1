$(function() {
    new Swiper(".swiper-container", {
        loop: true,
        autoplay: true
    });
    $.ajax({
        url: "/api/swiper",
        dataType: "json",
        success: function(opt) {
            console.log(opt)
            if (opt.code === 1) {
                renderSwiper(opt.data)

            }


        }
    })

    function renderSwiper(data) {
        var str = "";
        var html = "";
        console.log(data);
        str += `<div class="swiper-slide">`;
        data.forEach(function(item) {
            console.log(item.list)

        })
        str += `</div">`;
        $(".swiper-wrapper").html(str);

    }


})