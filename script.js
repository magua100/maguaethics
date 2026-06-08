const SUPABASE_URL = "https://wyvttsbfhrsnttncvdre.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_7mAtSSCMGYgTfuSQBM9jtA_U46okrpb";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("secured");

window.addEventListener("load", function(){

    document.body.style.overflow = "hidden";

    setTimeout(function(){

        document.querySelector(".splash").style.display = "none";

        document.body.style.overflow = "auto";

        document.getElementById("main-content").style.display = "flex";

    },2050);

});


const connectBtn =
  document.getElementById("connectBtn");

connectBtn.onclick = () => {

  const name =
    document.getElementById("nameInput");

  const mobile =
    document.getElementById("mobileInput");

  /* Empty Check */
  if(
    name.value.trim() === "" ||
    mobile.value.trim() === ""
  ){

    /* Name Shake */
    if(name.value.trim() === ""){

      name.parentElement.classList.add("shake");

      setTimeout(() => {

        name.parentElement.classList.remove("shake");

      }, 400);

    }

    /* Mobile Shake */
    if(mobile.value.trim() === ""){

      mobile.parentElement.classList.add("shake");

      setTimeout(() => {

        mobile.parentElement.classList.remove("shake");

      }, 400);

    }

    return;

  }

  /* Connected */
  connectBtn.innerText =
    "Connected";

  connectBtn.classList.add("connected");

};


const featureObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            featureObserver.unobserve(entry.target);
        }

    });

}, {
    threshold:0.15
});

document.querySelectorAll(".feature-box").forEach((box) => {
    featureObserver.observe(box);
});


const journeyObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            journeyObserver.unobserve(entry.target);
        }

    });

}, {
    threshold:0.2
});

document.querySelectorAll(".journey-card").forEach((card) => {
    journeyObserver.observe(card);
});



window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.querySelectorAll('.video-wrap video')
        .forEach(video=>{

            const shimmer =
            video.parentElement.querySelector('.video-shimmer');

            video.load();

            video.addEventListener('canplay',()=>{

                shimmer.style.display='none';

                video.play();

            },{once:true});

        });

    },2200);

});

document.querySelectorAll('.feature-img-wrap img')
.forEach(img=>{

    const shimmer =
    img.parentElement.querySelector('.feature-img-shimmer');

    const hideShimmer = ()=>{

        shimmer.style.display='none';

    };

    if(img.complete){

        hideShimmer();

    }else{

        img.addEventListener('load',hideShimmer);

        img.addEventListener('error',hideShimmer);

    }

});

document.querySelectorAll('.grid-img img')
.forEach(img=>{

    const shimmer =
    img.parentElement.querySelector('.collage-shimmer');

    const hideShimmer = ()=>{
        shimmer.style.display='none';
    };

    if(img.complete){
        hideShimmer();
    }else{
        img.addEventListener('load',hideShimmer);
        img.addEventListener('error',hideShimmer);
    }

});


const featureData = {

    en:[
        ["DESIGNER SAREES","Elegant collections crafted for every occasion with timeless beauty and modern style."],
        ["READY MADE DRESSES","Stylish ready made outfits crafted for comfort, elegance and everyday fashion."],
        ["DRESS MATERIALS","Premium fabrics and elegant designs perfect for creating your own unique style."],
        ["LEHENGAS","Stunning lehenga collections designed to bring elegance and charm to every special occasion."],
        ["FINE JEWELLERY","Exquisite jewellery collections crafted to add elegance and sparkle to every occasion."]
    ],

    te:[
        ["డిజైనర్ చీరలు","ప్రతి సందర్భానికి అనువైన అందమైన చీరల కలెక్షన్లు."],
        ["రెడీమేడ్ డ్రెస్సులు","సౌకర్యం మరియు స్టైల్ కోసం రూపొందించిన డ్రెస్సులు."],
        ["డ్రెస్ మెటీరియల్స్","మీ ప్రత్యేక శైలిని సృష్టించడానికి అద్భుతమైన ఫ్యాబ్రిక్స్."],
        ["లెహంగాలు","ప్రత్యేక సందర్భాలకు అందాన్ని తీసుకువచ్చే లెహంగా కలెక్షన్లు."],
        ["నగలు","ప్రతి సందర్భానికి మెరుపు మరియు అందాన్ని జోడించే నగలు."]
    ]
};

