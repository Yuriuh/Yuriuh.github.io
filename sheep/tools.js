// 封装兼容性好的 addEvent 函数
function addEvent(elem, type, handle) {
    if(elem.addEventListener) {
        elem.addEventListener(type, handle, false)
    } else if(elem.attachEvent) {
        elem.attachEvent('on' + type, function() {
            handle.call(elem)
        })
    } else {
        elem['on' + type] = handle
    }
}

// 封装兼容性好的 removeEvent 函数
function removeEvent(element, type, handler){
    if (element.removeEventListener){
        element.removeEventListener(type, handler, false);
    } else if (element.detachEvent){
        element.detachEvent("on" + type, handler);
    } else {
        element["on" + type] = null;
    }
}

// 封装兼容性好的 stopBubble 函数
function stopBubble(event) {
    if(event.stopPropagation) {
        event.stopPropagation()
    } else {
        event.cancelBubble = true
    }
}

// 封装兼容性好的 cancelDefault 函数
function cancelDefault(event) {
    if(event.preventDefault) {
        event.preventDefault()
    } else {
        event.returnValue = false
    }
}

// 封装 getStyle 获取元素属性的函数
function getStyle(elem, prop) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop]
    } else {
        return elem.currentStyle[prop]
    }
}

// 获取随机数
function randomNum(m, n) {
    if(n < m) return undefined   
    var r = (Math.random()*(n-m)+m)  
    return Math.floor(r)    
}
