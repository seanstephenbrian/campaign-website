const sendToFacebook = () => {
    const newWindow = window.open('https://facebook.com/100088939831896/', '_blank', 'noopener');
    newWindow.opener = null;
}

export default sendToFacebook;