const serviceData = {

    en:[
        ["Boutique","Exclusive Designer Fashion Collections","Premium Traditional Wear Styles","Luxury Ethnic Boutique Experience"],
        ["Makeup","Professional Bridal Beauty Services","Elegant Party Makeup Styling","Flawless Premium Makeover Looks"],
        ["Designer Sarees","Rich Embroidered Saree Collections","Modern Traditional Fashion Elegance","Exclusive Premium Designer Styles"],
        ["Dresses","Elegant Festive Outfit Collections","Premium Ethnic Fashion Dresses","Stylish Traditional Party Wear"],
        ["Lehengas","Luxury Bridal Lehenga Collections","Royal Wedding Fashion Styles","Premium Festive Ethnic Designs"],
        ["Fine Jewellery","Elegant Heritage Jewellery Collections","Luxury Traditional Ornament Styles","Premium Handcrafted Jewellery Designs"]
    ],

    te:[
        ["బుటిక్","ప్రత్యేక డిజైనర్ ఫ్యాషన్ కలెక్షన్లు","అద్భుతమైన సంప్రదాయ దుస్తుల శైలులు","విలాసవంతమైన ఎథ్నిక్ బుటిక్ అనుభవం"],
        ["మేకప్","ప్రొఫెషనల్ బ్రైడల్ బ్యూటీ సేవలు","అందమైన పార్టీ మేకప్ స్టైలింగ్","అద్భుతమైన ప్రీమియం మేకోవర్ లుక్స్"],
        ["డిజైనర్ చీరలు","అందమైన ఎంబ్రాయిడరీ చీరల కలెక్షన్లు","ఆధునిక సంప్రదాయ ఫ్యాషన్","ప్రత్యేక డిజైనర్ శైలులు"],
        ["డ్రెస్సులు","అందమైన పండుగ దుస్తుల కలెక్షన్లు","ప్రీమియం ఎథ్నిక్ ఫ్యాషన్ డ్రెస్సులు","స్టైలిష్ సంప్రదాయ పార్టీ వేర్"],
        ["లెహంగాలు","విలాసవంతమైన వధువు లెహంగా కలెక్షన్లు","రాయల్ వెడ్డింగ్ ఫ్యాషన్ శైలులు","ప్రీమియం పండుగ డిజైన్లు"],
        ["నగలు","అందమైన వారసత్వ నగల కలెక్షన్లు","విలాసవంతమైన సంప్రదాయ ఆభరణాలు","ప్రీమియం హ్యాండ్‌క్రాఫ్టెడ్ నగలు"]
    ]
};

const journeyData = {
    en:["Design","Crafting","Styling","Elegance"],
    te:["డిజైన్","తయారీ","స్టైలింగ్","అందం"]
};

