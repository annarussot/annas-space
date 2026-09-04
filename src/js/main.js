document.addEventListener('DOMContentLoaded', function () {
    new Splide('#card-carousel', {
        perPage: 2,
        breakpoints: {
            640: {
                perPage: 1,
            },
        },
        pagination: false,
    }).mount();
});

