// 获取元素
const wechatLink = document.getElementById('wechat-link');
const modal = document.getElementById('wechat-modal');
const closeModal = document.getElementById('close-modal');
window.moveSlide = moveSlide;

// 点击微信图标时显示二维码弹窗
wechatLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

// 关闭弹窗
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 点击弹窗外部时也关闭弹窗
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// 控制菜单按钮的显示和隐藏
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 视频控制器
const videos = [
    { src: 'G29_steering_wheel_display.mp4' },
    { src: 'moblie manipulation.mp4' },
    { src: 'NCSC2023GDD2MUV.mp4' },
    { src: 'robot dog.mp4' }
];

let currentVideo = 0;
const mainVideo = document.getElementById('main-video');
const thumbs = document.querySelectorAll('.thumb');

function selectVideo(index) {
    currentVideo = index;
    mainVideo.src = "assets/videos/" + videos[index].src;
    // mainVideo.play();
    thumbs.forEach((t, i) => t.classList.toggle('active', i === index));
}

function prevVideo() {
    currentVideo = (currentVideo - 1 + videos.length) % videos.length;
    selectVideo(currentVideo);
}

function nextVideo() {
    currentVideo = (currentVideo + 1) % videos.length;
    selectVideo(currentVideo);
}

// 图文轮播
let currentIndex = 0;

// 轮播移动函数
function moveSlide(direction, carouselId) {
    const carouselWrapper = document.querySelector(`#${carouselId} .carousel-wrapper`);
    const items = document.querySelectorAll(`#${carouselId} .carousel-item`);
    const totalItems = items.length;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}