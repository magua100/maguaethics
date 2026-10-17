/* ==========================================
   MAGUA - PAGE SHIMMER LOADER
   CSS + HTML + JS - SINGLE FILE
========================================== */

(function () {

    /* =========================
       CSS
    ========================= */

    const style = document.createElement("style");

    style.textContent = `
        #maguaPageShimmer{
            position:fixed;
            inset:0;
            z-index:999999;
            background:#ffffff;
            overflow:hidden;
            transition:
                opacity .28s ease,
                visibility .28s ease;
        }

        #maguaPageShimmer.mag-hide{
            opacity:0;
            visibility:hidden;
            pointer-events:none;
        }

        .mag-shimmer-page{
            width:100%;
            max-width:1400px;
            margin:0 auto;
            padding:18px 18px 40px;
        }

        /* COMMON SHIMMER */

        .mag-shimmer{
            position:relative;
            overflow:hidden;
            background:#eeeeee;
        }

        .mag-shimmer::after{
            content:"";
            position:absolute;
            inset:0;
            transform:translateX(-100%);
            background:linear-gradient(
                90deg,
                transparent 0%,
                rgba(255,255,255,.35) 25%,
                rgba(255,255,255,.85) 50%,
                rgba(255,255,255,.35) 75%,
                transparent 100%
            );
            animation:magShimmerMove 1.25s infinite;
        }

        @keyframes magShimmerMove{
            100%{
                transform:translateX(100%);
            }
        }


        /* TOP BAR */

        .mag-shimmer-top{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:16px;
            margin-bottom:24px;
        }

        .mag-shimmer-logo{
            width:125px;
            height:30px;
            border-radius:8px;
        }

        .mag-shimmer-top-right{
            display:flex;
            align-items:center;
            gap:12px;
        }

        .mag-shimmer-circle{
            width:38px;
            height:38px;
            border-radius:50%;
        }


        /* BANNER */

        .mag-shimmer-banner{
            width:100%;
            height:230px;
            border-radius:20px;
            margin-bottom:28px;
        }


        /* CATEGORY */

        .mag-shimmer-title{
            width:190px;
            height:22px;
            border-radius:7px;
            margin-bottom:18px;
        }

        .mag-shimmer-categories{
            display:flex;
            gap:16px;
            overflow:hidden;
            margin-bottom:34px;
        }

        .mag-category-item{
            flex:0 0 92px;
        }

        .mag-category-img{
            width:78px;
            height:78px;
            border-radius:50%;
            margin:0 auto 10px;
        }

        .mag-category-text{
            width:70px;
            height:10px;
            border-radius:5px;
            margin:auto;
        }


        /* PRODUCT HEADER */

        .mag-products-head{
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin-bottom:18px;
        }

        .mag-product-heading{
            width:170px;
            height:21px;
            border-radius:7px;
        }

        .mag-product-filter{
            width:70px;
            height:30px;
            border-radius:10px;
        }


        /* PRODUCT GRID */

        .mag-products-grid{
            display:grid;
            grid-template-columns:
                repeat(4,minmax(0,1fr));
            gap:18px;
        }

        .mag-product-card{
            min-width:0;
        }

        .mag-product-image{
            width:100%;
            aspect-ratio:3 / 4;
            border-radius:16px;
            margin-bottom:13px;
        }

        .mag-product-line1{
            width:82%;
            height:13px;
            border-radius:6px;
            margin-bottom:9px;
        }

        .mag-product-line2{
            width:58%;
            height:11px;
            border-radius:6px;
            margin-bottom:11px;
        }

        .mag-product-price{
            width:38%;
            height:14px;
            border-radius:6px;
        }


        /* TABLET */

        @media(max-width:900px){

            .mag-shimmer-banner{
                height:190px;
            }

            .mag-products-grid{
                grid-template-columns:
                    repeat(3,minmax(0,1fr));
                gap:14px;
            }
        }


        /* MOBILE */

        @media(max-width:600px){

            .mag-shimmer-page{
                padding:
                    14px 12px 100px;
            }

            .mag-shimmer-top{
                margin-bottom:18px;
            }

            .mag-shimmer-logo{
                width:105px;
                height:25px;
            }

            .mag-shimmer-circle{
                width:34px;
                height:34px;
            }

            .mag-shimmer-banner{
                height:155px;
                border-radius:15px;
                margin-bottom:23px;
            }

            .mag-shimmer-title{
                width:145px;
                height:18px;
                margin-bottom:15px;
            }

            .mag-shimmer-categories{
                gap:11px;
                margin-bottom:27px;
            }

            .mag-category-item{
                flex-basis:72px;
            }

            .mag-category-img{
                width:62px;
                height:62px;
            }

            .mag-category-text{
                width:55px;
                height:9px;
            }

            .mag-product-heading{
                width:135px;
                height:18px;
            }

            .mag-product-filter{
                width:60px;
                height:27px;
            }

            .mag-products-grid{
                grid-template-columns:
                    repeat(2,minmax(0,1fr));
                gap:12px;
            }

            .mag-product-image{
                border-radius:13px;
                margin-bottom:10px;
            }

            .mag-product-line1{
                height:11px;
            }

            .mag-product-line2{
                height:9px;
            }

            .mag-product-price{
                height:12px;
            }
        }
    `;

    document.head.appendChild(style);


    /* =========================
       PRODUCT SKELETON
    ========================= */

    function productSkeleton() {

        return `
            <div class="mag-product-card">

                <div
                    class="mag-shimmer
                           mag-product-image">
                </div>

                <div
                    class="mag-shimmer
                           mag-product-line1">
                </div>

                <div
                    class="mag-shimmer
                           mag-product-line2">
                </div>

                <div
                    class="mag-shimmer
                           mag-product-price">
                </div>

            </div>
        `;
    }


    /* =========================
       CATEGORY SKELETON
    ========================= */

    function categorySkeleton() {

        return `
            <div class="mag-category-item">

                <div
                    class="mag-shimmer
                           mag-category-img">
                </div>

                <div
                    class="mag-shimmer
                           mag-category-text">
                </div>

            </div>
        `;
    }


    /* =========================
       SHIMMER HTML
    ========================= */

    const loader =
        document.createElement("div");

    loader.id =
        "maguaPageShimmer";


    loader.innerHTML = `
        <div class="mag-shimmer-page">

            <!-- TOP -->

            <div class="mag-shimmer-top">

                <div
                    class="mag-shimmer
                           mag-shimmer-logo">
                </div>

                <div class="mag-shimmer-top-right">

                    <div
                        class="mag-shimmer
                               mag-shimmer-circle">
                    </div>

                    <div
                        class="mag-shimmer
                               mag-shimmer-circle">
                    </div>

                </div>

            </div>


            <!-- BANNER -->

            <div
                class="mag-shimmer
                       mag-shimmer-banner">
            </div>


            <!-- CATEGORY TITLE -->

            <div
                class="mag-shimmer
                       mag-shimmer-title">
            </div>


            <!-- CATEGORIES -->

            <div class="mag-shimmer-categories">

                ${Array.from(
                    {length:7},
                    categorySkeleton
                ).join("")}

            </div>


            <!-- PRODUCTS HEADER -->

            <div class="mag-products-head">

                <div
                    class="mag-shimmer
                           mag-product-heading">
                </div>

                <div
                    class="mag-shimmer
                           mag-product-filter">
                </div>

            </div>


            <!-- PRODUCTS -->

            <div class="mag-products-grid">

                ${Array.from(
                    {length:8},
                    productSkeleton
                ).join("")}

            </div>

        </div>
    `;


    /* =========================
       SHOW IMMEDIATELY
    ========================= */

    if(document.body){

        document.body.prepend(loader);

    }else{

        document.addEventListener(
            "DOMContentLoaded",
            function(){

                document.body.prepend(loader);

            },
            {once:true}
        );

    }


    /* =========================
       HIDE FUNCTION
    ========================= */

    window.hideMaguaShimmer =
        function(){

            const el =
                document.getElementById(
                    "maguaPageShimmer"
                );

            if(!el){
                return;
            }

            el.classList.add(
                "mag-hide"
            );

            setTimeout(
                function(){
                    el.remove();
                },
                320
            );

        };


    /* =========================
       AUTO HIDE
    ========================= */

    window.addEventListener(
        "load",
        function(){

            setTimeout(
                function(){
                    window.hideMaguaShimmer();
                },
                250
            );

        }
    );

})();