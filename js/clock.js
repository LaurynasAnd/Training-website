function clock (selector) {
    if (typeof selector !== 'string' ||
    selector.length < 1) {
        return console.error('ERROR: input correct selector');
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return console.error('ERROR: selector does not exist');
    }
    
    const countDown = setInterval(function(){
        const finalDate = new Date('2021-01-01 00:00:00').getTime();
        const now = new Date();
        const timeUntil = finalDate - now;
        const   secs = 1000,
                mins = 1000 * 60,
                hrs = 1000 * 60 * 60,
                ds = 1000 * 60 * 60 * 24;
        const   days = Math.floor(timeUntil / ds),
                hours = Math.trunc((timeUntil % ds) / hrs),
                minutes = Math.floor((timeUntil % hrs) / mins),
                seconds = Math.floor((timeUntil % mins) / secs);
        const value = [days, hours, minutes, seconds];
        const label = ['days', 'hours', 'minutes', 'seconds'];
        let HTML = '';
        for (let i = 0; i < 4; i++) {
            HTML += `<div class="time">
                    <div class="value">${value[i]}</div>
                    <div class="label">${label[i]}</div>
                    </div>`;
        }
        DOM.innerHTML = HTML;
    }, 1000);
}

export default clock;