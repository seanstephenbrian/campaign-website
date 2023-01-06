const sendToDonate = () => {
    const newWindow = window.open('https://swipesimple.com/links/lnk_db09bcc1', '_blank', 'noopener');
    newWindow.opener = null;
}

export default sendToDonate;