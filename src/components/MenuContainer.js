import React from "react";
import "./MenuContainer.scss";
import DamageList from "./DamageList";
import Home from "./Home";
import InputForm from "./InputForm";

export default class MenuContainer extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        activeItem: 'Home',
        activeItemPosition: 0,
        activeItemColor: '',
        menuItems: [
          { text: 'Home' },
          { text: 'Damages List' },
          { text: 'Upload damages' },
          { text: 'Log out' },
        ],
      }
      
      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(activeItem) {
      return e => {
        e.preventDefault()
      
        this.setState({
          activeItem,
          activeItemPosition: document.getElementById(activeItem).offsetTop,
          activeItemColor: window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'),
        })


      }
    }
    
    render() {
      const menuItems = this.state.menuItems.map(item => <MenuItem item={ item } handleClick={ this.handleClick }/>)
      let wrappedContent;
      if (this.state.activeItem == "Home"){
        wrappedContent = <Home />
      } else if (this.state.activeItem == "Upload damages"){
        wrappedContent = <InputForm />
      } else {
        wrappedContent = <DamageList damages={this.props.damages} />
      }
      return (
        <div className="menu-wrapper">
          <div className='menu-container'>
            <div>
            <span className='menu-item--active' style={{ top: this.state.activeItemPosition, backgroundColor: this.state.activeItemColor }}/>
            { menuItems }
            </div>
            <div className="menu-filler"></div>
          </div>
          <div className="page_wrap">
            {wrappedContent}
          </div>
        </div>
      )
    }
  }
  
  function MenuItem(props) {
    return (
      <div 
        className='menu-item'
        id={ props.item.text }
        onClick={ props.handleClick(props.item.text) }
      >
        { props.item.text.toUpperCase() }
      </div>
    )
  }
  
  
  
  
  