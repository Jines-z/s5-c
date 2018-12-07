import { addClass, removeClass, hasClass } from '../Utils'

const Toast = {
    $body: document.body,
    $wrap: document.createElement('div'),
    timer: null,
    duration: 3000,
    template(text) {
        return `
        <span class="hc_toast_text">${text}</span>
        `
    },
    show(text, duration) {
        const _this = this
        if (!hasClass(_this.$wrap, 'hc_toast')) {
            if (duration) {
                _this.duration = duration
            }
            addClass(_this.$wrap, 'hc_toast')
            _this.$wrap.innerHTML = _this.template(text)
            _this.$body.appendChild(_this.$wrap)
            addClass(_this.$wrap, 'hc_enter')
            _this.timer = setTimeout(() => {
                _this.hide()
            }, _this.duration)
        }
    },
    hide() {
        const _this = this
        if (hasClass(_this.$wrap, 'hc_toast')) {
            addClass(_this.$wrap, 'hc_leave')
            removeClass(_this.$wrap, 'hc_enter')
            _this.$wrap.addEventListener('webkitAnimationEnd', removeToast, false)
            clearTimeout(_this.timer)
        }
    },
    remove(event) {
        removeClass(event.target, 'hc_leave')
        document.body.removeChild(event.target)
        removeClass(event.target, 'hc_toast')
    }
}

const removeToast = event => {
    if (hasClass(event.target, 'hc_toast')) {
        removeClass(event.target, 'hc_leave')
        document.body.removeChild(event.target)
        removeClass(event.target, 'hc_toast')
        event.target.removeEventListener('webkitAnimationEnd', removeToast, false)
    }
}

export default Toast
