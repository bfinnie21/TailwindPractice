$(function () {
    if (localStorage.theme === 'dark' /*|| (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)*/) {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
    }

    //localStorage.theme = 'light'

    //localStorage.theme = 'dark'

    //localStorage.removeItem('theme')
});


$(".toggle-dark").on("click", function () {
    event.preventDefault();
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.length == 2) {
        localStorage.theme = 'dark'
    }
    else {
        localStorage.theme = 'light'
    }

});


$("#dark").on("click", function () {
    event.preventDefault();
    var h2 = document.querySelector("h2");
    h2.classList.add("text-primary-green");

    var temp = document.querySelectorAll(".test");
    for (var i = 0; i < temp.length; i++) {
        temp[i].classList.add("text-primary-green");
    }

    var p = document.getElementById('pTest')
    p.className = 'text-primary-green'
});


$("#light").on("click", function () {
    event.preventDefault();
    var h2 = document.querySelector("h2");
    h2.className = "test";

    // Add new class to existing classes
    var p = document.querySelector("p");
    p.classList.add("test");

    // Select all elements with class test
    var temp = document.querySelectorAll(".test");

    // Apply CSS property to it
    for (var i = 0; i < temp.length; i++) {
        temp[i].style.color = "green";
        temp[i].style.fontSize = "40px";
    }
});