const whyUsData = {

    en:{
        heading:"Why Us",
        cards:[
            ["Premium Quality","Carefully curated luxury ethnic fashion collections with elegant craftsmanship and premium finishing."],
            ["Latest Trends","Modern bridal and festive fashion styles inspired by contemporary ethnic elegance."],
            ["Affordable Luxury","Premium quality collections offered with stylish designs and best value pricing."],
            ["Trusted Service","Personalized styling support with smooth shopping experience and customer satisfaction."]
        ]
    },

    te:{
        heading:"ఎందుకు మేము",
        cards:[
            ["ప్రీమియం నాణ్యత","అత్యుత్తమ నైపుణ్యం మరియు ప్రీమియం ఫినిషింగ్‌తో రూపొందించిన కలెక్షన్లు."],
            ["తాజా ట్రెండ్స్","ఆధునిక వధువు మరియు పండుగ ఫ్యాషన్ శైలులు."],
            ["సరసమైన విలాసం","ఉత్తమ నాణ్యతతో స్టైలిష్ డిజైన్లు సరసమైన ధరల్లో."],
            ["నమ్మకమైన సేవ","వ్యక్తిగత స్టైలింగ్ సహాయం మరియు ఉత్తమ కస్టమర్ అనుభవం."]
        ]
    }
};
const storyData = {

    en:{
        heading:"The magua Story",
        cards:[
            ["Our Beginning","magua Ethnics started with timeless Indian fashion inspiration."],
            ["Inspired Tradition","Every design reflects elegance, heritage, and modern sophistication."],
            ["Crafted Elegance","Premium collections created with luxurious detailing and passion."],
            ["Our Promise","Bringing confidence, beauty, and timeless ethnic charm forever."]
        ]
    },

    te:{
        heading:"మగువ కథ",
        cards:[
            ["మా ప్రారంభం","మగువ ఎథ్నిక్స్ భారతీయ సంప్రదాయ ఫ్యాషన్ ప్రేరణతో ప్రారంభమైంది."],
            ["స్ఫూర్తిదాయక సంప్రదాయం","ప్రతి డిజైన్‌లో అందం, వారసత్వం మరియు ఆధునిక శైలి ప్రతిబింబిస్తాయి."],
            ["అందంగా రూపొందింపు","అద్భుతమైన వివరాలతో మరియు ప్రేమతో రూపొందించిన ప్రీమియం కలెక్షన్లు."],
            ["మా హామీ","ఆత్మవిశ్వాసం, అందం మరియు శాశ్వత సంప్రదాయ ఆకర్షణను అందించడం."]
        ]
    }

};

const ethnicData = {

    en:{
        heading:"Beauty Of Ethnic",
        sections:[
            [
                "Elegant Ethnic Fashion",
                "Discover timeless Indian elegance crafted with luxurious fabrics, intricate detailing, and graceful modern silhouettes designed for every beautiful celebration."
            ],
            [
                "Luxury Bridal Collections",
                "Experience premium bridal elegance with handcrafted ethnic styles, rich textures, shimmering details, and timeless fashion designed for unforgettable moments."
            ],
            [
                "Grace In Every Thread",
                "Celebrate the beauty of Indian tradition with luxurious ethnic collections crafted to bring elegance, confidence, and timeless charm to every special occasion."
            ]
        ]
    },

    te:{
        heading:"సాంప్రదాయ అందం",
        sections:[
            [
                "అందమైన ఎథ్నిక్ ఫ్యాషన్",
                "ప్రతి వేడుక కోసం విలాసవంతమైన వస్త్రాలు మరియు అందమైన డిజైన్లతో రూపొందించిన భారతీయ శైలి."
            ],
            [
                "విలాసవంతమైన వధువు కలెక్షన్లు",
                "హ్యాండ్‌క్రాఫ్టెడ్ డిజైన్లు మరియు శాశ్వత అందంతో కూడిన ప్రత్యేక వధువు కలెక్షన్లు."
            ],
            [
                "ప్రతి దారంలో అందం",
                "భారతీయ సంప్రదాయ సౌందర్యాన్ని ప్రతిబింబించే ప్రత్యేక కలెక్షన్లు."
            ]
        ]
    }

};
const langSwitch = document.getElementById("langSwitch");

let isTelugu = false;

