import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import supportersMain from '../html/supporters.html';

const renderSupporters = (clickedBack) => {
    updateCurrentPage('supporters', clickedBack);
    closeMenu();
    
    const prevMain = document.querySelector('main');
    const main = document.createElement('main');
    prevMain.after(main);
    prevMain.remove();
    main.innerHTML = supportersMain;
    main.className = 'supporters-main';

    // array of current supporters:
    const currentSupporters = [
        "Kristen & Ethan Baron",
        "Svetlana Bekman",
        "Ira & Debrah Berger",
        "Michael Bess",
        "Angela Blaising",
        "Sydney Blattner",
        "Amy Bolinder",
        "Mike & Stephanie Boll",
        "Zach Cohen",
        "Angelique Cullen-Ketzback",
        "Timothy Demas ",
        "Dana Dodzik",
        "Sharon Doyle",
        "Barry Doyle",
        "Sunil D’Souza",
        "Scott & Diane Dugan",
        "Mary Finnegan",
        "Roger Goldberg",
        "Charlotte Grill",
        "Kristin Kutzner Huzar",
        "Evan Jacover",
        "Alex & Lauren Janus",
        "Dan G. Javor",
        "Don Johnson",
        "Peter & Jessica Kaplan",
        "Susan B. Kaplan",
        "Lori & Peter Keenan",
        "Patrick Kendall",
        "Eric Krzysyofiak",
        "Pam Lagger",
        "Mike & Marie Levy",
        "Kevin D. Lubawski",
        "Hon. Margaret Lurie & Paul Lurie",
        "Terri Lydon",
        "Sarah & Kevin Malia",
        "Nicole Marks",
        "James Martin",
        "Cecile McHugh",
        "Kate Monte",
        "Jill Zordan & Eddie Moulds",
        "Michael Murawczyk",
        "Elena Nocera",
        "Carrie O’Connell",
        "Cindy Paulauskas",
        "Greg & Nicki Pearson",
        "Julie & Eric Rosenberg",
        "Kim Sagami",
        "Susan Sevcik",
        "Michael Simon",
        "Tom & Lisa Stanton",
        "Spencer Stern",
        "Hon. Thomas M. Suffredin",
        "Hon. Liz Tisdahl",
        "William Wesenberg",
        "Ray & Mary Anne Wexler"
    ];

    // method of rendering this array to the page:
    const listContainer = document.querySelector('.supporters-list');
    currentSupporters.forEach(supporter => {
        const newSupporter = document.createElement('p');
        newSupporter.classList.add('supporter');
        newSupporter.textContent = supporter;
        listContainer.appendChild(newSupporter);
    });
}

export default renderSupporters;