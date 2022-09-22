function openNav() {
    if ($("#navBar").width() == "250") {
        closeNav();
    } else {
        $("#navBar").animate({ width: '250px' }, 500);
        $("#OpenNav").animate({ left: '250px' }, 500);
        $(".layar").animate({ left: '250px' }, 500);
    }
}

function closeNav() {
    $("#navBar").animate({ width: '0px' }, 500);
    $("#OpenNav").animate({ left: '0px' }, 500);
    $(".layar").animate({ left: '0px' }, 500);
}

$(".Home").attr("href", "#Home");
$(".Details").attr("href", "#singers");
$(".Duration").attr("href", "#countsec");
$(".Contact").attr("href", "#JOIN-US");


$(document).ready(function () {
    $("#singers div:first").css("display", "block");
    $("#singers h3").click(function () {
        $(this).next().slideToggle(500);
        $("#singers p").not($(this).next()).slideUp(500);
    });
});


function countsec() {
    let now = new Date();
    let eventDate = new Date(2022, 8, 3);

    let currentTiime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTiime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = `<h3 class=" py-5 border">${d} D</h3>`;
    document.getElementById("hours").innerHTML = `<h3 class=" py-5 border">${h} h</h3>`;
    document.getElementById("minutes").innerHTML = `<h3 class=" py-5 border">${m} m</h3>`;
    document.getElementById("seconds").innerHTML = `<h3 class=" py-5 border">${s} s</h3>`;

    setTimeout(countsec, 1000);
}

countsec();



let max = 100;

$("textarea").keyup(function () {
    let number = $(this).val().length;
    let character = max - number;
    if (character <= 0) {
        $("#numberChar").text("your available character finished");
    } else {
        $("#numberChar").text(character);
    }
});