langSwitch.addEventListener("click",()=>{

    isTelugu = !isTelugu;

    langSwitch.classList.toggle("active");

    // Tagline
    document.getElementById("tagline").textContent =
        isTelugu
        ? "సంప్రదాయానికి ప్రేరణ, నేటి శైలికి రూపం"
        : "Inspired By Tradition Styled For Today";

    // Categories
    document.getElementById("cat1").textContent =
        isTelugu ? "చీరలు" : "Sarees";

    document.getElementById("cat2").textContent =
        isTelugu ? "డ్రెస్సులు" : "Dresses";

    document.getElementById("cat3").textContent =
        isTelugu ? "డ్రెస్ మెటీరియల్స్" : "Materials";

    document.getElementById("cat4").textContent =
        isTelugu ? "లెహంగాలు" : "Lehangas";

    document.getElementById("cat5").textContent =
        isTelugu ? "నగలు" : "Fine Jewellery";

   

    // Feature Boxes
    document.querySelectorAll('.feature-box')
    .forEach((box,index)=>{

        box.querySelector('h3').textContent =
            isTelugu
            ? featureData.te[index][0]
            : featureData.en[index][0];

        box.querySelector('p').textContent =
            isTelugu
            ? featureData.te[index][1]
            : featureData.en[index][1];

    });

    // Services
    document.querySelectorAll('.service-card')
    .forEach((card,index)=>{

        const data = isTelugu
            ? serviceData.te[index]
            : serviceData.en[index];

        card.querySelector('h3').textContent = data[0];

        card.querySelectorAll('span')[0].textContent = data[1];
        card.querySelectorAll('span')[1].textContent = data[2];
        card.querySelectorAll('span')[2].textContent = data[3];

    });

    // Journey
    document.querySelectorAll('.journey-card h3')
    .forEach((item,index)=>{

        item.textContent =
            isTelugu
            ? journeyData.te[index]
            : journeyData.en[index];

    });

    // Why Us
    document.querySelector('.whyus-heading').textContent =
        isTelugu
        ? whyUsData.te.heading
        : whyUsData.en.heading;

    document.querySelectorAll('.hang-card')
    .forEach((card,index)=>{

        const data = isTelugu
            ? whyUsData.te.cards[index]
            : whyUsData.en.cards[index];

        card.querySelector('h3').textContent = data[0];
        card.querySelector('p').textContent = data[1];

    });

    // Story
    document.querySelector('.story-heading').textContent =
        isTelugu
        ? storyData.te.heading
        : storyData.en.heading;

    document.querySelectorAll('.story-card')
    .forEach((card,index)=>{

        const data = isTelugu
            ? storyData.te.cards[index]
            : storyData.en.cards[index];

        card.querySelector('h3').textContent = data[0];
        card.querySelector('p').textContent = data[1];

    });

    // Ethnic
    document.querySelector('.ethnic-heading').textContent =
        isTelugu
        ? ethnicData.te.heading
        : ethnicData.en.heading;

    document.querySelectorAll('.ethnic-section')
    .forEach((section,index)=>{

        const data = isTelugu
            ? ethnicData.te.sections[index]
            : ethnicData.en.sections[index];

        section.querySelector('h2').textContent = data[0];
        section.querySelector('p').textContent = data[1];

    });

});

const btn = document.getElementById("connectBtn");

btn.addEventListener("click", async () => {

    const name = document.getElementById("nameInput").value.trim();
    const mobile = document.getElementById("mobileInput").value.trim();

   if(!name || !mobile) return;

    await window.supabaseClient
    .from("contacts")
    .insert([
        {
            name:name,
            mobile:mobile
        }
    ]);

   btn.innerHTML = "";

const interval = setInterval(()=>{

    for(let i=0;i<8;i++){

        const spark = document.createElement("span");

        spark.innerHTML = "✨";

        spark.style.position = "absolute";
        spark.style.left = "50%";
        spark.style.top = "50%";
        spark.style.fontSize = "20px";
        spark.style.pointerEvents = "none";

        spark.style.setProperty(
            "--x",
            (Math.random()*220-110)+"px"
        );

        spark.style.setProperty(
            "--y",
            (Math.random()*120-60)+"px"
        );

        spark.style.animation =
        "sparkBurst 1.2s ease-out forwards";

        btn.appendChild(spark);

        setTimeout(()=>spark.remove(),1200);

    }

},150);

setTimeout(()=>{

    clearInterval(interval);

    btn.innerHTML = "Connect Now";

    document.getElementById("nameInput").value = "";
    document.getElementById("mobileInput").value = "";

},5000);

});

const emailInput =
document.getElementById("emailInput");

const joinBtn =
document.getElementById("joinBtn");

