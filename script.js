document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('antiRacismBanner');
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleIcon = document.getElementById('toggleIcon');
    const headerTitle1 = document.getElementById('headerTitle1');
    const headerTitle2 = document.getElementById('headerTitle2');
    const navbardiv = document.getElementById('navbar');
    const subscribetext= document.getElementById('subscribetext');
    const circlesubscribebutton = document.getElementById('circlesubscribebutton');

    // Add these lines to make the banner expanded by default
    headerTitle1.style.display = 'none';
    headerTitle2.style.display = 'block';

    banner.classList.remove('banner-collapsed');
    banner.classList.add('banner-expanded');
    toggleIcon.classList.remove('fa-chevron-up');
    toggleIcon.classList.add('fa-chevron-down');

    toggleBtn.addEventListener('click', function () {
        if (banner.classList.contains('banner-collapsed')) {
            banner.classList.remove('banner-collapsed');
            banner.classList.add('banner-expanded');
            toggleIcon.classList.remove('fa-chevron-up');
            toggleIcon.classList.add('fa-chevron-down');
            headerTitle1.style.display = 'none';
            headerTitle2.style.display = 'block';
        } else {
            banner.classList.remove('banner-expanded');
            banner.classList.add('banner-collapsed');
            toggleIcon.classList.remove('fa-chevron-down');
            toggleIcon.classList.add('fa-chevron-up');
            headerTitle1.style.display = 'block';
            headerTitle2.style.display = 'none';
        }
    });

    document.getElementById("actNowBtn").addEventListener("click", function() {
        const banner = document.getElementById("antiRacismBanner");

        document.getElementById("bannerkontenv2").style.display = "none";
        banner.style.height = "100vh";
        banner.style.transform = "translateY(0%)";
        setTimeout(() => {
            window.location.href = "https://linktr.ee/action?utm_campaign=cause_banner_open&amp;utm_medium=linktree_profile"; 
        }, 500);
    });

    let lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbardiv.style.display = 'none';
        } else {
            navbardiv.style.display = 'grid';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    setTimeout(function() {
        subscribetext.classList.add('fade-out');

        setTimeout(function() {
            subscribetext.style.display = 'none';
        }, 500); // durasi ini harus sama dengan durasi transition di CSS

        circlesubscribebutton.style.width = '40px';
        circlesubscribebutton.style.borderRadius = '50%';
    }, 2500);

});