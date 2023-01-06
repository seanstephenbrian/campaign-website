import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import issuesMain from '../html/issues.html';

const renderIssues = () => {
    updateCurrentPage('issues');
    closeMenu();

    const main = document.querySelector('main');
    main.innerHTML = issuesMain;
    main.className = '';
    main.className = 'issues-main';

    // add click listeners to expand the view of the 3 main sections:
    const firstSection = document.querySelector('.first-issue-wrapper');
    firstSection.addEventListener('click', () => {
        // reveal the dropdown content:
        const firstSectionDropdown = document.querySelector('.first-issue-dropdown');
        firstSectionDropdown.classList.remove('hide');
        // remove the 'click here' text:
        const firstLearnMore = document.querySelector('.first-learn-more');
        firstLearnMore.remove();
    }, {once: true});

    const secondSection = document.querySelector('.second-issue-wrapper');
    secondSection.addEventListener('click', () => {
        // reveal the dropdown content:
        const secondSectionDropdown = document.querySelector('.second-issue-dropdown');
        secondSectionDropdown.classList.remove('hide');
        // remove the 'click here' text:
        const secondLearnMore = document.querySelector('.second-learn-more');
        secondLearnMore.remove();
    }, {once: true});

    const thirdSection = document.querySelector('.third-issue-wrapper');
    thirdSection.addEventListener('click', () => {
        // reveal the dropdown content:
        const thirdSectionDropdown = document.querySelector('.third-issue-dropdown');
        thirdSectionDropdown.classList.remove('hide');
        // remove the 'click here' text:
        const thirdLearnMore = document.querySelector('.third-learn-more');
        thirdLearnMore.remove();
    }, {once: true});
}

export default renderIssues;