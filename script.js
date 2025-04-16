document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('antiRacismBanner');
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleIcon = document.getElementById('toggleIcon');
    
    // Add these lines to make the banner expanded by default
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
        } else {
            banner.classList.remove('banner-expanded');
            banner.classList.add('banner-collapsed');
            toggleIcon.classList.remove('fa-chevron-down');
            toggleIcon.classList.add('fa-chevron-up');
        }
    });

    const actNowBtn = document.querySelector('.act-now-btn'); // Menggunakan class karena belum ada ID
    actNowBtn.addEventListener('click', function() {
        window.location.href = "https://linktr.ee/action?utm_campaign=cause_banner_open&amp;utm_medium=linktree_profile"; // Ganti dengan URL tujuan
    });
});