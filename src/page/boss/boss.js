import React, { Component } from 'react';
import {CSSTransition} from "react-transition-group"
import "./boss.scss"
class Boss extends Component {
  constructor(props){
    super(props)
    this.state={
      isShow:true
    }
    this.toToggole=this.toToggole.bind(this)
  }

toToggole(){
  this.setState({
    isShow:!this.state.isShow
  })
}

  render() { 
    return ( <div>
      <CSSTransition
      in={this.state.isShow}
      timeout={2000}
      classNames="boss-text"
      unmountOnExit
      >
      <div>BOSS级人物-孙悟空</div>
      </CSSTransition>
      <div> <button onClick={this.toToggole}>召唤BOSS</button> </div> 
    </div> );
  }
}
 
export default Boss;