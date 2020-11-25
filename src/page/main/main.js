import React ,{Component} from "react"
import Header from  "../header/header"
import List from "../list/list"
import Boss from "../boss/boss"
class Main extends Component {
  render () {
    return (
      <div className="main">
      <Header/>
      <List/>
      <Boss/>
      </div>
    )
  }
}
export default Main; 