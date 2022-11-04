window.onload = function() {
	const prefix = 'rrs';
	const iconCode = 'sg';
	const iconClass = `${prefix}-${iconCode}`;
	const iconClassPrefix = `${iconClass}-`;
	const iconSizeClass = `${prefix}-px`;
	const iconSizeClassPrefix = `${iconSizeClass}-`;
	const styledIcons = new Array<string>();
	const styledSizes = new Array<string>();

	let styleText = '';

	for (const element of document.getElementsByClassName(iconClass)) {
		for (const clazz of element.classList) {
			if (clazz.startsWith(iconClassPrefix)) {
				const icon = clazz.substring(iconClassPrefix.length);
				if (!styledIcons.includes(icon)) {
					styleText += `.${iconClassPrefix}${icon} { background-image: url('../icons/${iconCode}-${icon}.svg'); }\n`;
					styledIcons.push(icon);
				}
			} else if (clazz.startsWith(iconSizeClassPrefix)) {
				const size = clazz.substring(iconSizeClassPrefix.length);
				if (!styledSizes.includes(size)) {
					styleText += `.${iconSizeClassPrefix}${size} { min-width: ${size}px; min-height: ${size}px; }\n`;
					styledSizes.push(size);
				}
			}
		}
	}

	const style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode(styleText));
	document.getElementsByTagName('head')[0].appendChild(style);
};