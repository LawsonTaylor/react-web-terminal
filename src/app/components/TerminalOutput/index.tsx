import * as React from 'react';
import * as style from './style.css';

class Command extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    let termString = `${this.props.user}@lawson.io:`;
    return (
      <div className={style.terminalBox}>
        <p className={style.termText}>{termString}</p>
        <p className={style.termText}>{this.props.dir}$</p>
        <p className={style.termText}>{this.props.command}</p>
      </div>
    );
  }
}

class Output extends React.Component<any, any> {
  constructor(props){
    super(props);
  }


  render() {

    return (
      <div>

      </div>
    );
  }
}

export class TerminalOutput extends React.Component<any, any> {
  constructor(props?: any, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <div>
        {this.props.commandHistory.map((data, key) => {
          return(<div>
            <Command key={key} user={this.props.user} dir={this.props.dir} command={data}/>
            <Output data={this.props.outputHistory[key]}></Output>
            <p className={style.outputData}></p>
          </div>);
        })}
      </div>
    );
  }
}

export default TerminalOutput;
