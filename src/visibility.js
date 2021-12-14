var visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    visibilityChange = "webkitvisibilitychange";
}

export function onVisibilityChange(callback) {
	document.addEventListener(visibilityChange, callback);
}