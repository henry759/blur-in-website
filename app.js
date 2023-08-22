const menuOpenIcon = $(".menu-icon");
const menuCloseIcon = $(".close-btn");
const menu = $(".menu");

const navbar = $(".navbar");
const textOne = $(".text");
const image = $(".image");
const textTwo = $(".text-2");

// menuOpenIcon.click(()=>{
//     menu.addClass('menu-opened');
//     menu.removeClass('menu-closed');
// });

// menuCloseIcon.click(()=>{
//     menu.removeClass('menu-opened');
//     menu.addClass('menu-closed');
// });

// function openMenu(){
//     alert('bro');
//     gsap.to(menu,{
//         x: 0
//     })
// }

gsap.from(navbar, {
  // scale: 1.5,
  y: 100,
  ease: 'bounce',
  duration: 1.4,
  // opacity: .4
})
gsap.from(textOne, {
  // scale: 1.5,
  y: 100,
  ease: 'bounce',
  duration: 1.4,
  delay: .2,
  // opacity: .9
})
gsap.from(image, {
  // scale: 1.5,
  y: 100,
  ease: 'bounce',
  duration: 1.4,
  delay: .3,
  // opacity: .4
})
gsap.from(textTwo, {
  // scale: 1.5,
  y: 100,
  ease: 'bounce',
  duration: 1.4,
  delay: .4,
  // opacity: .4
})

menuOpenIcon.click(() => {
  // alert('bro');
  gsap.to(menu, {
    x: "-110%",
    duration: 0.6,
    // ease: "none"
  });
});

menuCloseIcon.click(() => {
  gsap.to(menu, {
    x: "20%",
    duration: 0.6,
    // ease: "none"
  });
});
