import React , {Component} from "react"
import XiaoJieJieItem from "../xiaojiejieitem/xiaojiejieitem"
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import "./list.scss"
//import axios from 'axios'
class List extends Component {

  constructor (props){
    super(props)
    this.state={
      inputValue:"",
      list:["基础按摩","精油开背"]
    }
  }
  // 文本框输入事件
 inputChange (e) {
  console.log(e.target.value)
  this.setState({
    inputValue:this.input.value
  })
 }
 // 添加list
 addList () {
   this.setState({
     list:[...this.state.list,this.state.inputValue],
     inputVlaue:""
   })
 }
 // 删除项目
 deleteList(index){
  let list = this.state.list
  list.splice(index,1)
  this.setState({
    list:list
  })
 }



/* =============生命周期=============== */
//组件挂载前
UNSAFE_componentWillMount () {
  console.log("挂载前")
  /* axios.post("https://www.easy-mock.com/mock/5fae315490e2202de96cd089/reactDemo/test")
.then((res)=>{
  let data=res.data.data.result
  console.log(data)
  this.setState({list:data.list})
})
.catch((error)=>{
  console.log(error)
}) */
}
//组件挂载后
UNSAFE_componentDidMount(){
  console.log("挂载后")


}
//组件更新前
UNSAFE_shouldComponentUpdate(){
  console.log("组件更新前")
  return true
}
// 组件更新前执行但是是在shouldComponentUpdate函数之后执行
UNSAFE_componentWillUpdate(){
  console.log("组件更新前执行")
}






render () {
  return (
    
    <div>
    <ul>
    <TransitionGroup>
      {
        this.state.list.map((item,index)=>{
        return (
          <CSSTransition
          
          timeout={1000}
          classNames="boss-text"
          appear={true}
          key={index}
          
          
          >
          <XiaoJieJieItem 
          key={index} 
          content={item} 
          deleteItem={this.deleteList.bind(this)}
          index={index}
          />
          </CSSTransition>
         )
        })
      }
</TransitionGroup>
      <li>123123</li>
    </ul>
    <input type="text" onChange={this.inputChange.bind(this)} ref={(input)=>{this.input=input}}   value={this.state.inputValue} />
    <button onClick={this.addList.bind(this)}>增加服务</button> 
    </div>
  )
}
}
export default List
