import renderHome from "./home";
import renderAbout from "./about";
import { renderGetInvolved } from "./get-involved";
import renderIssues from "./issues";
import renderVoting from "./voting";
import renderContact from "./contact";
import renderSupporters from "./supporters";

const checkForParams = (clickedBack) => {
    const params = new URLSearchParams(location.search);
    const page = params.get('pg');
    if (page === 'home') {
        renderHome(clickedBack);
    } else if (page === 'about') {
        renderAbout(clickedBack);
    } else if (page === 'get-involved') {
        renderGetInvolved(clickedBack);
    } else if (page === 'issues') {
        renderIssues(clickedBack);
    } else if (page === 'voting') {
        renderVoting(clickedBack);
    } else if (page === 'contact') {
        renderContact(clickedBack);
    } else if (page === 'supporters') {
        renderSupporters(clickedBack);
    } else {
        renderHome();
    }
}

export default checkForParams;