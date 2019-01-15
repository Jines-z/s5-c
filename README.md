# HC-agg

### Toast
```Javascript
import { Toast } from 'hc-agg'

Toast.show('I am toast', 3000)
```

| 参数 | 说明 | 类型 | 必须 | 默认值 |
| :-- | :-- | :-- | :-- | :-- |
| text | 展示的文字 | String | 是 | - |
| duration | 展示的时长 | 毫秒(ms) | 否 | 3000 |

### Loading
```Javascript
import { Loading } from 'hc-agg'

Loading.show('LOADING ...')
Loading.hide()
```

| 参数 | 说明 | 类型 | 必须 | 默认值 |
| :-- | :-- | :-- | :-- | :-- |
| text | 展示的文字 | String | 否 | - |

### Modal
```Javascript
import { Modal } from 'hc-agg'

// 自定义Modal，参数为jsNode
Modal.show(``)

// 场景宣传框
Modal.scene({
    title: '查看历史',
    description: '扫码查看历史信息',
    image: 'https://www.baidu.com/img/baidu_jgylogo3.gif'
})

Modal.hide()
```

| 参数 | 说明 | 类型 | 必须 | 默认值 |
| :-- | :-- | :-- | :-- | :-- |
| title | 标题 | String | 否 | - |
| description | 描述信息 | String | 否 | - |
| image | 图片地址 | String | 否 | - |

### Dialog
```Javascript
import { Dialog } from 'hc-agg'
```
```Javascript
Dialog.alert({
    title: '标题',
    description: '这是一段描述',
    buttonColor: '#ff4d4d',
    buttonText: '我知道了'
}).then(() => {
    // on close
})
```
| 参数 | 说明 | 类型 | 必须 | 默认值 |
| :-- | :-- | :-- | :-- | :-- |
| title | 标题 | String | 否 | ‘提示’ |
| description | 描述信息 | String | 否 | - |
| buttonColor | 按钮颜色 | String | 否 | - |
| buttonText | 按钮文字 | String | 否 | ‘确定’ |
```Javascript
Dialog.confirm({
    title: '标题',
    description: '这是一段描述',
    confirmColor: '#ff4d4d',
    confirmText: '确定',
    cancelColor: '#aaaba3',
    cancelText: '取消'
}).then(() => {
    // on confirm
}).catch(() => {
    // on cancel
})
```
| 参数 | 说明 | 类型 | 必须 | 默认值 |
| :-- | :-- | :-- | :-- | :-- |
| title | 标题 | String | 否 | ‘提示’ |
| description | 描述信息 | String | 否 | - |
| confirmColor | 确认按钮颜色 | String | 否 | ‘#ff4d4d’ |
| confirmText | 确认按钮文字 | String | 否 | ‘确定’ |
| cancelColor | 取消按钮颜色 | String | 否 | ‘#000’ |
| cancelText | 取消按钮吻戏 | String | 否 | ‘取消’ |

### Http
```Javascript
import { Http } from 'hc-agg'

const options = {
    baseURL: 'https://api.yuecard.net',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    timeout: 100000,
    loading: false,
    errorToast: true,
    withCredentials: false,
    interceptors: true
}

const http = new Http(options)
```

| 参数 | 说明 | 类型 | 必须 | 默认值 |
| :-- | :-- | :-- | :-- | :-- |
| baseURL | 请求的基地址 | String | 否 | - |
| timeout | 超时时间 | Number | 否 | 20000 |
| loading | 加载提示 | Boolean | 否 | true |
| errorToast | 异常捕获展示 | Boolean | 否 | true |
| contentType | 内容类型 | String | 否 | application/json; charset=UTF-8 |
| interceptors | 拦截器，需要获取xhr时关闭 | Boolean | 否 | true |
| withCredentials | 跨域时是否发送cookie | Boolean | 否 | false |

### Utils
```Javascript
import { Utils } from 'hc-agg'
```

| 方法 | 说明 |
| :-- | :-- |
| hasClass(el, cName) | 判断是否含有某个class |
| addClass(el, cName) | 添加class |
| removeClass(el, cName) | 移除class |
| getLength(str) | 获取字符串真实长度 |
| priceToFix(price) | 分-->元，保留两位小数 |
| formatTime(time) | 格式化时间戳 |

**用例：**
```Javascript
const $root = document.getElementById('root')
Utils.addClass($root, 'hide')
Utils.removeClass($root, 'hide')
Utils.removeClass($root, '') // 删除该节点所有class

const time = new Date().getTime()
Utils.formatTime(time) // 2018-09-19 14:50
```

### Cookie
```Javascript
import { Cookie } from 'hc-agg'
```

| 方法 | 说明 |
| :-- | :-- |
| set | 创建cookie |
| get | 读取cookie |
| remove | 删除cookie |

**用例：**
```
创建Cookie：--------------------
Cookie.set('name', 'value')

有效期：7天
Cookie.set('name', 'value', { expires: 7 })

有效期：7天   路径：当前页
Cookie.set('name', 'value', { expires: 7, path: '' })

读取Cookie：--------------------
Cookie.get('name')

读取所有Cookie：
Cookie.get()

删除Cookie：--------------------
Cookie.remove('name', { path: '' })
```
[更多Cookie用法](https://github.com/js-cookie/js-cookie)

### Clipboard
```html
<span id="Clipboard" data-clipboard-text="复制到粘贴板">复制到粘贴板</span>
```
```Javascript
import { Clipboard } from 'hc-agg'

const $span = document.getElementById('Clipboard')
const c = new Clipboard($span) // 点击span后即可复制到粘贴板
```


