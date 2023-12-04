import anime from "animejs";
export function animation() {
  // Wrap every letter in a span
  var textWrapper = document.querySelector(".ml1 .letters");
  // textWrapper.innerHTML = textWrapper.textContent.replace(
  //   /\S/g,
  //   "<span class='letter'>$&</span>"
  // );
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S+/g,
    "<span class='word'>$&</span>"
  );

  var wordWrappers = document.querySelectorAll(".ml1 .letters .word");
  // .replace(/\S/g, "<span class='letter'>$&</span>");
  console.log(wordWrappers);
  wordWrappers.forEach((wordWrapper) => {
    wordWrapper.innerHTML = wordWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
  });
  // anime.timeline({ loop: false }).add({
  //   targets: ".ml1 .letters",
  //   scale: [0, 1],
  //   duration: 1500,
  //   elasticity: 600,
  //   delay: (el, i) => 45 * (i + 1),
  // });
  // .add({
  //   targets: ".ml1 .letter",
  //   scale: [0.3, 1],
  //   opacity: [0, 1],
  //   translateZ: 0,
  //   easing: "easeOutExpo",
  //   duration: 600,
  //   delay: (el, i) => 70 * (i + 1),
  // });
  const timeline = anime.timeline({ loop: false }).add({
    targets: ".ml1 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  });
  console.log(timeline);
  // .add({
  //   targets: ".ml1",
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 1000,
  // });
}
