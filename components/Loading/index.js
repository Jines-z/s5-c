import { addClass, removeClass, hasClass } from '../Utils'

const Loading = {
    $wrap: document.createElement('div'),
    template(text) {
        return `
        <div class="hc_loading_spinner">
            <svg class="hc_loading_circular" viewBox="25 25 50 50">
                <circle class="hc_loading_cir" cx="50" cy="50" r="20" fill="none"/>
            </svg>
            <span style="display: ${text ? 'block' : 'none'}" class="hc_loading_text">
                ${text}
            </span>
        </div>
        `
    },
    show(text) {
        const _this = this
        if (!hasClass(_this.$wrap, 'hc_loading')) {
            addClass(_this.$wrap, 'hc_loading')
            _this.$wrap.innerHTML = _this.template(text)
            document.body.appendChild(_this.$wrap)
            addClass(_this.$wrap, 'hc_enter')
        }
    },
    hide() {
        const _this = this
        if (hasClass(_this.$wrap, 'hc_loading')) {
            removeClass(_this.$wrap, 'hc_enter')
            addClass(_this.$wrap, 'hc_leave')
            _this.$wrap.addEventListener('webkitAnimationEnd', removeLoading, false)
        }
    }
}

const removeLoading = event => {
    if (hasClass(event.target, 'hc_loading')) {
        removeClass(event.target, 'hc_leave')
        document.body.removeChild(event.target)
        removeClass(event.target, 'hc_loading')
        event.target.removeEventListener('webkitAnimationEnd', removeLoading, false)
    }
}

export default Loading
