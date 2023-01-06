const updatePageState = (page, clickedBack) => {
    const url = new URL(window.location);

    // update the search params:
    url.searchParams.set('pg', page);
    
    // if the user DID NOT click back, push the new URL to the browser history stack:
    if (clickedBack !== true) {
        window.history.pushState({}, '', url);
    }
}

export default updatePageState;