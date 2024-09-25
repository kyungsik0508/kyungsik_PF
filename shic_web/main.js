// scroll script
gsap.registerPlugin(ScrollTrigger, TextPlugin);
const video = document.getElementById('scrollVideo');
const videoTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main_persona",
        start: "+=0",
        end: "+=3000",
        scrub: 1,
        pin: ".main_persona",  // 특정 요소만 pin
        onEnter: () => {
            console.log('enter');
            video.play();
        },
    },
});

videoTl.from(".main_persona .copy_first", 1, { text: "" }, 0);
videoTl.to(".main_persona .copy_first", 0.5, { y: "-100vh" }, 1);

videoTl.from(".main_copy_second", 1, { text: "" }, 1);


// nav_bar script
// GSAP을 사용하여 애니메이션 처리
gsap.registerPlugin(); // 플러그인 등록

// 요소 가져오기
const navBar = document.querySelector('.nav_bar');
const boxBackground = document.querySelector('.box_background');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');
const product = document.querySelector('.product');
const fashion = document.querySelector('.fashion');
const etc = document.querySelector('.etc');
const hobby = document.querySelector('.hobby');

// 호버 시 동작 설정
navBar.addEventListener('mouseenter', () => {
  // box_background의 너비를 600px로 확장하면서 여백 유지
  gsap.to(boxBackground, { width: '600px', duration: 0.5, ease: 'power2.out' });

  // 'MENU' 항목을 사라지게 하고, 나머지 항목들 등장
  gsap.to(menu, { opacity: 0, duration: 0.3, onComplete: () => {
    menu.classList.add('hidden'); // 'MENU' 숨기기
    about.style.display = 'inline-block';
    product.style.display = 'inline-block';
    fashion.style.display = 'inline-block';
    etc.style.display = 'inline-block';
    hobby.style.display = 'inline-block';

    // 새로운 항목들 순차적으로 등장
    gsap.fromTo([about, product, fashion, etc, hobby], 
                { opacity: 0, x: 20 }, 
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 });
  }});
});

// 호버가 끝날 때 동작 설정
navBar.addEventListener('mouseleave', () => {
  // box_background 크기를 다시 원래대로 줄임
  gsap.to(boxBackground, { width: '100px', duration: 0.5, ease: 'power2.out' });

  // 'PROFILE', 'PRODUCT', 'FASHION', 'ETC', 'HOBBY' 숨기고 'MENU' 다시 표시
  gsap.to([about, product, fashion, etc, hobby], { opacity: 0, duration: 0.3, onComplete: () => {
    about.style.display = 'none';
    product.style.display = 'none';
    fashion.style.display = 'none';
    etc.style.display = 'none';
    hobby.style.display = 'none';
    menu.classList.remove('hidden');
    gsap.to(menu, { opacity: 1, duration: 0.5 });
  }});
});
