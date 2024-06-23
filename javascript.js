let tl = gsap.timeline();

tl.to(".fixd",{
    top:-700,
     duration:1,
})

tl.from("nav img",{
    opacity:0,
    scale:0,
    duration:1.5,
    y: -100
},"a")

tl.from(".nav-part2 h2",{
    opacity:0,
    scale:0,
    duration:1.5,
    y: -100,
    stagger:0.3
},"a")

tl.from(".nav-part2 button",{
    opacity:0,
    scale:0,
    duration:1.5,
   
},"a")

tl.from("#one",{
    x:-1100,
    opacity:0,
    duration:1.5,
    scale:0,
},"a")

tl.from("#two",{
    x:1100,
    opacity:0,
    duration:1.5,
    scale:0,
},"a")

tl.from(".boy",{
    opacity:0,
    scale:0,
    duration:1.5,
   
},"a")

tl.from(".button button",{
    y:100,
    opacity:0,
    duration:1.5,
    scale:0,
},"a")