joinBtn.addEventListener("click",async()=>{

    const email =
    emailInput.value.trim();

    const validEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!validEmail.test(email)){

        emailInput.classList.add("shake");

        setTimeout(()=>{
            emailInput.classList.remove("shake");
        },400);

        return;
    }

    await window.supabaseClient
    .from("newsletter")
    .insert([
        { email:email }
    ]);

    const btnWidth = joinBtn.offsetWidth;

    joinBtn.style.width = btnWidth + "px";
    joinBtn.textContent = "";

    const interval = setInterval(()=>{

        for(let i=0;i<10;i++){

            const spark =
            document.createElement("span");

            spark.innerHTML = "✨";

            spark.style.position = "absolute";
            spark.style.left = "50%";
            spark.style.top = "50%";

            spark.style.fontSize =
            (18 + Math.random()*8) + "px";

            spark.style.pointerEvents = "none";

            spark.style.setProperty(
                "--x",
                (Math.random()*250-125)+"px"
            );

            spark.style.setProperty(
                "--y",
                (Math.random()*140-70)+"px"
            );

            spark.style.animation =
            "sparkBurst 1.2s linear forwards";

            joinBtn.appendChild(spark);

            setTimeout(()=>{
                spark.remove();
            },1200);

        }

    },120);

    setTimeout(()=>{

        clearInterval(interval);

        joinBtn.innerHTML = "Join Now";

        emailInput.value = "";

    },5000);

});




// Desktop flower trail
if(window.innerWidth > 768){

    document.addEventListener('mousemove',(e)=>{

        const flower =
        document.createElement('span');

        flower.innerHTML = '🌸';

        flower.style.position='fixed';
        flower.style.left=e.clientX+'px';
        flower.style.top=e.clientY+'px';

        flower.style.fontSize='18px';
        flower.style.pointerEvents='none';
        flower.style.zIndex='999999';

        flower.style.animation=
        'flowerTrail 1s linear forwards';

        document.body.appendChild(flower);

        setTimeout(()=>{
            flower.remove();
        },1000);

    });

}

// Mobile sparkle tap
if(window.innerWidth <= 768){

    document.addEventListener('touchstart',(e)=>{

        const touch = e.touches[0];

        for(let i=0;i<10;i++){

            const spark =
            document.createElement('span');

            spark.innerHTML = '✨';

            spark.style.position='fixed';
            spark.style.left=touch.clientX+'px';
            spark.style.top=touch.clientY+'px';

            spark.style.fontSize='20px';
            spark.style.pointerEvents='none';
            spark.style.zIndex='999999';

            spark.style.setProperty(
                '--x',
                (Math.random()*160-80)+'px'
            );

            spark.style.setProperty(
                '--y',
                (Math.random()*160-80)+'px'
            );

            spark.style.animation=
            'touchSpark 1s ease-out forwards';

            document.body.appendChild(spark);

            setTimeout(()=>{
                spark.remove();
            },1000);

        }

    });

}
const heading =
document.getElementById("changingHeading");

const items = [

    {
        text:"FASHION",
        font:"Azonix",
        cls:"zoomAnim"
    },

    {
        text:"ELEGANCE",
        font:"Cinzel",
        cls:"leftAnim"
    },

    {
        text:"LUXURY",
        font:"Cormorant Garamond",
        cls:"rightAnim"
    },

    {
        text:"STYLE",
        font:"Playfair Display",
        cls:"topAnim"
    },

    {
        text:"MAGUA ETHNICS",
        font:"Azonix",
        cls:"bottomAnim"
    }

];

let i = 0;

