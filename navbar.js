function injectNavbar() {
    // 1. 檢查頁面上是否已經存在導覽列，避免重複注入
    if (document.querySelector('.navbar')) return;

    // 2. 定義你的導覽列 HTML 結構
    const navbarHTML = `
    <nav class="navbar">
        <div class="container">
            <a href="/online1/index.html" class="logo">化學視界</a>
            <div class="nav-right-group">
                <ul class="nav-links">
                    <li><a href="/online1/index.html">首頁</a></li>
                    <li><a href="#about">關於我們</a></li> 
                    <li><a href="#contact">聯絡我們</a></li>
                </ul>
                <div class="menu-btn" onclick="toggleDrawer()">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </div>
        </div>
    </nav>
    <div id="sideDrawer" class="drawer">
        <div class="drawer-header">
            <span>快速跳轉</span>
            <button class="close-btn" onclick="toggleDrawer()">&times;</button>
        </div>
        <ul class="drawer-links">
            <li class="drawer-section-title">網站導覽</li>
            <li><a href="/online1/index.html" onclick="toggleDrawer()">首頁</a></li>
            <li><a href="#about" onclick="toggleDrawer()">關於我們</a></li> 
            <li><a href="#contact" onclick="toggleDrawer()">聯絡我們</a></li>
            <li class="drawer-section-title">常用工具</li>
            <li><a href="/online1/card/article-periodic-table.html" onclick="toggleDrawer()">元素週期表</a></li>
            <li><a href="/online1/chem.html" onclick="toggleDrawer()">分子結構查詢</a></li>
            <li class="drawer-section-title">各大分類</li>
            <li><a href="/online1/card/article-life.html" onclick="toggleDrawer()">生活現象背後的化學</a></li>
            <li><a href="/online1/card/article-periodic-table.html" onclick="toggleDrawer()">化學元素的故事</a></li>
            <li><a href="/online1/card/article-mygo.html" onclick="toggleDrawer()">迷思破解</a></li>
            <li><a href="/online1/card/article-eat.html" onclick="toggleDrawer()">食品與化學</a></li>
            <li><a href="/online1/card/article-product.html" onclick="toggleDrawer()">材料與科技</a></li>
            <li><a href="/online1/card/article-cochur.html" onclick="toggleDrawer()">化學歷史與文化</a></li>
        </ul>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavbar);
} else {
    injectNavbar();
}
    