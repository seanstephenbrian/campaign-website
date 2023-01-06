const updatePageState = (page) => {
    const url = new URL(window.location);
    // update the search params:
        // const params = new URLSearchParams(location.search);
        // params.set('pg', page);
    url.searchParams.set('pg', page);
    // push the new URL to the browser history:
    window.history.pushState({}, '', url);
}

export default updatePageState;