setInterval(()=>{

    i = (i + 1) % items.length;

    heading.className =
    "changing-heading";

    heading.textContent =
    items[i].text;

    heading.style.fontFamily =
    items[i].font;

    heading.classList.add(
        items[i].cls
    );

    // Sparkles on every word change

    for(let s=0;s<12;s++){

        const spark =
        document.createElement("span");

        spark.innerHTML = "✨";

        spark.style.position = "absolute";

        spark.style.left =
        (40 + Math.random()*20) + "%";

        spark.style.top =
        (40 + Math.random()*20) + "%";

        spark.style.fontSize =
        (16 + Math.random()*10) + "px";

        spark.style.pointerEvents = "none";

        spark.style.zIndex = "999";

        spark.style.setProperty(
            "--x",
            (Math.random()*200-100)+"px"
        );

        spark.style.setProperty(
            "--y",
            (Math.random()*120-60)+"px"
        );

        spark.style.animation =
        "sparkBurst 1s ease-out forwards";

        heading.appendChild(spark);

        setTimeout(()=>{
            spark.remove();
        },1000);

    }

},1000);


const brand =
document.getElementById("brandChanging");

const brandItems = [

    {
        text:"FASHION",
        font:"Cinzel",
        cls:"leftAnim"
    },

    {
        text:"ELEGANCE",
        font:"Cormorant Garamond",
        cls:"rightAnim"
    },

    {
        text:"LUXURY",
        font:"Playfair Display",
        cls:"topAnim"
    },

    {
        text:"STYLE",
        font:"Cinzel",
        cls:"bottomAnim"
    },

    {
        text:"MAGUA<br>ETHNICS",
        font:"Azonix",
        cls:"zoomAnim"
    }

];

let brandIndex = 0;

setInterval(()=>{

    brandIndex =
    (brandIndex + 1) %
    brandItems.length;

    brand.className =
    "changing-heading brand-changing";

    brand.innerHTML =
    brandItems[brandIndex].text;

    brand.style.fontFamily =
    brandItems[brandIndex].font;

    brand.classList.add(
        brandItems[brandIndex].cls
    );

    for(let i=0;i<25;i++){

        const spark =
        document.createElement("span");

        spark.className =
        "heading-spark";

        const effects = [
            "✨",
            "⭐",
            "💫",
            "✦",
            "✧",
            "❋"
        ];

        spark.innerHTML =
        effects[
            Math.floor(
                Math.random()*effects.length
            )
        ];

        spark.style.left =
        (35 + Math.random()*30) + "%";

        spark.style.top =
        (35 + Math.random()*30) + "%";

        spark.style.fontSize =
        (18 + Math.random()*14) + "px";

        spark.style.setProperty(
            "--x",
            (Math.random()*280-140)+"px"
        );

        spark.style.setProperty(
            "--y",
            (Math.random()*180-90)+"px"
        );

        spark.style.animation =
        "sparkBurst 1.2s ease-out forwards";

        brand.appendChild(spark);

        setTimeout(()=>{
            spark.remove();
        },1200);

    }

},1000);



const viewer =
document.getElementById("galleryViewer");

const viewerImg =
document.getElementById("galleryImage");

let scale = 1;

document
.querySelectorAll('.grid-img img')
.forEach(img=>{

    img.addEventListener('click',()=>{

        viewer.style.display='flex';

        viewerImg.src=img.src;

        scale=1;

        viewerImg.style.transform=
        `scale(${scale})`;

    });

});

document
.getElementById("galleryClose")
.onclick=()=>{

    viewer.style.display='none';

};

viewer.addEventListener('click',(e)=>{

    if(e.target===viewer){

        viewer.style.display='none';

    }

});

let startDistance = 0;

viewer.addEventListener(
'touchstart',
(e)=>{

    if(e.touches.length===2){

        startDistance =
        Math.hypot(
            e.touches[0].clientX -
            e.touches[1].clientX,

            e.touches[0].clientY -
            e.touches[1].clientY
        );

    }

},
{passive:false}
);

viewer.addEventListener(
'touchmove',
(e)=>{

    if(e.touches.length===2){

        e.preventDefault();

        const newDistance =
        Math.hypot(
            e.touches[0].clientX -
            e.touches[1].clientX,

            e.touches[0].clientY -
            e.touches[1].clientY
        );

        scale *=
        newDistance /
        startDistance;

        scale =
        Math.min(
            Math.max(scale,1),
            5
        );

        viewerImg.style.transform =
        `scale(${scale})`;

        startDistance =
        newDistance;

    }

},
{passive:false}
);

