function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
   
}

function keepTheme() {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'true') {
      setTheme(true);
    } else if (localStorage.getItem('theme') === 'false') {
      setTheme(false)
    }
  } else {
    setTheme(true)
  }
}

module.exports = {
  setTheme,
  keepTheme
}