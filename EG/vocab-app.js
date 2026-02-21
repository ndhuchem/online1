function renderVocab() {
    const container = document.getElementById('vocab-list-area'); 
    if (!container) return;
    if (typeof chemistryVocab === 'undefined') {
        console.error("找不到 chemistryVocab 資料，請檢查 dictionary.js 是否載入成功");
        return;
    }
    let html = `<div class="vocab-grid">`;
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
function playVocab(audioPath) {
    const audio = new Audio(audioPath);
    audio.play().catch(e => console.log("音檔播放失敗，請檢查路徑:", audioPath));
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderVocab);
} else {
    renderVocab();
}