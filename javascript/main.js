const menuBtn = document.querySelector('.menuBtn'); // selects mobile hamburger button
const sidebar = document.querySelector('.sidebar'); // selects sidebar
const body = document.querySelector('body'); // selects body
const subject = document.querySelectorAll('.subject'); // selects sidebar subject 
let menuOpen = false; // swicth

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        sidebar.classList.add('open');
        body.classList.add('bopen');
        menuOpen = true;
    } else {
        sidebar.classList.remove('open');
        body.classList.remove('bopen');
        menuOpen = false;
    }
});

subject.forEach(item => {
    let subjectSwitch = false;  // switch 2
    item.addEventListener('click', () => {
        if(!subjectSwitch) {
            item.classList.add('active');
            subjectSwitch = true;
        } else {
            item.classList.remove('active');
            subjectSwitch = false;
        }
    });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $(".sidebar-inner").addClass("fixedSidebar");
    } else if (scroll <= 80) {
    $(".sidebar-inner").removeClass("fixedSidebar");
    }
});
