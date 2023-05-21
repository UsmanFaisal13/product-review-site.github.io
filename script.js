// JavaScript for slide toggle dark mode
const toggleSwitch = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});
