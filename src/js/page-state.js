const updatePageState = (page, clickedBack) => {
    const url = new URL(window.location);
    // update the search params:
            // const params = new URLSearchParams(location.search);
            // params.set('pg', page);
    url.searchParams.set('pg', page);
    console.log(url.searchParams.get('pg'));
    // if the user DID NOT click back, push the new URL to the browser history stack:
    if (clickedBack !== true) {
        console.log('did not click back');
        window.history.pushState({}, '', url);
    } else if (clickedBack === undefined) {
        console.log('clicked back');
        // if the user DID click back, replace the history state with the new (previously visited) URL:
        // window.history.replaceState({}, '', url);
    }
}

export default updatePageState;