let startY = 0;

viewer.addEventListener(
'touchstart',
e=>{

    startY =
    e.touches[0].clientY;

}
);

viewer.addEventListener(
'touchend',
e=>{

    const endY =
    e.changedTouches[0].clientY;

    if(endY - startY > 120){

        viewer.style.display='none';

    }

}
);

function ringBell(){

    const audioCtx =
    new (window.AudioContext || window.webkitAudioContext)();

    const gain =
    audioCtx.createGain();

    gain.connect(audioCtx.destination);

    gain.gain.setValueAtTime(
        1, // volume (0.4 is much louder)
        audioCtx.currentTime
    );

    const osc1 =
    audioCtx.createOscillator();

    const osc2 =
    audioCtx.createOscillator();

    osc1.type = "triangle";
    osc2.type = "sine";

    osc1.frequency.setValueAtTime(
        1200,
        audioCtx.currentTime
    );

    osc2.frequency.setValueAtTime(
        1800,
        audioCtx.currentTime
    );

    osc1.connect(gain);
    osc2.connect(gain);

    osc1.start();
    osc2.start();

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtx.currentTime + 2
    );

    osc1.stop(audioCtx.currentTime + 2);
    osc2.stop(audioCtx.currentTime + 2);
}

const notifyBtn = document.getElementById("notifyBtn");
const notifyNumber = document.getElementById("notifyNumber");

notifyBtn.addEventListener("click", async () => {

    const number = notifyNumber.value.trim();

    // Only 10 digits
    if(!/^[0-9]{10}$/.test(number)){

        notifyNumber.classList.remove("shake");

        void notifyNumber.offsetWidth;

        notifyNumber.classList.add("shake");

        return;
    }

    // Save to localStorage
    let numbers =
        JSON.parse(
            localStorage.getItem("launch_notify_numbers")
        ) || [];

    if(!numbers.includes(number)){

        numbers.push(number);

        localStorage.setItem(
            "launch_notify_numbers",
            JSON.stringify(numbers)
        );
    }
    await window.supabaseClient
.from("app_updates")
.insert([
    {
        mobile:number
    }
]);

    // Bell animation
    ringBell();

// Bell animation
notifyBtn.classList.remove("notify-success");

void notifyBtn.offsetWidth;

notifyBtn.classList.add("notify-success");

    notifyNumber.value = "";

});

const sheet =
document.getElementById("bottomSheet");

const overlay =
document.getElementById("sheetOverlay");

const content =
document.getElementById("sheetContent");
function openSheet(type){

    if(type === "terms"){

        content.innerHTML = `
            <h3>Terms & Conditions</h3>

            <p>
            1. By submitting your details, you agree to use this website in accordance with these terms.<br><br>

            2. Information provided by you must be accurate and up to date.<br><br>

            3. Magua Ethnics may contact you regarding enquiries, updates, offers, launches, and customer support.<br><br>

            4. Promotional communications may be sent through WhatsApp, SMS, phone calls, or email.<br><br>

            5. Submission of details does not guarantee product availability or promotional eligibility.<br><br>

            6. Website content, images, logos, and designs remain the property of Magua Ethnics.<br><br>

            7. Unauthorized copying or reproduction of website content is prohibited.<br><br>

            8. We reserve the right to update products, services, pricing, and website content without prior notice.<br><br>

            9. Users must not misuse forms, submit false information, or attempt unauthorized access.<br><br>

            10. We may suspend access if fraudulent or harmful activity is detected.<br><br>

            11. Continued use of this website indicates acceptance of these terms.<br><br>

            12. These terms may be updated periodically without prior notification.
            </p>
        `;

    }else{

        content.innerHTML = `
            <h3>Privacy Policy</h3>

            <p>
            1. We collect only the information voluntarily provided by you.<br><br>

            2. Information may include your name, mobile number, and email address.<br><br>

            3. Your details are used to provide customer support, updates, notifications, and promotional offers.<br><br>

            4. Mobile numbers may be used for WhatsApp updates and communication.<br><br>

            5. Email addresses may be used for newsletters, launch announcements, and offers.<br><br>

            6. We do not sell your personal information to third parties.<br><br>

            7. Your information is stored securely using trusted technology providers.<br><br>

            8. Access to collected information is limited to authorized personnel only.<br><br>

            9. We take reasonable measures to protect your data from unauthorized access.<br><br>

            10. You may request removal of your information by contacting us.<br><br>

            11. We may update this privacy policy from time to time as required.<br><br>

            12. By submitting your details, you consent to the collection and use of information described above.
            </p>
        `;

    }
sheet.classList.add("show");
overlay.classList.add("show");

document.body.style.overflow = "hidden";
}

