function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

export function initCounterAnimation() {
  const skills = document.querySelectorAll(".skill-inc");
  skills.forEach((s) => {
    animateValue(
      s,
      0,
      s.getAttribute("data-value"),
      s.getAttribute("data-second")
    );
  });
}
