function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let element1 = document.querySelectorAll('.element-animation1');
  let element2 = document.querySelectorAll('.element-animation2');
  let element3 = document.querySelectorAll('.element-animation3');
  let element4 = document.querySelectorAll('.element-animation4');
  let element5 = document.querySelectorAll('.element-animation5');
  let element6 = document.querySelectorAll('.element-animation6');
  let element7 = document.querySelectorAll('.element-animation7');
  let element8 = document.querySelectorAll('.element-animation8');
  let element9 = document.querySelectorAll('.element-animation9');
  let element10 = document.querySelectorAll('.element-animation10');
  let element11 = document.querySelectorAll('.element-animation11');
  
  for (let elm of element1) {
    observer.observe(elm);
  }
  for (let elm of element2) {
    observer.observe(elm);
  }
  for (let elm of element3) {
    observer.observe(elm);
  }
  for (let elm of element4) {
    observer.observe(elm);
  }
  for (let elm of element5) {
    observer.observe(elm);
  }
  for (let elm of element6) {
    observer.observe(elm);
  }
  for (let elm of element7) {
    observer.observe(elm);
  }
  for (let elm of element8) {
    observer.observe(elm);
  }
  for (let elm of element9) {
    observer.observe(elm);
  }
  for (let elm of element10) {
    observer.observe(elm);
  }
  for (let elm of element11) {
    observer.observe(elm);
  }