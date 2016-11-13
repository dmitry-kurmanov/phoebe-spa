function getElementPosition(obj) {
    let top = 0;
    if (obj.offsetParent) {
        do {
            top += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [ top ];
    }
}

export function scrollTo(elementId) {
    setTimeout(
        () => {
            try {elementId && window.scroll(0, getElementPosition(document.getElementById(elementId)))} catch(e){}
        }, 0
    );
}