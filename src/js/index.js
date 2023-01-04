import '../style.css';
import htmlBody from '../html/index.html';

(function renderBody() {
    const body = document.querySelector('body');
    body.innerHTML = htmlBody;
})();

(function fillFooter() {
    const footer = document.querySelector('footer');
    const date = new Date();
    footer.innerHTML = `
        <p>© ${date.getFullYear()} John Martin for District 65 Board of Education</p>
        <p>All rights reserved.</p>
    `;
})();