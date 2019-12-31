class A {
    constructor() {
        this.nameA = 'a';
    }
    validateA() {
        console.log('A')
    }
}

class B extends A {
    constructor() {
        super();
        this.nameB = 'b';
    }
    validateB() {
        console.log('B')
    }
}

class C extends B {
    constructor() {
        super();
        this.nameC = 'c';
    }
    validateC() {
        console.log('C');
    }
}

var c = new C();
const members = findMembers(c, 'name', 'validate');

function findMembers(obj, attr, mothod) {    
    console.log(obj);
    console.log(obj.prototype)
}

// 原型链查找