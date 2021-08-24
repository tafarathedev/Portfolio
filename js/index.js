<<<<<<< HEAD
AOS.init();

const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
/* navigation hum menu bar open js  */
navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
      
    }
});
/* navigation hum menu bar close  js  */
navClose.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const fixNav = navBar.classList.contains("fix-nav");
        let position = element.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0,
        });

        navBar.classList.remove("show");
        menu.classList.remove("show");
        document.body.classList.remove("show");
    });
});

new TypeIt("#type1", {
        speed: 120,
        loop: true,
        waitUntilVisible: true,
    })
    .type("Instructor", { delay: 400 })
    .pause(500)
    .delete(10)
    .type("Developer", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

new TypeIt("#type2", {
        speed: 120,
        loop: true,
        waitUntilVisible: true,
    })
    .type("Instructor", { delay: 400 })
    .pause(500)
    .delete(10)
    .type("Developer", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".nav-item", {
    opacity: 0,
    duration: 1,
    delay: 1.2,
    y: 30,
    stagger: 0.2,
});
gsap.from(".icons span", {
    opacity: 0,
    duration: 1,
    delay: 4,
    x: -30,
    stagger: 0.2,
});

const glide = document.querySelector(".glide");
if (glide)
    new Glide(glide, {
        type: "carousel",
        startAt: 0,
        perView: 3,
        gap: 30,
        hoverpause: true,
        autoplay: 2000,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
            996: {
                perView: 2,
            },
            768: {
                perView: 1,
            },
        },
    }).mount();




/* FORM ENDING  */


let form_sending = document.getElementById("my-form");
 form_sending.addEventListener("submit" , function(e){
 e.preventDefault();
 let name = document.querySelector(".name").value;
 let email = document.querySelector(".email").value;
 let message = document.querySelector(".message").value;

 console.log(name , email , message);
 if(name !== '' && email !== ''){
    SendForm(name,email,message );
 }else{
     alert('fill in atleast the name and email inorder to submit ')
 }

 document.getElementById("my-form").reset();
 })

 /* document.querySelector(".btn").addEventListener("click" , function(){
    SendForm(name,email,message );
 }) */

function SendForm(name,email,message){
    Email.send({  
        Host:"smtp.gmail.com",
        Username:"Tafaratakaiza19@gmail.com",
        Password:"giltqnobzuihpgmt",
        To:"Tafaratakaiza19@gmail.com",
        From:"Tafaratakaiza19@gmail.com",
        Subject:`${email} Sent you a message `,
        Body:` Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
      }).then((message) => alert("mesage sent succesffully"));

 }


/*music script  */


let My_song = document.getElementById('mySong');
let icon= document.getElementById('icon');

 icon.addEventListener('click' , ()=>{
if(My_song.paused){
    My_song.play();
    icon.src="images/pause.png";
   
    console.log('playing')
}else {
    My_song.pause();
    icon.src="images/play.png"
    console.log('paused')
}
  
=======
AOS.init();

const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
/* navigation hum menu bar open js  */
navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
      
    }
});
/* navigation hum menu bar close  js  */
navClose.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const fixNav = navBar.classList.contains("fix-nav");
        let position = element.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0,
        });

        navBar.classList.remove("show");
        menu.classList.remove("show");
        document.body.classList.remove("show");
    });
});

new TypeIt("#type1", {
        speed: 120,
        loop: true,
        waitUntilVisible: true,
    })
    .type("Instructor", { delay: 400 })
    .pause(500)
    .delete(10)
    .type("Developer", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

new TypeIt("#type2", {
        speed: 120,
        loop: true,
        waitUntilVisible: true,
    })
    .type("Instructor", { delay: 400 })
    .pause(500)
    .delete(10)
    .type("Developer", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".nav-item", {
    opacity: 0,
    duration: 1,
    delay: 1.2,
    y: 30,
    stagger: 0.2,
});
gsap.from(".icons span", {
    opacity: 0,
    duration: 1,
    delay: 4,
    x: -30,
    stagger: 0.2,
});

const glide = document.querySelector(".glide");
if (glide)
    new Glide(glide, {
        type: "carousel",
        startAt: 0,
        perView: 3,
        gap: 30,
        hoverpause: true,
        autoplay: 2000,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
            996: {
                perView: 2,
            },
            768: {
                perView: 1,
            },
        },
    }).mount();




/* FORM ENDING  */


let form_sending = document.getElementById("my-form");
 form_sending.addEventListener("submit" , function(e){
 e.preventDefault();
 let name = document.querySelector(".name").value;
 let email = document.querySelector(".email").value;
 let message = document.querySelector(".message").value;

 console.log(name , email , message);
 if(name !== '' && email !== ''){
    SendForm(name,email,message );
 }else{
     alert('fill in atleast the name and email inorder to submit ')
 }

 document.getElementById("my-form").reset();
 })

 /* document.querySelector(".btn").addEventListener("click" , function(){
    SendForm(name,email,message );
 }) */

function SendForm(name,email,message){
    Email.send({  
        Host:"smtp.gmail.com",
        Username:"Tafaratakaiza19@gmail.com",
        Password:"giltqnobzuihpgmt",
        To:"Tafaratakaiza19@gmail.com",
        From:"Tafaratakaiza19@gmail.com",
        Subject:`${email} Sent you a message `,
        Body:` Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
      }).then((message) => alert("mesage sent succesffully"));

 }


/*music script  */


let My_song = document.getElementById('mySong');
let icon= document.getElementById('icon');

 icon.addEventListener('click' , ()=>{
if(My_song.paused){
    My_song.play();
    icon.src="images/pause.png";
   
    console.log('playing')
}else {
    My_song.pause();
    icon.src="images/play.png"
    console.log('paused')
}
  
>>>>>>> fcd36c80e4e016bc890dba119931ea91c5e2b658
 })