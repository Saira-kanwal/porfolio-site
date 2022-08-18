// For Sticky Header

class StickyHeader {
  constructor(t) {
    (this.header = t),
      (this.body = document.querySelector("body")),
      (this.thresholdPosition = 15),
      (this.triggeredStickyClass = "header--sticky-triggered"),
      (this.stickyClass = "header--sticky"),
      (this.ticking = !1),
      (this.bodyPosition = 0),
      window.addEventListener("DOMContentLoaded", () => this.initSticky()),
      this.scrollChanged();
  }
  initSticky() {
    (this.headerStaticHeight = this.header.getBoundingClientRect().height),
      this.header.classList.toggle(this.stickyClass, !0),
      window.addEventListener("scroll", () => this.scrollHandler());
  }
  scrollHandler() {
    this.ticking ||
      (window.requestAnimationFrame(() => {
        this.scrollChanged(), (this.ticking = !1);
      }),
      (this.ticking = !0));
  }
  scrollChanged() {
    (this.bodyPosition = Math.abs(this.body.getBoundingClientRect().top)),
      this.bodyPosition > this.thresholdPosition
        ? this.header.classList.toggle(this.triggeredStickyClass, !0)
        : this.header.classList.toggle(this.triggeredStickyClass, !1);
  }
}
const stickyHeader = new StickyHeader(document.querySelector(".header"));

// Sticky Header End....




// For Animation

let sectionIntersectOptions = {
  rootMargin: "9999px 0px 0px 0px",
  threshold: 0.2,
};
const onSectionIntersect = (e) => {
    let t = 0;
    animatedNodes.forEach((n) => {
      e.target.contains(n) &&
        ((n.style.animationDelay = `${nodeDelayDelta * t + 0.1}s`),
        n.classList.add("rad-animate"),
        t++);
    });
  },
  onSectionIntersectChange = (e, t) => {
    e.forEach((e) => {
      e.isIntersecting && onSectionIntersect(e);
    });
  };
let animationObserver = new IntersectionObserver(
  onSectionIntersectChange,
  sectionIntersectOptions
);
const animatedNodes = Array.from(
    document.querySelectorAll(
      ".rad-fade-down, .rad-fade-in, .rad-fade-in-long, .rad-scale-down"
    )
  ),
  animatedSections = Array.from(
    document.querySelectorAll(".rad-animation-group")
  ),
  nodeDelayDelta = 0.2,
  sectionDelayDelta = 0.2;
animatedNodes.forEach((e, t) => {
  e.classList.add("rad-waiting");
}),
  animatedSections.forEach((e, t) => {
    animationObserver.observe(e);
  });

// Animation End....


// For Image Load

window.addEventListener("load", function() {
  var observer = window.lozad(".lozad", {
    rootMargin: window.innerHeight / 2 + "px 0px",
    threshold: 0.01
  }); 
  observer.observe();
});

// Image Load End.....


// For Font Load 

(function(w) {
    
  if (w.document.documentElement.className.indexOf("fonts-loaded") > -1) {
    return;
  }
  var fontA = new w.FontFaceObserver("Inter", {
    weight: 300
  });
  var fontB = new w.FontFaceObserver("Inter", {
    weight: 400
  });
  var fontC = new w.FontFaceObserver("Inter", {
    weight: 500
  });
  var fontD = new w.FontFaceObserver("Inter", {
    weight: 600
  });
  var fontE = new w.FontFaceObserver("Inter", {
    weight: 700
  });
  var fontF = new w.FontFaceObserver("Inter", {
    weight: 900
  });
  w.Promise.all([fontA.load(), fontC.load(), fontF.load()]).then(function() {
    w.document.documentElement.className += " fonts-loaded";
  });
})(this);

// End Font Load....
//********************************* 



