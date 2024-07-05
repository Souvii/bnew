
    document.addEventListener('DOMContentLoaded', function () {
        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 4,
            spaceBetween: 0, 
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('.main'),
            smooth: true
        });
    });
    const more = document.querySelector(".more");
    const pt3 = document.querySelector(".part3");
    more.addEventListener('onclick', () => {
        pt3.style.display = 'none';
    });
    
    var customBookSwiper = new Swiper('.custom-swiper-container', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });

