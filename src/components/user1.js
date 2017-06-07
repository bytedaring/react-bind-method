import React , {Component} from 'react'

// 使用构造函数定义的方法
class user1 extends Component{
    constructor(props){
        super(props)
        this._sayHello = ()=> this.sayHello();
    }

    sayHello(){
        console.log(this.props)
    }

    render(){
        return (<button onClick={this.sayHello}>open hello 1</button>)
    }
}

export default user1