(function() {

    var oStage = document.querySelector('.stage')

    // 配置信息的对象
    var config = {
        // 小羊出脚的频率
        frequency: 70,
        // 控制雪碧图切换的量
        imgChangeDis: 0,
        cot: 0,
        speed: 7,
        maxNum: 8,
    }

    // 生成小羊 dom 的函数
    function Sheep(config) {
        this.div = document.createElement('div')
        this.div.className = 'sheep'
        this.div.style.bottom = randomNum(20, 400) + 'px'
        oStage.appendChild(this.div)
        this.frequency = randomNum(30, 100)
        this.divWidth = this.div.offsetWidth
        this.divLeft = this.div.offsetLeft
        this.cot = config.cot
        this.imgChangeDis = config.imgChangeDis
        this.speed = config.speed
        this.top = 0


    }


    /**
     * 限制创造小羊的条件，给生成的小羊加运动效果
     * @return {none} 
     */
    function createSheep() {
        var timer = setInterval(function() {
            var sheepNum = oStage.children.length
            if(sheepNum > config.maxNum - 1) {
                return false
            } else {
                var sheep = new Sheep(config)
                sheepRun(sheep)
                sheepDrag(sheep)
            }
        }, 1500)
    }

    // 入口函数
    function init() {
        createSheep()
    }
    init()


    // 实现小羊自身运动和位移的函数
    function sheepRun(sheep) {
        // 实现小羊自身运动的函数
        var sheepAnimate = setInterval(function() {
            sheep.imgChangeDis = sheep.imgChangeDis + sheep.divWidth
            // 实现雪碧图的轮回
            if(sheep.imgChangeDis == (sheep.divWidth * 8)) {
                sheep.imgChangeDis = 0
            }
            sheep.div.style.backgroundPosition = -sheep.imgChangeDis + 'px ' + sheep.top + 'px'
        }, sheep.frequency)

        // 实现小羊位移的函数
        var sheepWalk = setInterval(function() {
            sheep.cot = sheep.div.offsetLeft - sheep.speed
            if(sheep.cot <= - sheep.divWidth) {
                clearInterval(sheepWalk)
                clearInterval(sheepAnimate)
                oStage.removeChild(sheep.div)
            }
            sheep.div.style.left = sheep.cot + 'px'
        }, sheep.frequency)
    }

    // 拖拽函数
    function sheepDrag(elem) {
        var disX,
            disY;

        addEvent(elem.div, 'mousedown', function(e) {
            var event = e || window.event
            elem.top = -128
            elem.speed = 0
            disX = event.clientX - parseInt(getStyle(elem.div, 'left'))
            disY = event.clientY - parseInt(getStyle(elem.div, 'top'))
            addEvent(document, 'mousemove', mouseMove)
            addEvent(document, 'mouseup', mouseUp)
            stopBubble(event)
            cancelDefault(event)
        })
        function mouseMove(e) {
            var  event = e || window.event
            elem.div.style.left = event.clientX - disX + 'px'
            elem.div.style.top = event.clientY - disY + 'px'
        }
        function mouseUp(e) {
            var event = e || window.event
            elem.top = 0
            elem.speed = config.speed
            removeEvent(document, 'mousemove', mouseMove)
            removeEvent(document, 'mouseup', mouseUp)
        }
    }

})()