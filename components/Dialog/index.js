import { addClass, removeClass, hasClass, display } from '../Utils'

const Dialog = {
    $wrap: document.createElement('div'),
    template(options) {
        return `
        <div class="hc_dialog_wrap">
            <div class="hc_dialog_content">
                <p class="hc_dialog_title">${options.title || '提示'}</p>
                <p class="hc_dialog_description" style="display: ${display(options.description)}">${options.description}</p>
            </div>
            <div class="hc_dialog_footer">
                <div class="footer_btn" style="color: ${options.buttonColor}">${options.buttonText || '确定'}</div>
            </div>
        </div>
        `
    },
    confirmTpl(options) {
        return `
        <div class="hc_dialog_wrap">
            <div class="hc_dialog_content">
                <p class="hc_dialog_title">${options.title || '提示'}</p>
                <p class="hc_dialog_description" style="display: ${display(options.description)}">${options.description}</p>
            </div>
            <div class="hc_dialog_footer">
                <div class="footer_cancel" style="color: ${options.cancelColor || '#000'}">${options.cancelText || '取消'}</div>
                <div class="footer_confirm" style="color: ${options.confirmColor || '#ff4d4d'}">${options.confirmText || '确定'}</div>
            </div>
        </div>
        `
    },
    bindClose() {
        const _this = this
        _this.$wrap.querySelector('.footer_btn').onclick = function() {
            _this.hide()
        }
    },
    alert(options) {
        const _this = this
        return new Promise((resolve, reject) => {
            if (!hasClass(_this.$wrap, 'hc_dialog')) {
                addClass(_this.$wrap, 'hc_dialog')
                _this.$wrap.innerHTML = _this.template(options)
                document.body.appendChild(_this.$wrap)
                addClass(_this.$wrap, 'hc_enter')
                addClass(_this.$wrap.querySelector('.hc_dialog_wrap'), 'hc_scale_enter')
                _this.$wrap.querySelector('.footer_btn').onclick = function() {
                    _this.hide()
                    resolve()
                }
            }
        })
    },
    confirm(options) {
        const _this = this
        return new Promise((resolve, reject) => {
            if (!hasClass(_this.$wrap, 'hc_dialog')) {
                addClass(_this.$wrap, 'hc_dialog')
                _this.$wrap.innerHTML = _this.confirmTpl(options)
                document.body.appendChild(_this.$wrap)
                addClass(_this.$wrap, 'hc_enter')
                addClass(_this.$wrap.querySelector('.hc_dialog_wrap'), 'hc_scale_enter')
                _this.$wrap.querySelector('.footer_confirm').onclick = function() {
                    _this.hide()
                    resolve()
                }
                _this.$wrap.querySelector('.footer_cancel').onclick = function() {
                    _this.hide()
                    reject()
                }
            }
        })
    },
    hide() {
        const _this = this
        if (hasClass(_this.$wrap, 'hc_dialog')) {
            removeClass(_this.$wrap, 'hc_enter')
            addClass(_this.$wrap, 'hc_leave')
            removeClass(_this.$wrap.querySelector('.hc_dialog_wrap'), 'hc_scale_enter')
            addClass(_this.$wrap.querySelector('.hc_dialog_wrap'), 'hc_scale_leave')
            _this.$wrap.addEventListener('webkitAnimationEnd', removeDialog, false)
        }
    }
}

const removeDialog = event => {
    if (hasClass(event.target, 'hc_dialog')) {
        removeClass(event.target, 'hc_leave')
        document.body.removeChild(event.target)
        removeClass(event.target, 'hc_dialog')
        event.target.removeEventListener('webkitAnimationEnd', removeDialog, false)
    }
}

export default Dialog
