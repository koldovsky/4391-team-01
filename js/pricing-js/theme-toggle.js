(function() {
const root = document.documentElement;
const btn = document.getElementById('theme-toggle');
const select = document.getElementById('theme-select');
const label = document.getElementById('mode-label');


function getTheme() {
return root.getAttribute('data-theme') || 'system';
}
function setTheme(mode) {
root.setAttribute('data-theme', mode);
localStorage.setItem('theme', mode);
label.textContent = mode;
select.value = mode;
}


btn.addEventListener('click', () => {
const mode = getTheme();
setTheme(mode === 'dark' ? 'light' : 'dark');
});


select.addEventListener('change', (e) => setTheme(e.target.value));


const saved = localStorage.getItem('theme') || 'system';
setTheme(saved);
})();