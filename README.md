# s5-c

### Toast
```Javascript
import { Toast } from 's5-c'

Toast.show('I am toast', 3000)
```

| 参数 | 说明 | 类型 | 必须 | 默认值 |
| :-- | :-- | :-- | :-- | :-- |
| text | 展示的文字 | String | 是 | - |
| duration | 展示的时长 | 毫秒(ms) | 否 | 3000 |

### Loading
```Javascript
import { Loading } from 's5-c'

Loading.show('LOADING ...')
Loading.hide()
```

| 参数 | 说明 | 类型 | 必须 | 默认值 |
| :-- | :-- | :-- | :-- | :-- |
| text | 展示的文字 | String | 否 | - |

### Http
```Javascript
import { Http } from 's5-c'

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
import { Utils } from 's5-c'
```

| 方法 | 说明 |
| :-- | :-- |
| hasClass(el, cName) | 判断是否含有某个class |
| addClass(el, cName) | 添加class |
| removeClass(el, cName) | 移除class |
| getLength(str) | 获取字符串真实长度 |
| priceToFix(price) | 分-->元，保留两位小数 |
| formatTime(time) | 格式化时间戳 |
| getSearchParam(name) | 获取？后的参数(search) |
| getFileNameWithoutExt(fileName) | 获取不包含扩展名的文件名 |

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
import { Cookie } from 's5-c'
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
import { Clipboard } from 's5-c'

const $span = document.getElementById('Clipboard')
const c = new Clipboard($span) // 点击span后即可复制到粘贴板
```


