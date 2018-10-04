import * as React from 'react';
import * as style from './style.css';

export class TerminalWindow extends React.Component<any, any> {

  public menus: object[];

  constructor(props?: any, context?: any) {
    super(props, context);
    this.state = {
      cwd: '~/Documents',
    };
    this.terminalTyping = this.terminalTyping.bind(this);
  }

  terminalTyping(e){
    let text = e.target.value;
    let charcode = text.charCodeAt(text.length-1);

    if(10 <= charcode && charcode <= 13 ){
      this.props.evaluateCommand(text);
      e.target.value = '';
    } else {
      
    }
  }

  render() {
    let termString = `${this.props.user}@lawson.io:`;
    return(
      <div className={style.terminalBox}>
        <p className={style.termText}>{termString}</p>
        <p className={style.termText}>{this.props.dir}</p>
        <textarea onKeyUp={this.terminalTyping} rows={1} className={style.terminalInput}/>
      </div>
    );
  }
}

export default TerminalWindow;
