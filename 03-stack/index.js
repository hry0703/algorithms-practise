class Stack {
    constructor() {
        this.items = [];
    }

    // 压栈操作
    push(ele) {
        this.items.push(ele)
    }

    // 出栈操作
    pop() {
        return this.items.pop()
    }

    // peek操作
    peek() {
        return this.items[this.items.length - 1]
    }

    // 栈的长度
    size() {
        return this.items.length
    }

    // 是否为空
    isEmpty() {
        return this.items.length === 0
    }
}