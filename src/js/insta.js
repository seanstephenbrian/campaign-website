const sendToInsta = () => {
    const newWindow = window.open('https://www.instagram.com/johnmartind65/', '_blank', 'noopener');
    if (newWindow) {
        newWindow.opener = null;
    }
}

export default sendToInsta;