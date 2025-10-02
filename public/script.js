// script.js
document.getElementById('checkBtn').addEventListener('click', async () => {
  const resEl = document.getElementById('result');
  resEl.textContent = 'Mencoba...';
  try {
    const r = await fetch('/flag', { cache: 'no-store' });
    const text = await r.text();
    // tampilkan potongan respon
    resEl.textContent = text;
  } catch (err) {
    resEl.textContent = 'Fetch error: ' + err;
  }
});
