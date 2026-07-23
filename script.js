const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

function nextPage(pageNum) {
    document.querySelectorAll('.card').forEach(p => p.classList.add('hidden'));
    document.getElementById(`page${pageNum}`).classList.remove('hidden');
}

yesBtn.addEventListener('click', () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    nextPage(2);
});

let noClickCount = 0;
noBtn.addEventListener('click', () => {
    noClickCount++;
    if (noClickCount < 5) {
        noBtn.style.position = 'absolute';
        noBtn.style.left = Math.random() * 70 + '%';
        noBtn.style.top = Math.random() * 70 + '%';
    } else {
        alert("😢 তুমি না বললে আমার হার্ট ভেঙে যাবে Sweety 💔");
    }
});

document.getElementById('finish').addEventListener('click', () => {
    nextPage(6);
});
