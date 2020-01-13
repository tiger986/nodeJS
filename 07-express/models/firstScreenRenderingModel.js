//首屏渲染（在后端渲染好页面，再放到前端）

const firstScreenRenderingMod = {
    fun: () => {
        let data = ['aaa', 'bbb', 'ccc', 'ddd', 'eeee']
        return data
    }
}

module.exports = firstScreenRenderingMod