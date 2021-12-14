function isPageHidden(){
    return document.hidden || document.msHidden || document.webkitHidden || document.mozHidden;
}


export function isElementVisible(element) {
    return !isPageHidden() && !!( element.offsetWidth || element.offsetHeight || element.getClientRects().length );
}