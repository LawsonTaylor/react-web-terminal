import * as React from 'react';
import * as style from './style.css';
import TerminalHeader  from '../../components/TerminalHeader';
import TerminalWindow from '../../components/TerminalWindow';

class Terminal extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context)
  }

  render() {
    return (
      <div className={style.terminal}>
      <TerminalHeader></TerminalHeader>
      <TerminalWindow user={'guest'}/>
      </div>
    );
  }
}

export default Terminal;