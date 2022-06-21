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
  
  const obj = document.getElementById("valueper");
  animateValue(obj, 0, 95, 2000);

  const obj2 = document.getElementById("valueper2");
  animateValue(obj2, 0, 80, 2000);

  const obj3 = document.getElementById("valueper3");
  animateValue(obj3, 0, 70, 2000);
  
  const obj4 = document.getElementById("valueper4");
  animateValue(obj4, 0, 60, 4000);