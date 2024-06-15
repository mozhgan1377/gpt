//toggle Nav Menu

let menuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".menu")

menuBtn.addEventListener("click",function(){
    this.classList.toggle("menu-btn--open")
    menu.classList.toggle("menu--open")
})


// Theme Toggle 

let toggleThemeBtn = document.querySelector(".toggle-theme-btn");
let moonIcon = `
<svg fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#81AFDD" style="width: 3rem;">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
` 
let sunIcon = `
<svg class="" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" style="width: 3rem;" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>      `
let isModeDark = true ;



function changeTheme(){
    
    if(isModeDark){
       document.documentElement.classList.add("light") ; 
       toggleThemeBtn.innerHTML = moonIcon ;
       isModeDark = false ;
       localStorage.setItem("mode","light") ;
    }else{
       document.documentElement.classList.remove("light") ; 
       toggleThemeBtn.innerHTML = sunIcon ;
       isModeDark = true ;
       localStorage.setItem("mode","dark") ;
    }
}


toggleThemeBtn.addEventListener("click",changeTheme)


window.addEventListener("load",function(){
    let mode = this.localStorage.getItem("mode") ;
    console.log(mode);

    if(mode == "dark"){
        toggleThemeBtn.innerHTML = sunIcon ;
        document.documentElement.classList.remove("light") ;
        isModeDark = true ;
    }else{
        toggleThemeBtn.innerHTML = moonIcon ;
        document.documentElement.classList.add("light") ;
        isModeDark = false ;
    }
    
})