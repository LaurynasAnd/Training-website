function renderSocialIcons(selector, data) {
    if (typeof selector !== 'string' ||
        selector.length < 1) {
            return console.error('ERROR: input correct selector');
    }
    if (typeof data !== 'object' ||
        data.length === 0) {
            return console.error('ERROR: social icons data is empty');
    }
    if (!Array.isArray(data)) {
        data = [data];
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return console.error('ERROR: selector does not exist');
    }
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        HTML += `<a class="fa fa-${data[i].icon}" href="${data[i].url}" title="${data[i].icon}" aria-hidden="true"></a>`
    }
    return DOM.innerHTML = HTML;

}

export default renderSocialIcons;