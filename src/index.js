/* eslint-disable */
import Http from '../lib/Http'
import Utils from '../lib/Utils'
import Clipboard from '../lib/Clipboard'
//
var data = {
    pageType: 6,
    version: '1.0.0',
    id: 71
}

const options = {
    baseURL: 'https://api.yuecard.net',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    timeout: 100000,
    loading: false,
    errorToast: true
}

const http = new Http(options)
http.get('/coiling-api/page/getPageConfigByPageType', data).then(res => {
    console.log(res)
})

var str = new Date()
Utils.formatTime(str.getTime())
console.log(Utils.formatTime(str.getTime()))
console.log(document.querySelector('.asd'))
var a = new Clipboard(document.querySelector('.asd'))

