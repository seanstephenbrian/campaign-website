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
        "Angela Blaising",
        "Sydney Blattner",
        "Amy Bolinder",
        "Mike & Stephanie Boll",
        "Mary Bradford",
        "Mark W Brokowski",
        "Hon. Candance Chow",
        "Marion & Tom Clemens",
        "Zach Cohen",
        "Angelique Cullen-Ketzback",
        "Laura Dell & Scott Blickenstaff",
        "Timothy Demas",
        "Dana Dodzik",
        "Sharon Doyle",
        "Barry Doyle",
        "Sunil D’Souza",
        "Scott & Diane Dugan",
        "Alex Elliott",
        "Eric Estela",
        "Jean Fargo",
        "Jean & Tony Ferrone",
        "Mary & Paul Finnegan",
        "Roger Goldberg",
        "Charlotte Grill",
        "Hon. Steve Hagerty",
        "Kevin & Rachel Hanrahan",
        "Kathy & Jim Hardgrove",
        "Barb Hiller",
        "Jane Corey Holt",
        "TJ Houren",
        "Kristin Huzar",
        "Simon Jackson",
        "Evan Jacover",
        "Alex & Lauren Janus",
        "Myra Janus",
        "Dan G. Javor",
        "Matt C Jenson",
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
        "Craig & April Likhite",
        "Alison Loeppert & Edward Zwirner",
        "Kevin D. Lubawski",
        "Hon. Margaret Lurie & Paul Lurie",
        "Terri Lydon",
        "Michal Maimaran",
        "Sarah & Kevin Malia",
        "Nicole Jacob Marks & Perry Marks",
        "James Martin",
        "Margarita Matlis",
        "Carolyn Mattox",
        "Mark McCarville",
        "Evelyn McGowan",
        "Cecile McHugh",
        "Peter Miller",
        "Kim Mines",
        "Kate Monte",
        "Jill Zordan & Eddie Moulds",
        "Carol Mullins",
        "Michael Murawczyk",
        "Kerry Murphy",
        "Elena Nocera",
        "Martha & Nicholas O’Carroll",
        "Carrie O’Connell",
        "Marjory Oliva",
        "Stuart & Sarah Opdycke",
        "Catherine Palin",
        "Prabha Parameswaran",
        "Martha Pascal",
        "Cindy Paulauskas",
        "Greg & Nicki Pearson",
        "Benjamin Perry",
        "Allyn Rawling",
        "Robert Richmond",
        "Julie & Eric Rosenberg",
        "Dianne Rucinski",
        "Hon. Richard Rykhus & Carlos Briones",
        "Kim Sagami",
        "Mary Jo Schmitz",
        "Susan Sevcik",
        "Lindsay Shea",
        "Hon. Sharon Sheehan & Jeff Singleton",
        "Linda Stevens",
        "Michael Simon",
        "Tom & Lisa Stanton",
        "Spencer Stern",
        "Hon. Larry Suffredin",
        "Hon. Thomas M. Suffredin",
        "Hon. Liz Tisdahl",
        "Richard Weiland",
        "William Wesenberg",
        "Randy & Emily Wexler",
        "Ray & Mary Anne Wexler",
        "Hon. Cheryl Wollin",
        "Freddie Wolner",
        "Jim Young",
        "Rosalie Ziomek",
        "Jill Zordan & Eddie Moulds"
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