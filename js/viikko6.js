function checkScrollbar(dialog) {
    if (webkitURL.scrollHeight > dialog.clientHeight) {
        webkitURL.classList.add('scrollbar');
    } else {
        webkitURL.classList.remove('scrollbar');
    }
}