import * as React from 'react';
import * as style from './style.css';

export class TerminalWindow extends React.Component<any, any> {

  public menus: object[];

  constructor(props?: any, context?: any) {
    super(props, context);
    this.state = {
      cwd: '~/Documents',
    };
  }

  render() {
    let termString = `${this.props.user}@lawson.io:`;
    return(
      <div className={style.terminalBox}>
        <p className={style.termText}>{termString}</p>
        <p className={style.termText}>~/Documents$</p>
        <textarea rows={22} className={style.terminalInput}/>
      </div>
    );
  }
}

export default TerminalWindow;
