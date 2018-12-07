import Fly from 'flyio'
import toast from '../Toast'
import loading from '../Loading'

const defaultOptions = {
    baseURL: '',
    timeout: 20000,
    contentType: 'application/json; charset=UTF-8',
    loading: true,
    withCredentials: false,
    errorToast: true,
    interceptors: true
}

export default class Http {
    constructor(options) {
        this.options = {
            ...defaultOptions,
            ...options
        }
        this.loadingNum = 0
        this.http = Fly
        this.init()
        this.interceptors()
        if (!this.options.interceptors) {
            this.interceptorsNull()
        }
    }
    init() {
        const { baseURL, contentType, timeout, withCredentials } = this.options
        this.http.config = {
            ...this.http.config,
            timeout,
            baseURL,
            withCredentials,
            headers: {
                'content-type': contentType
            }
        }
    }
    get(url, data) {
        this.showLoading(true)
        return new Promise((resolve, reject) => {
            this.http.get(url, data)
                .then(res => {
                    this.showLoading(false)
                    resolve(res)
                })
                .catch(err => {
                    this.showLoading(false)
                    reject(err)
                })
        })
    }
    post(url, data) {
        this.showLoading(true)
        return new Promise((resolve, reject) => {
            this.http.post(url, data)
                .then(res => {
                    this.showLoading(false)
                    resolve(res)
                })
                .catch(err => {
                    this.showLoading(false)
                    reject(err)
                })
        })
    }
    request(url, data, config) {
        this.showLoading(true)
        return new Promise((resolve, reject) => {
            this.http.request(url, data, config)
                .then(res => {
                    this.showLoading(false)
                    resolve(res)
                })
                .catch(err => {
                    this.showLoading(false)
                    reject(err)
                })
        })
    }
    interceptors() {
        this.http.interceptors.response.use(
            response => response.data,
            err => {
                if (this.options.errorToast) {
                    toast.show(`${err.status} ${err.message}`)
                }
            }
        )
    }
    interceptorsNull() {
        this.http.interceptors.request.use(null)
        this.http.interceptors.response.use(null, null)
    }
    showLoading(isLoading) {
        if (this.options.loading) {
            if (isLoading) {
                this.loadingNum += 1
                loading.show()
            } else {
                this.loadingNum -= 1
                if (this.loadingNum < 0) {
                    this.loadingNum = 0
                }
                if (this.loadingNum == 0) {
                    loading.hide()
                }
            }
        }
    }
}
