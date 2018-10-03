import * as React from 'react';
import * as style from './style.css';
import TerminalDropdown from '../TerminalDropdown';


export class TerminalHeader extends React.Component<any, any> {

  public menus: object[];

  constructor(props?: any, context?: any) {
    super(props, context);
    this.state = {
      menus: [{
        heading: 'File',
        active: false,
        option: [
          { name: 'New Tab'},
          { name: 'New Window'},
          { name: 'Close Tab'},
          { name: 'Close Window'},
        ]
      },
      {
        heading: 'Search',
        active: false,
        option: [
          { name: '(SEARCH BAR)'},
        ],
      },
      {
        heading: 'Help',
        active: false,
        option: [
          { name: 'Terminal Options'},
          { name: 'About'},
          { name: 'Contact'},
          { name: 'What is ths thing?'},
        ]
      }]
    }
  }

  exitTerminal() {
    console.log("exit terminal");
  }
  minimizeTerminal(){
    console.log("minimize terminal");
  }
  maximizeTerminal(){
    console.log("maximize terminal");
  }

  menuSelected(heading: string){
    let menus = this.state.menus;
    menus = menus.map(menu => {
      if(menu.active == true && menu.name != heading){
        menu.active = false;
      }
      return menu;
    });
    console.log(menus);
    this.setState(menus);
  }

  render() {
    return (
    <div className={style.headerBar}>
      <div className={style.userText}>guest@lawson.io:~</div>
      <div className={style.btnBar}>
        <button className={style.termMinBtn} onClick={this.minimizeTerminal}></button>
        <button className={style.termMaxBtn} onClick={this.maximizeTerminal}></button>
        <button className={style.termExitBtn} onClick={this.exitTerminal}></button>
      </div>
      <div className={style.menuBar}>
      {this.state.menus.map((m , index) => {
        return <TerminalDropdown menu={m} index={index} menuSelected={this.menuSelected}/>
      })}
      </div>
    </div>);
  }
}

export default TerminalHeader;
