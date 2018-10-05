import * as React from 'react';
import AppLauncher from '../../components/AppLauncher';

export class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
        {this.renderDevTool()}
        <AppLauncher></AppLauncher>
      </div>
    );
  }
}
