import * as React from 'react';
import * as style from './style.css';
import TerminalHeader  from '../../components/TerminalHeader';
import TerminalWindow from '../../components/TerminalWindow';
import TerminalOutput from '../../components/TerminalOutput';

// interface IFile {
//   name: string;
//   content: string;
//   author?: string;
// }

// interface IDir {
//   name: string,
//   files?: IFile[],
//   directories?: IDir[],
// }


class Terminal extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context)
    this.state = {
      commandHistory: [],
      outputHistory: [],
      dir: '~',
      fileSystem: {
        name: '~',
        files: [{
          name: 'test_file.txt',
          content: 'this is a test file',
        },
        {
          name: 'resume.txt',
          content: 'please give me a job',
        }],
        directories: [
          {
            name: 'Documents',
          },
          {
            name: 'Pictures',
          },
          {
            name: 'Music',
          }
        ]
      }
    }
    this.evaluateCommand = this.evaluateCommand.bind(this);
  }

  executeCommand(cmd: string){
    if(cmd.includes('clear')){
      console.log('clear!'); 
      this.setState({commandHistory: []});
    }

    const commandMap = ['cd', 'ls'];
    const commands = cmd.split(' ');
    commands.map(cmd => {
      let c = commandMap.indexOf(cmd.trim());
      console.log(c);
      switch(c){
        case 0:
          console.log('cd 0');
          this.changeDirectory(commands);
        case 1:
          console.log('ls 1');
          this.listD();
      }
    });
  }

  findDir(dir, cdir){
    if(cdir.name == dir){
      return cdir;
    }else{
      return cdir.directories.map(ndir => this.findDir(dir, ndir));
    }
  }

  listD() {
    let dir = this.state.dir;
    let tdir = this.findDir(dir, this.state.fileSystem);
    this.state.outputHistory.push(tdir);
    console.log(tdir);
  }

  changeDirectory(commands: string[]){
    let pathIndex = commands.indexOf('cd') + 1;
    let path = commands[pathIndex];
    //TODO validate the path.....
    this.setState({dir: path});
    console.log('cd ' + path);
  }
  evaluateCommand(command: string): void {
    console.log(command);
    // TODO validate command - still place in history + throw error....
    let history = this.state.commandHistory;
    history.push({command, output: ''});
    this.setState({commandHistory: history});
    this.executeCommand(command);
  }

  render() {
    return (
      <div className={style.terminal}>
      <TerminalHeader></TerminalHeader>
      <TerminalOutput
        user={'guest'} 
        dir={this.state.dir} 
        commandHistory={this.state.commandHistory}
        outputHistory={this.state.outputHistory}></TerminalOutput>
      <TerminalWindow 
        user={'guest'} 
        dir={this.state.dir} 
        evaluateCommand={this.evaluateCommand}/>
      </div>
    );
  }
}

export default Terminal;