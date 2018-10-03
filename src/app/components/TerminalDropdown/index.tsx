import * as React from 'react';
import * as style from './style.css';


export class TerminalDropdown extends React.Component<any, any> {
  constructor(props?: any, context?: any) {
    super(props, context);
    this.state = {
      isClicked: this.props.menu.active,
    }
    this.selectMenu = this.selectMenu.bind(this);
  }

  selectMenu() {
    let clicked = !this.state.isClicked;
    this.setState({isClicked: clicked});
    this.props.menuSelected(this.props.menu.heading);
  }

  howMuchLeftness(index: number): number{
    let leftness = 16;
    for(let i=0; i< index; i++){
      leftness *= 2.5 ; 
    }
    return leftness;
  }

  render() {

    const index = this.props.index;
    let leftness: number;
    index == 0 ? leftness = 0 : leftness = this.howMuchLeftness(index); 

    let menuStyle = {
      'left': `${leftness}px`,
    };

    let menu;

    if(this.state.isClicked){
      menu = <ul className={style.terminalDropdownList}>
        {this.props.menu.option.map((option, key) => {
          return <li className={style.dropdownItem}>{key} - {option.name}</li>
        })}
      </ul>;
    }

    return (
      <div className={style.terminalDropdown} style={menuStyle}>
        <p onClick={this.selectMenu} className={style.heading}>{this.props.menu.heading}</p>
        {menu}
      </div>
    );
  }
}

export default TerminalDropdown;
