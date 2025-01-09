function openApp(appName, element) {
  // Add active class to the app icon for animation
  element.classList.add('active-icon');

  // Create and show the full-screen app div
  const appFullscreen = document.createElement('div');
  appFullscreen.classList.add('app-fullscreen');
  appFullscreen.innerHTML = `<h2>${appName}</h2>`;
  document.body.appendChild(appFullscreen);

  // After the animation ends, show the app content
  setTimeout(() => {
    appFullscreen.innerHTML = `<h1>${appName} Loaded!</h1>`;
  }, 700);

  // After another 1 second, remove the full-screen app and reset the icon
  setTimeout(() => {
    appFullscreen.remove();
    element.classList.remove('active-icon');
  }, 1700);
}

function goBack() {
  openPage('home');
}

function addNewApp() {
  alert("New app functionality coming soon!");
}

function openPage(page) {
  // Handle page transitions
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page).classList.add('active');
}
