function cursorEffect() {
    var page1Content = document.querySelector(".main")
    var cursor = document.querySelector("#cursor")

    page1Content.addEventListener("mousemove", function (e) {
        // console.log(e.x);
        // console.log(e.y);
        // cursor.style.left = e.x+"px"
        // cursor.style.top = e.y+"px"
        gsap.to(cursor, {
            x: e.x,
            y: e.y
        })
    })
     page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffect()

const items = document.querySelectorAll(".ticker-item");

items.forEach((item, index) => {
    gsap.set(item, { y: "100%" }); 
});

let tl = gsap.timeline({ repeat: -1 });

items.forEach((item, i) => {
    tl.to(item, {
        y: "0%",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
    })
        .to(item, {
            y: "-100%",
            opacity: 0,
            duration: 0.8,
            ease: "power2.in",
            delay: 0.6, 
        }, "+=0.5");
});

