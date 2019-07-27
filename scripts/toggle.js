Element.prototype.matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

getTarget = (source, selector) => {
	while (source && source.matches) {
		if ( source.matches(selector) ) {
			return source;
		}
		source = source.parentNode;
	}
	return null;
}

document.addEventListener('click', event => {
	if ( getTarget(event.target, '.toggle') ) {
		const body = document.getElementsByTagName("body")[0];
		if (body.className == 'open') {
			body.className = '';
		}
		else {
			body.className = 'open';
		}
	}
}, false);

(
	() => {
		const fixedHeader = document.createElement("div");
		fixedHeader.className = 'fixed';
		fixedHeader.appendChild(document.querySelector("header").cloneNode(true));
		document.querySelector("body").appendChild(fixedHeader);
	}
)();

/*
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

*/