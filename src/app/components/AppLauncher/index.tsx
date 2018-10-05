import * as React from 'react';
import * as style from './style.css';
const user_id = require('../../assets/images/if_user-id.png');

class AppLauncher extends React.Component<any, any> {

  constructor(props?: any, context?: any) {
    super(props, context);
  }

  render() {
    return (
    <div className={style.appLauncherContainer}>
      <div className={style.appLauncher}>
      <img className={style.appIcon} src={require('../../assets/images/if_terminal.png')}></img>
      <img className={style.appIcon} src={require('../../assets/images/if_bubbles-alt.png')}></img>
      {/* <img className={style.appIcon} src={require('../../assets/images/if_enveloppe-letter.png')}></img> */}
      <img className={style.appIcon} src={require('../../assets/images/if_file-powerpoint.png')}></img>
      <img className={style.appIcon} src={user_id}></img>
      </div>
    </div>);
  }
}

export default AppLauncher;
