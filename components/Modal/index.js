import { addClass, removeClass, hasClass, display } from '../Utils'

const Modal = {
    $wrap: document.createElement('div'),
    template(argu) {
        if (typeof argu === 'string') {
            return `
            <div class="hc_modal_wrap">
                <div class="hc_modal_close">
                    <span></span>
                    <span></span>
                </div>
                ${argu}
            </div>
            `
        } else {
            return `
            <div class="hc_modal_wrap">
                <div class="hc_modal_close">
                    <span></span>
                    <span></span>
                </div>
                <div class="hc_modal_title">${argu.title || '提示'}</div>
                <div class="hc_modal_description">${argu.description || '写点描述吧！'}</div>
                <img class="hc_modal_image" src="${argu.image}" style="display: ${display(argu.image)}" >
            </div>
            `
        }
    },
    bindClose() {
        const _this = this
        _this.$wrap.querySelector('.hc_modal_close').onclick = function() {
            _this.hide()
        }
    },
    show(node) {
        const _this = this
        if (!hasClass(_this.$wrap, 'hc_modal')) {
            addClass(_this.$wrap, 'hc_modal')
            _this.$wrap.innerHTML = _this.template(node)
            document.body.appendChild(_this.$wrap)
            addClass(_this.$wrap, 'hc_enter')
            addClass(_this.$wrap.querySelector('.hc_modal_wrap'), 'hc_scale_enter')
            _this.bindClose()
        }
    },
    scene(options) {
        const _this = this
        if (!hasClass(_this.$wrap, 'hc_modal')) {
            addClass(_this.$wrap, 'hc_modal')
            _this.$wrap.innerHTML = _this.template(options)
            document.body.appendChild(_this.$wrap)
            addClass(_this.$wrap, 'hc_enter')
            addClass(_this.$wrap.querySelector('.hc_modal_wrap'), 'hc_scale_enter')
            _this.bindClose()
        }
    },
    hide() {
        const _this = this
        if (hasClass(_this.$wrap, 'hc_modal')) {
            removeClass(_this.$wrap, 'hc_enter')
            addClass(_this.$wrap, 'hc_leave')
            removeClass(_this.$wrap.querySelector('.hc_modal_wrap'), 'hc_scale_enter')
            addClass(_this.$wrap.querySelector('.hc_modal_wrap'), 'hc_scale_leave')
            _this.$wrap.addEventListener('webkitAnimationEnd', removeModal, false)
        }
    }
}

const removeModal = event => {
    if (hasClass(event.target, 'hc_modal')) {
        removeClass(event.target, 'hc_leave')
        document.body.removeChild(event.target)
        removeClass(event.target, 'hc_modal')
        event.target.removeEventListener('webkitAnimationEnd', removeModal, false)
    }
}

export default Modal
