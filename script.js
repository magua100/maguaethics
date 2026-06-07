

const supabaseUrl =
"https://ummzqbaalrxyyulrkxaz.supabase.co";

const supabaseKey =
"sb_publishable_o79JQ-LkQkFohS4m7waJVw_U_xiIX8r";

window.supabaseClient =
supabase.createClient(
    supabaseUrl,
    supabaseKey
);

console.log(
    "✅ Supabase Connected"
);


let slides = document.querySelectorAll(".banner-slide");
let dots = document.querySelectorAll(".dot");

let currentSlide = 0;

/* SHOW SLIDE */

function showSlide(index){

  slides.forEach(slide=>{
    slide.classList.remove("active");
  });

  dots.forEach(dot=>{
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

/* AUTO CHANGE */

setInterval(()=>{

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);

},3000);

/* SCROLL CHANGE */

let slider = document.getElementById("bannerSlider");

slider.addEventListener("wheel",function(){

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);

});


function showCategory(category, element){

    document
    .querySelectorAll(".category-content")
    .forEach(section=>{

        section.style.display = "none";

    });

    document
    .querySelectorAll(".category-item")
    .forEach(item=>{

        item.classList.remove("active");

    });

    document.getElementById(
        category + "Content"
    ).style.display = "block";

    element.classList.add("active");

}

document.addEventListener("DOMContentLoaded",()=>{

    showCategory(
        "sarees",
        document.querySelector(".category-item")
    );

});

const panels = document.querySelectorAll(".hero-panel");
const markers = document.querySelectorAll(".hero-marker");
const heroCarousel = document.getElementById("heroCarousel");

let activePanel = 0;

function displayPanel(index){

    panels.forEach(panel=>{
        panel.classList.remove("current");
    });

    markers.forEach(marker=>{
        marker.classList.remove("current");
    });

    panels[index].classList.add("current");
    markers[index].classList.add("current");
}

function nextPanel(){

    activePanel++;

    if(activePanel >= panels.length){
        activePanel = 0;
    }

    displayPanel(activePanel);
}

let autoPlay = setInterval(nextPanel,3000);

markers.forEach((marker,index)=>{

    marker.addEventListener("click",()=>{

        activePanel = index;

        displayPanel(activePanel);

        clearInterval(autoPlay);
        autoPlay = setInterval(nextPanel,3000);

    });

});

heroCarousel.addEventListener("wheel",(e)=>{

    if(e.deltaY > 0){
        activePanel++;
    }else{
        activePanel--;
    }

    if(activePanel >= panels.length){
        activePanel = 0;
    }

    if(activePanel < 0){
        activePanel = panels.length - 1;
    }

    displayPanel(activePanel);

});

let touchStart = 0;

heroCarousel.addEventListener("touchstart",(e)=>{
    touchStart = e.touches[0].clientX;
});

heroCarousel.addEventListener("touchend",(e)=>{

    let touchEnd = e.changedTouches[0].clientX;

    if(touchStart - touchEnd > 50){
        activePanel = (activePanel + 1) % panels.length;
    }
    else if(touchEnd - touchStart > 50){
        activePanel = (activePanel - 1 + panels.length) % panels.length;
    }

    displayPanel(activePanel);

});


const cards = document.querySelectorAll(".showcase-item");
const points = document.querySelectorAll(".showcase-point");

let activeCard = 0;

function activateCard(index){

    cards.forEach(card=>{
        card.classList.remove("selected");
    });

    points.forEach(point=>{
        point.classList.remove("selected");
    });

    cards[index].classList.add("selected");
    points[index].classList.add("selected");
}

setInterval(()=>{

    activeCard++;

    if(activeCard >= cards.length){
        activeCard = 0;
    }

    activateCard(activeCard);

},3000);

points.forEach((point,index)=>{

    point.addEventListener("click",()=>{

        activeCard = index;
        activateCard(activeCard);

    });

});
window.addEventListener("DOMContentLoaded", () => {

    const panels = document.querySelectorAll(".flip-card");
    const marks = document.querySelectorAll(".flip-mark");

    let pointer = 0;

    function switchPanel(index){

        panels.forEach(panel => {
            panel.classList.remove("open");
        });

        marks.forEach(mark => {
            mark.classList.remove("open");
        });

        panels[index].classList.add("open");
        marks[index].classList.add("open");
    }

    let sliderTimer = setInterval(() => {

        pointer++;

        if(pointer >= panels.length){
            pointer = 0;
        }

        switchPanel(pointer);

    }, 3000);

    marks.forEach((mark, index) => {

        mark.addEventListener("click", () => {

            pointer = index;

            switchPanel(pointer);

            clearInterval(sliderTimer);

            sliderTimer = setInterval(() => {

                pointer++;

                if(pointer >= panels.length){
                    pointer = 0;
                }

                switchPanel(pointer);

            }, 3000);

        });

    });

});




const orbitFrames = document.querySelectorAll(".orbit-frame");
const orbitPins = document.querySelectorAll(".orbit-pin");

let orbitIndex = 0;

function runOrbit(index){

    orbitFrames.forEach(frame=>{
        frame.classList.remove("live");
    });

    orbitPins.forEach(pin=>{
        pin.classList.remove("live");
    });

    orbitFrames[index].classList.add("live");
    orbitPins[index].classList.add("live");
}

setInterval(()=>{

    orbitIndex++;

    if(orbitIndex >= orbitFrames.length){
        orbitIndex = 0;
    }

    runOrbit(orbitIndex);

},3000);

orbitPins.forEach((pin,index)=>{

    pin.addEventListener("click",()=>{

        orbitIndex = index;
        runOrbit(orbitIndex);

    });

});

const bannerText =
document.getElementById(
    "bannerChangingText"
);

const bannerWords = [

    {
        text:"MAKEUP",
        font:"cursive",
        anim:"fromLeft",
        color:"#ff69b4"
    },

    {
        text:"FASHION",
        font:"Georgia",
        anim:"fromRight",
        color:"#ffd700"
    },

    {
        text:"BEAUTY",
        font:"Verdana",
        anim:"fromTop",
        color:"#00ffff"
    },

    {
        text:"JEWELLERY",
        font:"Times New Roman",
        anim:"fromBottom",
        color:"#adff2f"
    },

    {
        text:"LEHENGAS",
        font:"Impact",
        anim:"fromZoom",
        color:"#ff8c00"
    }

];

let wordPos = 0;

setInterval(()=>{

    wordPos =
    (wordPos + 1) %
    bannerWords.length;

    bannerText.className =
    "banner-top-text";

    bannerText.textContent =
    bannerWords[wordPos].text;

    bannerText.style.fontFamily =
    bannerWords[wordPos].font;
bannerText.style.color =
bannerWords[wordPos].color;
    bannerText.classList.add(
        bannerWords[wordPos].anim
    );

    /* Sparkle Blast */

    for(let i=0;i<18;i++){

        const spark =
        document.createElement("span");

        spark.innerHTML =
        ["✨","⭐","💫","✦","✧"]
        [Math.floor(Math.random()*5)];

        spark.style.position =
        "absolute";

        spark.style.left =
        (40 + Math.random()*20) + "%";

        spark.style.top =
        (40 + Math.random()*20) + "%";

        spark.style.fontSize =
        (12 + Math.random()*12) + "px";

        spark.style.pointerEvents =
        "none";

        spark.style.setProperty(
            "--x",
            (Math.random()*180-90)+"px"
        );

        spark.style.setProperty(
            "--y",
            (Math.random()*120-60)+"px"
        );

        spark.style.animation =
        "sparkBurst 1s ease-out forwards";

        bannerText.appendChild(
            spark
        );

        setTimeout(()=>{
            spark.remove();
        },1000);

    }

},1000);


const maguaBtn =
document.getElementById("maguaBtn");

const swiggySheet =
document.getElementById("swiggySheet");

const sheetBackdrop =
document.getElementById("sheetBackdrop");

maguaBtn.addEventListener("click",()=>{

    swiggySheet.classList.add("show");

    sheetBackdrop.classList.add("show");

});

sheetBackdrop.addEventListener("click",()=>{

    swiggySheet.classList.remove("show");

    sheetBackdrop.classList.remove("show");

});

const categoriesBtn =
document.getElementById(
"categoriesBtn"
);

const categorySheet =
document.getElementById(
"categorySheet"
);

const sheetOverlay =
document.getElementById(
"sheetOverlay"
);

function closeCategorySheet(){

    categorySheet
    .classList.remove("show");

    sheetOverlay
    .classList.remove("show");

}

categoriesBtn.addEventListener(
"click",()=>{

    categorySheet
    .classList.add("show");

    sheetOverlay
    .classList.add("show");

});

sheetOverlay.addEventListener(
"click",
closeCategorySheet
);

/* Swipe Down Close */

let startY = 0;

categorySheet.addEventListener(
"touchstart",(e)=>{

    startY =
    e.touches[0].clientY;

});

categorySheet.addEventListener(
"touchend",(e)=>{

    const endY =
    e.changedTouches[0].clientY;

    if(endY - startY > 80){

        closeCategorySheet();

    }

});
document
.querySelectorAll(".cat-image")
.forEach(img=>{

    const shimmer =
    img.parentElement
    .querySelector(".cat-shimmer");

    function hideShimmer(){

        shimmer.style.display =
        "none";

    }

    if(img.complete){

        hideShimmer();

    }else{

        img.addEventListener(
        "load",
        hideShimmer
        );

        img.addEventListener(
        "error",
        hideShimmer
        );

    }

});


const profileBtn =
document.getElementById(
"profileBtn"
);

const userPanel =
document.getElementById(
"userPanel"
);

const userBackdrop =
document.getElementById(
"userBackdrop"
);

function closeUserPanel(){

    userPanel
    .classList.remove("active");

    userBackdrop
    .classList.remove("active");

}

profileBtn.addEventListener(
"click",()=>{

    userPanel
    .classList.add("active");

    userBackdrop
    .classList.add("active");

});

userBackdrop.addEventListener(
"click",()=>{

    closeUserPanel();

});


const loginBtn =
document.getElementById(
"userLoginBtn"
);

const nameInput =
document.getElementById(
"userNameInput"
);

const mobileInput =
document.getElementById(
"userMobileInput"
);

const privacyCheck =
document.getElementById(
"privacyCheck"
);

loginBtn.addEventListener(
"click",
async()=>{

    const name =
    nameInput.value.trim();

    const mobile =
    mobileInput.value.trim();

    if(!name){

        nameInput.classList.add(
        "shake"
        );

        setTimeout(()=>{
            nameInput.classList.remove(
            "shake"
            );
        },400);

        return;
    }

    if(!/^\d{10}$/.test(mobile)){

        mobileInput.classList.add(
        "shake"
        );

        setTimeout(()=>{
            mobileInput.classList.remove(
            "shake"
            );
        },400);

        return;
    }

    if(!privacyCheck.checked){

        document
        .querySelector(".privacy-row")
        .classList.add("shake");

        setTimeout(()=>{

            document
            .querySelector(".privacy-row")
            .classList.remove("shake");

        },400);

        return;
    }

    /* Instant Sparkles First */

for(let i=0;i<40;i++){

    // your sparkle code here

}

/* Save In Background */

window.supabaseClient
.from("profiles")
.insert([
    {
        name:name,
        mobile:mobile
    }
])
.then(({error})=>{

    if(error){
        console.log(error);
    }

});

/* Sparkles */

for(let i=0;i<40;i++){

    const spark =
    document.createElement("span");

    spark.innerHTML =
    ["✨","⭐","💫","✦"]
    [Math.floor(Math.random()*4)];

    spark.style.position =
    "fixed";

    spark.style.left =
    Math.random()*window.innerWidth
    + "px";

    spark.style.top =
    Math.random()*window.innerHeight
    + "px";

    spark.style.fontSize =
    (16 + Math.random()*14)
    + "px";

    spark.style.pointerEvents =
    "none";

    spark.style.zIndex =
    "999999";

    spark.style.setProperty(
        "--x",
        (Math.random()*200-100)
        + "px"
    );

    spark.style.setProperty(
        "--y",
        (-200-Math.random()*150)
        + "px"
    );

    spark.style.animation =
    "sparkBurst 1.5s ease-out forwards";

    document.body.appendChild(
        spark
    );

    setTimeout(()=>{
        spark.remove();
    },1500);

}

/* Clear + Close */
setTimeout(()=>{

    localStorage.setItem(
        "maguaName",
        name
    );

    localStorage.setItem(
        "maguaMobile",
        mobile
    );

    nameInput.value = "";

    mobileInput.value = "";

    privacyCheck.checked =
    false;

    closeUserPanel();

},1500);

});
const bannerImages =
document.querySelectorAll(
"#bannerSlider .banner-img"
);

const bannerShimmer =
document.getElementById(
"bannerShimmer"
);

let loadedCount = 0;

bannerImages.forEach(img=>{

    function imageLoaded(){

        loadedCount++;

       if(
    loadedCount ===
    bannerImages.length
){

    bannerShimmer.style.display =
    "none";

}

    }

    if(img.complete){

        imageLoaded();

    }else{

        img.addEventListener(
            "load",
            imageLoaded
        );

        img.addEventListener(
            "error",
            imageLoaded
        );

    }

});




const heroImages =
document.querySelectorAll(
"#heroCarousel img"
);

const heroLoading =
document.getElementById(
"heroLoading"
);

let heroLoaded = 0;

const heroObserver =
new IntersectionObserver(entries=>{

    if(entries[0].isIntersecting){

        heroImages.forEach(img=>{

            if(img.complete){

                heroLoaded++;

            }else{

                img.addEventListener(
                "load",()=>{

                    heroLoaded++;

                    if(
                        heroLoaded ===
                        heroImages.length
                    ){

                        heroLoading
                        .style.display =
                        "none";

                    }

                });

            }

        });

        if(
            heroLoaded ===
            heroImages.length
        ){

            heroLoading
            .style.display =
            "none";

        }

        heroObserver.disconnect();

    }

},{
    rootMargin:"200px"
});

heroObserver.observe(
document.getElementById(
"heroCarousel"
));

const showcaseImages =
document.querySelectorAll(
"#showcaseWrap img"
);

const showcaseLoading =
document.getElementById(
"showcaseLoading"
);

let showcaseLoaded = 0;

const showcaseObserver =
new IntersectionObserver(entries=>{

    if(entries[0].isIntersecting){

        showcaseImages.forEach(img=>{

            if(img.complete){

                showcaseLoaded++;

            }else{

                img.addEventListener(
                "load",()=>{

                    showcaseLoaded++;

                    if(
                        showcaseLoaded ===
                        showcaseImages.length
                    ){

                        showcaseLoading
                        .style.display =
                        "none";

                    }

                });

            }

        });

        if(
            showcaseLoaded ===
            showcaseImages.length
        ){

            showcaseLoading
            .style.display =
            "none";

        }

        showcaseObserver.disconnect();

    }

},{
    rootMargin:"200px"
});

showcaseObserver.observe(
document.getElementById(
"showcaseWrap"
));


const orbitImages =
document.querySelectorAll(
"#orbitBox img"
);

const orbitLoading =
document.getElementById(
"orbitLoading"
);

let orbitLoaded = 0;

const orbitObserver =
new IntersectionObserver(entries=>{

    if(entries[0].isIntersecting){

        orbitImages.forEach(img=>{

            if(img.complete){

                orbitLoaded++;

            }else{

                img.addEventListener(
                "load",()=>{

                    orbitLoaded++;

                    if(
                        orbitLoaded ===
                        orbitImages.length
                    ){

                        orbitLoading
                        .style.display =
                        "none";

                    }

                });

            }

        });

        if(
            orbitLoaded ===
            orbitImages.length
        ){

            orbitLoading
            .style.display =
            "none";

        }

        orbitObserver.disconnect();

    }

},{
    rootMargin:"200px"
});

orbitObserver.observe(
document.getElementById(
"orbitBox"
));



const flipImages =
document.querySelectorAll(
"#flipGallery img"
);

const flipLoading =
document.getElementById(
"flipLoading"
);

let flipLoaded = 0;

const flipObserver =
new IntersectionObserver(entries=>{

    if(entries[0].isIntersecting){

        flipImages.forEach(img=>{

            if(img.complete){

                flipLoaded++;

            }else{

                img.addEventListener(
                "load",()=>{

                    flipLoaded++;

                    if(
                        flipLoaded ===
                        flipImages.length
                    ){

                        flipLoading
                        .style.display =
                        "none";

                    }

                });

            }

        });

        if(
            flipLoaded ===
            flipImages.length
        ){

            flipLoading
            .style.display =
            "none";

        }

        flipObserver.disconnect();

    }

},{
    rootMargin:"200px"
});

flipObserver.observe(
document.getElementById(
"flipGallery"
));


document
.querySelectorAll(".product-img")
.forEach(img=>{

    const shimmer =
    img.parentElement
    .querySelector(".product-shimmer");

    function hideShimmer(){

        shimmer.style.display =
        "none";

    }

    if(img.complete){

        hideShimmer();

    }else{

        img.addEventListener(
        "load",
        hideShimmer
        );

        img.addEventListener(
        "error",
        hideShimmer
        );

    }

});
