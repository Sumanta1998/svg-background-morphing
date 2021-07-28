const moonPath =
  "M14 27.5C14 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 14 12.3122 14 27.5Z";

const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");
let heading = document.querySelector(".heading");
let toggle = false;

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });

  timeline.add({
    targets: ".sun",
    d: [{ value: toggle ? sunPath : moonPath }]
  })
  .add({
    targets : ".heading",
    update: function() {
    heading.innerHTML = toggle ? "White Mode" : "Dark Mode"
  },
  }, "+=50")
  .add({
  	targets : "#darkMode",
  	rotate:toggle ? 180 : 320
  },"-=350")
  .add({
  	targets:"section",
  	backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
  	color : toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
  }, "-=750");

  if(!toggle){
   toggle = true;
  }else{
   toggle = false;
  }
});
