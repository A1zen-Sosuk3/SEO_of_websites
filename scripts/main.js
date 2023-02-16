"use strict"
console.log('problems?')

// burger menu
$(document).ready(function () {
    $('.header_burger, .header_link, .dropdown_item-name').click(function (event) {
        $('.header_burger,.header_menu, .header_list').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // dropdown menu
    $('.dropdown_menu_button').click(function (event) {
        $('.dropdown_menu, .header_link1, .triangle').toggleClass('active');
    });
    $('.header_link, .header_link2, .header_link3').click(function (event) {
        $('.dropdown_menu, .header_link1, .triangle').removeClass('active');
    });

    // dropdown menu2
    $('.dropdown_menu_button2').click(function (event) {
        $('.dropdown_menu2, .header_link2, .triangle2').toggleClass('active');
    });
    $('.header_link, .header_link1, .header_link3').click(function (event) {
        $('.dropdown_menu2, .header_link2, .triangle2').removeClass('active');
    });

    // dropdown menu3
    $('.dropdown_menu_button3').click(function (event) {
        $('.dropdown_menu3, .header_link3, .triangle3').toggleClass('active');
    });
    $('.header_link, .header_link1, .header_link2').click(function (event) {
        $('.dropdown_menu3, .header_link3, .triangle3').removeClass('active');
    });

    // close btn
    $('.btn-close').click(function (event) {
        $('.alert_container').addClass('turnOff');
    });

    // theme - switcher + saver
    $('.checkbox').click(function (event) {

        $('.checkbox').toggleClass('active');

        if ($('.checkbox').hasClass('active')) {
            $('html').removeClass('dark').addClass('light');
            localStorage.setItem("lightIsactive", "true")
        } else {
            $('html').removeClass('light').addClass('dark');
            localStorage.clear()
        };
    });
    const lightIsactive = localStorage.getItem("lightIsactive");
    if (lightIsactive == "true") {
        $('html').removeClass('dark').addClass('light');
        $('.checkbox').addClass('active')
    };
});


// To Top Button

const scrollBtn = document.querySelector('.isShowBtn')

window.onscroll = () => {
    if (window.scrollY > 700) {
        scrollBtn.classList.remove('hide')
    } else if (window.scrollY < 700) {
        scrollBtn.classList.add('hide')
    }
};

scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
};