overlay.onclick = closeSheet;

function closeSheet(){

    sheet.classList.remove("show");

    overlay.classList.remove("show");

    document.body.style.overflow = "";
}

let sheetStartX = 0;
let sheetStartY = 0;
sheet.addEventListener("touchstart",(e)=>{

    sheetStartX = e.touches[0].clientX;
    sheetStartY = e.touches[0].clientY;

});

sheet.addEventListener("touchend",(e)=>{

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    const diffX = Math.abs(endX - sheetStartX);
    const diffY = endY - sheetStartY;

    if(diffX > 120){
        closeSheet();
    }

    if(diffY > 100){
        closeSheet();
    }

});


async function updateVisitorCounter(){

    try{

        await window.supabaseClient
        .from("website_visits")
        .insert([{}]);

        const { count,error } =
        await window.supabaseClient
        .from("website_visits")
        .select("*",{
            count:"exact",
            head:true
        });

        if(error){

            console.log(error);
            return;

        }

       const counter =
document.getElementById("visitorCount");

const target = count || 0;

let current = 0;

const step = Math.max(
    1,
    Math.ceil(target / 60)
);

const timer = setInterval(()=>{

    current += step;

    if(current >= target){

        current = target;

        clearInterval(timer);

    }

    counter.textContent = current;

},16);

    }catch(err){

        console.log(err);

    }

}

updateVisitorCounter();


document
.querySelectorAll(".beauty-lazy-img")
.forEach(img=>{

    const shimmer =
    img.parentElement.querySelector(
        ".beauty-img-loader"
    );

    const hideShimmer = ()=>{

        shimmer.style.display = "none";

    };

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

const glamBookBtn =
document.getElementById("glamBookBtn");

const glamMobileInput =
document.getElementById("glamMobileInput");

glamBookBtn.addEventListener(
"click",
async()=>{

    const mobile =
    glamMobileInput.value.trim();

    if(!/^[0-9]{10}$/.test(mobile)){

        glamMobileInput.classList.remove(
            "shake"
        );

        void glamMobileInput.offsetWidth;

        glamMobileInput.classList.add(
            "shake"
        );

        return;
    }

    await window.supabaseClient
    .from("beauty_bookings")
    .insert([
        {
            mobile:mobile
        }
    ]);

    glamBookBtn.innerHTML = "";

    const interval =
    setInterval(()=>{

        for(let i=0;i<8;i++){

            const heart =
            document.createElement("span");

            heart.innerHTML = "💜";

            heart.style.position =
            "absolute";

            heart.style.left = "50%";

            heart.style.top = "50%";

            heart.style.fontSize =
            "18px";

            heart.style.pointerEvents =
            "none";

            heart.style.setProperty(
                "--x",
                (Math.random()*220-110)
                +"px"
            );

            heart.style.setProperty(
                "--y",
                (Math.random()*140-70)
                +"px"
            );

            heart.style.animation =
            "beautyBurst 1.2s ease-out forwards";

            glamBookBtn.appendChild(
                heart
            );

            setTimeout(()=>{

                heart.remove();

            },1200);

        }

    },150);

    setTimeout(()=>{

        clearInterval(interval);

        glamBookBtn.innerHTML =
        "Book Now";

        glamMobileInput.value = "";

    },5000);

});
