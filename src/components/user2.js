import React, {Component} from 'react'

// 箭头函数 + 构造函数
class user extends Component{
    constructor(props){
        super(props)
        this._sayHello = ()=> this.sayHello()
    }

    sayHello(){
        console.log(this.props)
    }

    render(){
       return <button onClick={this._sayHello.bind(this)} >open hello3</button>
    }
}

export default user