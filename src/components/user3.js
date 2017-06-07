import React, {Component} from 'react'

// 箭头函数 + ES属性语法
class user extends Component{
    sayHello = ()=>{
        console.log(this.props)
    }

    render(){
       return <button onClick={this.sayHello} >open hello4</button>
    }
}

export default user