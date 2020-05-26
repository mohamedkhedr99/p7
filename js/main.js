$(function () {
    'use strict';
    $('body').niceScroll({ cursorcolor: '#ff5616' });

});
$(".Font i").click(function () {  // arrow click
    $("html, body").animate({
        scrollTop: $(".Service").offset().top
    }, 1000);
});
$('.de1').click(function () {
    $('.Hid1').slideToggle(600);
});
$('.de2').click(function () {
    $('.Hid2').slideToggle(600);
});
$('.de3').click(function () {
    $('.Hid3').slideToggle(600);
});

var x = $('.Menu .BackGround').innerHeight();
var z = $(window).height();
$(".Menu .Bar").height(z - x);
//ScrollTo The Top
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.Scroll').fadeIn();
    } else {
        $('.Scroll').fadeOut();
    }
});
$('.Scroll').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
//End ScrollTo The Top
// start select ************
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
// End select ************
// Start Section 5 Car Features
$('.Feature1').mouseenter(function () { //Feature1
    $('.Feature1 .Image .Img1').hide();
    $('.Feature1 .Image .Img2').show();
    $('.Feature1 .Wor .BUT1').hide();
    $('.Feature1 .Wor .BUT2').show();
});
$('.Feature1').mouseleave(function () {
    $('.Feature1 .Image .Img1').show();
    $('.Feature1 .Image .Img2').hide();
    $('.Feature1 .Wor .BUT1').show();
    $('.Feature1 .Wor .BUT2').hide();
});
$('.Feature2').mouseenter(function () { //Feature2
    $('.Feature2 .Image .Img1').hide();
    $('.Feature2 .Image .Img2').show();
    $('.Feature2 .Wor .BUT1').hide();
    $('.Feature2 .Wor .BUT2').show();
});
$('.Feature2').mouseleave(function () {
    $('.Feature2 .Image .Img1').show();
    $('.Feature2 .Image .Img2').hide();
    $('.Feature2 .Wor .BUT1').show();
    $('.Feature2 .Wor .BUT2').hide();
});
$('.Feature3').mouseenter(function () { //Feature3
    $('.Feature3 .Image .Img1').hide();
    $('.Feature3 .Image .Img2').show();
    $('.Feature3 .Wor .BUT1').hide();
    $('.Feature3 .Wor .BUT2').show();
});
$('.Feature3').mouseleave(function () {
    $('.Feature3 .Image .Img1').show();
    $('.Feature3 .Image .Img2').hide();
    $('.Feature3 .Wor .BUT1').show();
    $('.Feature3 .Wor .BUT2').hide();
});
$('.Feature4').mouseenter(function () { //Feature4
    $('.Feature4 .Image .Img1').hide();
    $('.Feature4 .Image .Img2').show();
    $('.Feature4 .Wor .BUT1').hide();
    $('.Feature4 .Wor .BUT2').show();
});
$('.Feature4').mouseleave(function () {
    $('.Feature4 .Image .Img1').show();
    $('.Feature4 .Image .Img2').hide();
    $('.Feature4 .Wor .BUT1').show();
    $('.Feature4 .Wor .BUT2').hide();
});
$('.Feature5').mouseenter(function () { //Feature5
    $('.Feature5 .Image .Img1').hide();
    $('.Feature5 .Image .Img2').show();
    $('.Feature5 .Wor .BUT1').hide();
    $('.Feature5 .Wor .BUT2').show();
});
$('.Feature5').mouseleave(function () {
    $('.Feature5 .Image .Img1').show();
    $('.Feature5 .Image .Img2').hide();
    $('.Feature5 .Wor .BUT1').show();
    $('.Feature5 .Wor .BUT2').hide();
});
$('.Feature6').mouseenter(function () { //Feature6
    $('.Feature6 .Image .Img1').hide();
    $('.Feature6 .Image .Img2').show();
    $('.Feature6 .Wor .BUT1').hide();
    $('.Feature6 .Wor .BUT2').show();
});
$('.Feature6').mouseleave(function () {
    $('.Feature6 .Image .Img1').show();
    $('.Feature6 .Image .Img2').hide();
    $('.Feature6 .Wor .BUT1').show();
    $('.Feature6 .Wor .BUT2').hide();
});
$('.Feature7').mouseenter(function () { //Feature7
    $('.Feature7 .Image .Img1').hide();
    $('.Feature7 .Image .Img2').show();
    $('.Feature7 .Wor .BUT1').hide();
    $('.Feature7 .Wor .BUT2').show();
});
$('.Feature7').mouseleave(function () {
    $('.Feature7 .Image .Img1').show();
    $('.Feature7 .Image .Img2').hide();
    $('.Feature7 .Wor .BUT1').show();
    $('.Feature7 .Wor .BUT2').hide();
});
$('.Feature8').mouseenter(function () { //Feature8
    $('.Feature8 .Image .Img1').hide();
    $('.Feature8 .Image .Img2').show();
    $('.Feature8 .Wor .BUT1').hide();
    $('.Feature8 .Wor .BUT2').show();
});
$('.Feature8').mouseleave(function () {
    $('.Feature8 .Image .Img1').show();
    $('.Feature8 .Image .Img2').hide();
    $('.Feature8 .Wor .BUT1').show();
    $('.Feature8 .Wor .BUT2').hide();
});
$('.Feature9').mouseenter(function () { //Feature9
    $('.Feature9 .Image .Img1').hide();
    $('.Feature9 .Image .Img2').show();
    $('.Feature9 .Wor .BUT1').hide();
    $('.Feature9 .Wor .BUT2').show();
});
$('.Feature9').mouseleave(function () {
    $('.Feature9 .Image .Img1').show();
    $('.Feature9 .Image .Img2').hide();
    $('.Feature9 .Wor .BUT1').show();
    $('.Feature9 .Wor .BUT2').hide();
});
$('.Feature10').mouseenter(function () { //Feature10
    $('.Feature10 .Image .Img1').hide();
    $('.Feature10 .Image .Img2').show();
    $('.Feature10 .Wor .BUT1').hide();
    $('.Feature10 .Wor .BUT2').show();
});
$('.Feature10').mouseleave(function () {
    $('.Feature10 .Image .Img1').show();
    $('.Feature10 .Image .Img2').hide();
    $('.Feature10 .Wor .BUT1').show();
    $('.Feature10 .Wor .BUT2').hide();
});
$('.Feature11').mouseenter(function () { //Feature11
    $('.Feature11 .Image .Img1').hide();
    $('.Feature11 .Image .Img2').show();
    $('.Feature11 .Wor .BUT1').hide();
    $('.Feature11 .Wor .BUT2').show();
});
$('.Feature11').mouseleave(function () {
    $('.Feature11 .Image .Img1').show();
    $('.Feature11 .Image .Img2').hide();
    $('.Feature11 .Wor .BUT1').show();
    $('.Feature11 .Wor .BUT2').hide();
});
$('.Feature12').mouseenter(function () { //Feature12
    $('.Feature12 .Image .Img1').hide();
    $('.Feature12 .Image .Img2').show();
    $('.Feature12 .Wor .BUT1').hide();
    $('.Feature12 .Wor .BUT2').show();
});
$('.Feature12').mouseleave(function () {
    $('.Feature12 .Image .Img1').show();
    $('.Feature12 .Image .Img2').hide();
    $('.Feature12 .Wor .BUT1').show();
    $('.Feature12 .Wor .BUT2').hide();
});
$('.FEATUREDCARSBUTTON button').click(function () { //SHOW MORE
    $('.FEATUREDCARSBUTTON button').hide();
    $('.HIDEEN').fadeIn();
    $('body').getNiceScroll().resize();
});