/*======PAGE LOADER===== */


/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title',{})
sr.reveal('.button',{origin:'left', delay: 1900})/* 400 */
sr.reveal('.home__img',{origin:'right', delay: 1900})/* 400 */
sr.reveal('.home__social-icon',{origin:'bottom',interval: 1900})/* 400 */

/*SCROLL ABOUT*/
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})/* 200 */
sr.reveal('.about__text',{delay: 400})/* 400 */


/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})/* 200 */
sr.reveal('.skills__data',{interval: 200})/* 200 */
sr.reveal('.skills__img',{delay: 600})/* 600 */


/*SCROLL CONTACT*/
sr.reveal('.work__img',{interval: 200})/* 200 */


/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200})/* 200 */


/*darkmodeee*/
if(localStorage.getItem('theme') == 'dark')
    darkModeon(true)


const gantiWarna = document.getElementById('ganti-tema');
gantiWarna.addEventListener("click",checkMode);

function checkMode(){
    console.log("checking...");
    if(gantiWarna.checked){
        console.log('dark on');
        darkModeon();
    }
    else{
        console.log('dark off');
        darkModeoff();
    }
}

function darkModeon(){
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark')
}
function darkModeoff(){
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('theme')
}

/*let darkModeon{
    document.body.classList.add('transition');
    window.setTimeout(() => {
        document.body.classList.remove('transition')
    },1000)
    )
}*/