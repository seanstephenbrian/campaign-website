import menuHtml from '../html/menu.html'

const renderMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = menuHtml;
    document.body.appendChild(menu);
}

export default renderMenu;