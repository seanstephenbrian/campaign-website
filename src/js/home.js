import homeMain from '../html/home.html';
import updateCurrentPage from './current-page';
import { closeMenu } from "./menu";
import renderAbout from './about';
import renderIssues from './issues';
import { renderGetInvolved } from './get-involved';
import renderVoting from './voting';

const renderHome = (clickedBack) => {
    updateCurrentPage('home', clickedBack);
    closeMenu();
    
    const prevMain = document.querySelector('main');
    const main = document.createElement('main');
    prevMain.after(main);
    prevMain.remove();
    main.innerHTML = homeMain;
    main.className = 'home-main';

    // add click listeners to the homepage buttons:
    const aboutButton = document.querySelector('.about-button');
    aboutButton.addEventListener('click', () => {
        renderAbout();
        window.scrollTo(0, 0);
    });

    const issuesButton = document.querySelector('.issues-button');
    issuesButton.addEventListener('click', () => {
        renderIssues();
        window.scrollTo(0, 0);
    });

    const prioritiesButton = document.querySelector('.priorities-button');
    prioritiesButton.addEventListener('click', () => {
        renderGetInvolved();
        window.scrollTo(0, 0);
    });

    const votingButton = document.querySelector('.voting-button');
    votingButton.addEventListener('click', () => {
        renderVoting();
        window.scrollTo(0, 0);
    });
}

export default renderHome;