// Set current Year
const  currentYear= document.querySelector(".year");
currentYear.textContent = new Date().getFullYear();

// Mobile navigation

const header = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");
  btnNavEl.addEventListener("click", function(){
    header.classList.toggle("nav-open");
  })


//   smooth scrolling

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const href = link.getAttribute("href");

        // scroll back to top
        if (href === "#") window.scrollTo({
            top:0,behaviour:"smooth"
        }) 

        if(href !== "#" && href.startsWith("#")){
            const selectEl = document.querySelector(href);
            selectEl.scrollIntoView({
                behavior:"smooth"
            })
        }

        if(link.classList.contains("main-nav-link")){
            header.classList.toggle("nav-open");
        }
    })
})

// Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");
const observer= new IntersectionObserver(function(entries){
    const ent = entries[0];
    if(ent.isIntersecting === false ){
        document.body.classList.add("sticky");
    }
    if(ent.isIntersecting === true ){
        document.body.classList.remove("sticky");
    }
},{
    root:null,
    threshold:0,
    rootMargin:"-80px"
});
observer.observe(sectionHeroEl);

// Fixing flexbox gap property missing in safari versions
function checkFlexGap(){
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
    if(!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();