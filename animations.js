const glass = document.getElementById('glass');
const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 2 } })

tl.from("img", { x: "-30%", opacity: 0 })
     .from(".container", { x: "-40%", backdropFilter: "blur(0px)", opacity: 0, delay: 0, duration: 3.5 }, "-=.8")
     .from(".txt1", { y: -30, opacity: 0, stagger: 0.2, duration: 1 }, "-=.5")
     .from(".txt2", { y: -30, opacity: 0, delay: 0.5, stagger: 0.2, duration: 1 }, "-=.5")
     .from("h1", { y: 20, clipPath: "inset(0 0 100% 0)" }, "-=.8");