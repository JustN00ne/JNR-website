const htmlElement = document.documentElement;

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

if (darkModeMediaQuery.matches) {
  htmlElement.classList.add('dark-theme');
  htmlElement.classList.remove('light-theme');
}

darkModeMediaQuery.addEventListener('change', (event) => {
  if (event.matches) {
    htmlElement.classList.add('dark-theme');
    htmlElement.classList.remove('light-theme');
  } else {
    htmlElement.classList.add('light-theme');
    htmlElement.classList.remove('dark-theme');
  }
});
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
  htmlElement.classList.toggle('dark-theme');
  htmlElement.classList.toggle('light-theme');
});