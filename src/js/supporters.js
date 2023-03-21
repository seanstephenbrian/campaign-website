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
        "Marsha Barnett",
        "Kristen & Ethan Baron",
        "Svetlana Bekman",
        "Ira & Debrah Berger",
        "Michael Bess",
        "Trisha Binkley",
        "Angela Blaising",
        "Sydney Blattner",
        "Amy Bolinder",
        "Mike & Stephanie Boll",
        "Mary Bradford",
        "Zach Cohen",
        "Angelique Cullen-Ketzback",
        "Laura Dell & Scott Blickenstaff",
        "Timothy Demas",
        "Dana Dodzik",
        "Sharon Doyle",
        "Barry Doyle",
        "Sunil D’Souza",
        "Scott & Diane Dugan",
        "Jean Fargo",
        "Jean & Tony Ferrone",
        "Mary & Paul Finnegan",
        "Roger Goldberg",
        "Charlotte Grill",
        "Hon. Steve Hagerty",
        "Kathy & Jim Hardgrove",
        "Barb Hiller",
        "TJ Houren",
        "Kristin Huzar",
        "Simon Jackson",
        "Evan Jacover",
        "Alex & Lauren Janus",
        "Myra Janus",
        "Dan G. Javor",
        "Ann & Tom Johnson",
        "Brian Johnson",
        "Don Johnson",
        "Peter & Jessica Kaplan",
        "Susan B. Kaplan",
        "Lori & Peter Keenan",
        "Patrick Kendall",
        "Kristine Kramer",
        "Eric Krzysyofiak",
        "Cissy Lacks",
        "Pam Lagger",
        "Mike & Carolyn Laughlin",
        "Mike & Marie Levy",
        "Susan & Roland Lieber",
        "Kevin D. Lubawski",
        "Hon. Margaret Lurie & Paul Lurie",
        "Terri Lydon",
        "Sarah & Kevin Malia",
        "Nicole Marks",
        "James Martin",
        "Cecile McHugh",
        "Kate Monte",
        "Jill Zordan & Eddie Moulds",
        "Carol Mullins",
        "Michael Murawczyk",
        "Kerry Murphy",
        "Elena Nocera",
        "Carrie O’Connell",
        "Cindy Paulauskas",
        "Greg & Nicki Pearson",
        "Julie & Eric Rosenberg",
        "Kim Sagami",
        "Mary Jo Schmitz",
        "Susan Sevcik",
        "Hon. Sharon Sheehan & Jeff Singleton",
        "Michael Simon",
        "Tom & Lisa Stanton",
        "Spencer Stern",
        "Hon. Thomas M. Suffredin",
        "Hon. Liz Tisdahl",
        "William Wesenberg",
        "Randy & Emily Wexler",
        "Ray & Mary Anne Wexler",
        "Hon. Cheryl Wollin"
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