const Utils = {
    hasClass(el, cName) {
        return !!el.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'))
    },
    addClass(el, cName) {
        el.className += ' ' + cName
    },
    removeClass(el, cName) {
        if (cName === '') {
            el.className = ''
        } else {
            el.className = el.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ')
        }
    },
    getLength(str) {
        let realLength = 0
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i)
            if (charCode >= 0 && charCode <= 128) {
                realLength += 1
            } else {
                realLength += 2
            }
        }
        return realLength
    },
    priceToFix(price) {
        return (price / 100).toFixed(2)
    },
    formatTime(time) {
        const date = new Date(time)
        const fillZero = num => {
            return num < 10 ? `0${num}` : num
        }
        const [
            year,
            month,
            day,
            hour,
            minute
        ] = [
            date.getFullYear(),
            fillZero(date.getMonth() + 1),
            fillZero(date.getDate()),
            fillZero(date.getHours()),
            fillZero(date.getMinutes())
        ]
        return `${year}-${month}-${day} ${hour}:${minute}`
    },
    display(ar) {
        return ar ? 'inline-block' : 'none'
    }
}

module.exports = Utils
