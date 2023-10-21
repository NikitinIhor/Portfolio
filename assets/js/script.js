const text = 'Hello, my name is Nikitin Ihor\n\
i am a frontend developer\n\
i love to learn to get better...\n\
     ___________________________'
let line = 0
let count = 0
let result = ''
let resultBig = ''
const pre = document.querySelector('pre')

const typeText = () => {
  const interval = setInterval(() => {
    result+=text[line][count]
    pre.innerHTML = result + '|'
    count ++
    if(count>= text[line]. length){
      count=0
      line ++
    }
    if(line == text.length){
      clearInterval(interval)
      pre.innerHTML = result
      return true
    }
  }, 70);
  };

typeText()






function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav2").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}