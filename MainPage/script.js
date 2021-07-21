const $ = document
const toggleSwitch = $.querySelector('input[type="checkbox"]')
const nav = $.getElementById('nav')
const toggleIcon = $.getElementById('toggle-icon')
const image1 = $.getElementById('image1')
const image2 = $.getElementById('image2')
const image3 = $.getElementById('image3')
const textBox = $.getElementById('text-box')


// Dark or light images
function imageMode(color) {
  image1.src = `img/undraw_conceptual_idea_${color}.svg`
  image2.src = `img/undraw_feeling_proud_${color}.svg`
  image3.src = `img/undraw_proud_coder_${color}.svg`
}

// Dark mode styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
  toggleIcon.children[0].textContent = 'Dark Mode'
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
  imageMode('dark')
}

// Light mode styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
  toggleIcon.children[0].textContent = 'Light Mode'
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
  imageMode('light')
}

// swith the web site Theme when check box checked
function swithTheme(event) {
  if(event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    darkMode()
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
    lightMode()
  }
}

toggleSwitch.addEventListener('change', swithTheme)

// get the user last theme
var lastTheme = localStorage.getItem('theme')
if(lastTheme == 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark')
  toggleSwitch.checked = true
  darkMode()
} else {
  document.documentElement.setAttribute('data-theme', 'light')
  toggleSwitch.checked = false
  lightMode()
}
