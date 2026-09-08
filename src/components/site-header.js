const siteRootUrl = new URL("../../", import.meta.url);
const siteHref = (path = "") => new URL(path, siteRootUrl).href;

const headerMarkup = `
<header class="site-header" data-site-header>
    <nav class="navigation" aria-label="主导航">
        <button class="submenu-back" type="button" aria-label="返回主菜单" data-submenu-back>
            <span aria-hidden="true">‹</span>
        </button>

        <ul class="navigation-list" id="primary-navigation" data-navigation-list>
            <li class="navigation-item"><a class="navigation-link" href="${siteHref()}">Menu</a></li>

            <li class="navigation-item has-submenu" data-submenu-item data-submenu-label="Archives 目录">
                <button class="navigation-link submenu-trigger" type="button" aria-expanded="false"
                        aria-haspopup="true" aria-controls="submenu-archives" data-submenu-trigger>
                    Archives
                </button>
                <div class="submenu" id="submenu-archives" data-submenu>
                    <div class="submenu-scroll"><div class="submenu-content">
                        <section class="submenu-group submenu-group-elevated">
                            <h2 class="submenu-title flyout-item">探索归档</h2>
                            <ul class="submenu-list submenu-list-elevated">
                                <li class="flyout-item"><a href="${siteHref("archives/")}">查看全部</a></li>
                                <li class="flyout-item"><a href="${siteHref("archives/#latest")}">最近更新</a></li>
                                <li class="flyout-item"><a href="${siteHref("archives/#featured")}">精选文章</a></li>
                            </ul>
                        </section>
                        <section class="submenu-group">
                            <h2 class="submenu-title flyout-item">按主题浏览</h2>
                            <ul class="submenu-list">
                                <li class="flyout-item"><a href="${siteHref("categories/web/")}">Web 开发</a></li>
                                <li class="flyout-item"><a href="${siteHref("categories/music/")}">音乐</a></li>
                                <li class="flyout-item"><a href="${siteHref("categories/notes/")}">学习笔记</a></li>
                            </ul>
                        </section>
                        <section class="submenu-group">
                            <h2 class="submenu-title flyout-item">快速链接</h2>
                            <ul class="submenu-list">
                                <li class="flyout-item"><a href="${siteHref("categories/")}">分类索引</a></li>
                                <li class="flyout-item"><a href="${siteHref("tags/")}">标签索引</a></li>
                            </ul>
                        </section>
                    </div></div>
                </div>
            </li>

            <li class="navigation-item has-submenu" data-submenu-item data-submenu-label="Repositories 目录">
                <button class="navigation-link submenu-trigger" type="button" aria-expanded="false"
                        aria-haspopup="true" aria-controls="submenu-repositories" data-submenu-trigger>
                    Repositories
                </button>
                <div class="submenu" id="submenu-repositories" data-submenu>
                    <div class="submenu-scroll"><div class="submenu-content">
                        <section class="submenu-group submenu-group-elevated">
                            <h2 class="submenu-title flyout-item">精选项目</h2>
                            <ul class="submenu-list submenu-list-elevated">
                                <li class="flyout-item"><a href="${siteHref("repositories/")}">查看全部项目</a></li>
                                <li class="flyout-item"><a href="${siteHref("repositories/website/")}">个人网站</a></li>
                                <li class="flyout-item"><a href="${siteHref("repositories/labs/")}">实验作品</a></li>
                            </ul>
                        </section>
                        <section class="submenu-group">
                            <h2 class="submenu-title flyout-item">技术分类</h2>
                            <ul class="submenu-list">
                                <li class="flyout-item"><a href="${siteHref("repositories/#html-css")}">HTML 与 CSS</a></li>
                                <li class="flyout-item"><a href="${siteHref("repositories/#javascript")}">JavaScript</a></li>
                                <li class="flyout-item"><a href="${siteHref("repositories/#python")}">Python</a></li>
                            </ul>
                        </section>
                        <section class="submenu-group">
                            <h2 class="submenu-title flyout-item">更多</h2>
                            <ul class="submenu-list">
                                <li class="flyout-item"><a href="https://github.com/Caerulues" rel="noreferrer">GitHub</a></li>
                                <li class="flyout-item"><a href="${siteHref("about/#projects")}">项目说明</a></li>
                            </ul>
                        </section>
                    </div></div>
                </div>
            </li>

            <li class="navigation-item"><a class="navigation-link" href="${siteHref("about/")}">About</a></li>
        </ul>

        <button class="menu-toggle" type="button" aria-label="打开导航菜单" aria-expanded="false"
                aria-controls="primary-navigation" data-menu-toggle>
            <span class="menu-toggle-line menu-toggle-line-top" aria-hidden="true"></span>
            <span class="menu-toggle-line menu-toggle-line-bottom" aria-hidden="true"></span>
        </button>
    </nav>
</header>
<div class="navigation-curtain" data-navigation-curtain aria-hidden="true"></div>`;

export function mountSiteHeader() {
    const slot = document.querySelector("[data-site-header-slot]");

    if (slot) {
        slot.outerHTML = headerMarkup;
    }
}
