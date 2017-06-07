import React , {Component} from 'react'

// 使用函数绑定
class user extends Component{
    render(){
       return <button onClick={this.sayHello.bind(this)} >open hello</button>
    }

    sayHello(){
        console.log(this.props)
    }
}

export default user