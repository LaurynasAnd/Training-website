function renderProgressBars (config) {
    // object destructurisation
    const {selector, selectorPosition='beforeEnd'} = config;
    let {data} = config;
    // data validation
    if (typeof selector !== 'string' ||
        selector.length < 1) {
            return console.error('ERROR: have to pass non-empty string as a selector value');
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return console.error('ERROR: selector does not exist');
    }
    if (typeof data !== 'object') {
        return console.error('ERROR: data has to be an object type');
    }
    if (!Array.isArray(data)) {
        data = [data];
    }
    // logic
    if (selectorPosition === 'beforeEnd' ||
        selectorPosition === 'afterEnd' ||
        selectorPosition === 'beforeStart' ||
        selectorPosition === 'afterStart' ) {
            let HTML = '';
            for (let i = 0; i < data.length; i++) {
                HTML += `<div class="progress-bar">
                            <div class="top">
                                <div class="label">${data[i].label}</div>
                                <div class="value">${data[i].value}%</div>
                            </div>
                            <div class="bar">
                                <div class="fill" style="width: ${data[i].value}%;"></div>
                            </div>
                        </div>`;
            }
            DOM.insertAdjacentHTML(selectorPosition, HTML);
        } else {
            
            return console.error('ERROR: bad selector position');
    }
   
}

export default renderProgressBars;