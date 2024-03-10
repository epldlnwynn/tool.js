# tool.js

>tool.js is a tool class that extends many commonly used functions.

---

## Installation

```shell
npm i tool-extend -S

# or 

yarn add tool-extend


# install types

npm i @types/tool-extend -D

# or

yarn add @types/tool-extend -D


```


## Usage

```typescript

// file app.js
import "tool-extend"

```

### Window
```typescript
    
    console.log('is function', isFunction(() => {}))
    
    console.log('is number', isNumber(11))
    
    console.log('is array', isArray([1]))

    console.log('uuid', uuid("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"))

    // load javascript files
    loadJS("javascript file url.", e => {
        console.log('complete')
    })
    
    // load css files, delay 100
    loadCss(["css file url"], 100, e => {
        console.log('complete')
    })

```

### Location
```typescript

    const name = location.query('name')
    console.log('name', name)
    
    const age = location.query('age', 18)
    console.log('age', age)

```

### Object
```typescript

    const data = {name: 'zhangsan', age: 22}
    console.log(data.toJSONString())

```

### String

```typescript
    const base64 = "123456"
    console.log('to base64', base64.base64())


    const {R,G,B,A} = "#ff5566".colorRgba()
    console.log('to rgba', R, G, B, A)


    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".uuid()
    console.log('uuid ',uuid)


    console.log('string to number', "12.5".toNumber())


    const data = '{"name": "zhangsan", "age": 12.5}'.toJSON()
    console.log('name', data.name, "age", data.age)


    console.log("<div>my name: {name}, age: {age}</div>".format(data))

    
    console.log("1234567890".ellipsis(3))
    console.log("1234567890".ellipsis(3, "~~~"))
    console.log(uuid.ellipsis(10, "...", "right"))

```

### Number
```typescript
    const time = new Date().getTime()

    console.log('current time', time.toDate())
```

### Date
```typescript
    console.log('date format', Date.FORMAT_DATE)
    console.log('time format', Date.FORMAT_TIME)
    console.log('date full format', Date.FORMAT_DATE_TIME)
    console.log('time zone  format', Date.FORMAT_DATE_TIMEZ)
    console.log('ios date format', Date.FORMAT_IOS_DATE_TIME)


    console.log('unix time', Date.unixTime())
    
    console.log('new date', Date.newDate())

    console.log('new date', Date.newDate(true))

    const date = Date.newDate()
    console.log('format date', date.format(Date.FORMAT_DATE_TIME))
    console.log('format date', date.format(Date.FORMAT_DATE_TIMEZ))


```
