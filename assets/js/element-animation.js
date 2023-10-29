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
  
  for (let elm of element1) {
    observer.observe(elm);
  }
  for (let elm of element2) {
    observer.observe(elm);
  }
  for (let elm of element3) {
    observer.observe(elm);
  }