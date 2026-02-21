function renderVocab() {
    const container = document.getElementById('main-content');
    if (!container) return;

    let html = `
        <h1 class="page-title">化學專業單字庫</h1>
        <div class="vocab-grid">
    `;
    chemistryVocab.forEach(item => {
        html += `
            <div class="vocab-card">
                <div class="vocab-header">
                    <span class="vocab-word">${item.word}</span>
                    <button class="btn-audio" onclick="playVocab('${item.audio}')">🔊</button>
                </div>
                <div class="vocab-translation">${item.translation}</div>
                <div class="vocab-subtitle">${item.subtitle}</div>
                <a href="${item.link}" class="vocab-link">詳細解說 ></a>
            </div>
        `;
    });
    html += `</div>`;
    container.innerHTML = html;
}
// 播放音檔函式
function playVocab(audioPath) {
    const audio = new Audio(audioPath);
    audio.play().catch(e => console.log("音檔載入失敗"));
}
document.addEventListener('DOMContentLoaded', renderVocab);