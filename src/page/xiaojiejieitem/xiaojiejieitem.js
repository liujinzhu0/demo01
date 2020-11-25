import React, { Component } from 'react';
import PropTypes from "prop-types"
class XiaojiejieItem extends Component {
  constructor(props){
    super(props)
    this.handelClick=this.handelClick.bind(this)
  }

  handelClick(){
    this.props.deleteItem(this.props.index)
  }

  render() { 
    return ( 
    <li>{this.props.avname}----{this.props.content}<button onClick={this.handelClick}>点击</button></li>
     );
  }
}

XiaojiejieItem.propTypes={
  content:PropTypes.string,
  deleteItem:PropTypes.func,
  index:PropTypes.number.isRequired
}

XiaojiejieItem.defaultProps={
  avname:"js"
}
 
export default XiaojiejieItem;