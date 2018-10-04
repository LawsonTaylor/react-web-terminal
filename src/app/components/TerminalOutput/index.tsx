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
    const data = this.props.data;
    // const cols = (data.directories + data.files.length) / 3;
    let all = data.directories.map(dir => { return dir.name + '/'});
    let files = data.files.map(file => { return file.name});
    all = all.concat(files);
    console.log(all);
    return (
      <div>
        <ul className={style.output}>
        {all.map(item => {
          return(<li>{item}</li>);
        })}
        </ul>
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
            <Command key={key} user={this.props.user} dir={this.props.dir} command={data.command}/>
            <Output data={this.props.outputHistory[key]}></Output>
            <p className={style.outputData}></p>
          </div>);
        })}
      </div>
    );
  }
}

export default TerminalOutput;
