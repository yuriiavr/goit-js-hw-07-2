const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

inputEl.addEventListener('input', () => {
  const trimmedValue = inputEl.value.trim();
  outputEl.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
