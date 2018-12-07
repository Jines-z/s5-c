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
    getSearchParam(name) {
        const search = '?' + window.location.href.split('?')[1]
        const pattern = new RegExp('[?&]' + name + '=([^&]+)', 'g')
        const matcher = pattern.exec(search)
        let items = null
        if (matcher != null) {
            try {
                items = decodeURIComponent(decodeURIComponent(matcher[1]))
            } catch (e) {
                try {
                    items = decodeURIComponent(matcher[1])
                } catch (e) {
                    items = matcher[1]
                }
            }
        }
        return items
    },
    getFileNameWithoutExt(fileName) {
        const index = fileName.lastIndexOf('.')
        const ext = fileName.substring(index, fileName.length)
        return fileName.replace(ext, '')
    }
}

module.exports = Utils
