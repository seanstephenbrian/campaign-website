import menuHtml from '../html/menu.html';
import renderHome from './home';
import renderAbout from './about';
import renderIssues from './issues';
import renderContribute from './contribute';
import renderVoting from './voting';

const renderMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('mobile-menu');
    menu.innerHTML = menuHtml;
    document.body.appendChild(menu);

    // add click listeners to the various page links:
    const homeLink = document.querySelector('.home-link');
    homeLink.addEventListener('click', renderHome);

    const aboutLink = document.querySelector('.about-link');
    aboutLink.addEventListener('click', renderAbout);

    const issuesLink = document.querySelector('.issues-link');
    issuesLink.addEventListener('click', renderIssues);

    const contributeLink = document.querySelector('.contribute-link');
    contributeLink.addEventListener('click', renderContribute);

    const votingLink = document.querySelector('.voting-link');
    votingLink.addEventListener('click', renderVoting);
}

export default renderMenu;