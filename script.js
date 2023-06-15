let menu = document.querySelector('.menu');
    menu.onclick = function () {
        navlist = document.querySelector('.nav-list');
        navlist.classList.toggle('active');
    }

    let hamburger_menu = document.querySelector('.hamburger-menu');
    hamburger_menu.onclick = function () {
        hamburger_menu = document.querySelector('.hamburger-menu');
        hamburger_menu.classList.toggle('active');
    }

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-88px";
            document.getElementById("navbar").style.backgroundColor = "white";
        }
        prevScrollpos = currentScrollPos;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".nav-list").style.backgroundColor = "rgba(0,0,0,0.3)";
        } else {
            document.querySelector(".nav-list").style.backgroundColor = "white";
        }

    }

    /*the javascript for convrsion of login and signup form consecutively on clicking the relevant buttons.*/
    function showSignupForm() {
        document.getElementById("patient-login-form").style.display = "none";
        document.getElementById("patient-signup-form").style.display = "block";
    }

    function showLoginForm() {
        document.getElementById("patient-signup-form").style.display = "none";
        document.getElementById("patient-login-form").style.display = "block";
    }

    //this javascript works as apperaring or disapperaing after clicking on book an appointmetn
    let appointmentBtn = document.querySelector('.ap-btn');
    appointmentBtn.onclick = function () {
        let appointmentContainer = document.querySelector(".appointment-container");
        appointmentContainer.classList.toggle('active');
    }

    let closeIcon = document.querySelector('.appointment-cross-icon');
    console.log(closeIcon);
    closeIcon.onclick = function() {
    let appointmentContainer = document.querySelector(".appointment-container");
    appointmentContainer.classList.toggle("target");
    }
