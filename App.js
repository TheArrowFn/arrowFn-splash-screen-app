import React from 'react';
import SplashSceen from './src/screens/SplashScreen';
import TheArrowFnMainScreen from './src/screens/TheArrowFnMainScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTheRealApp: true,
    };
  }
  splashScreenTimer = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('result');
      }, 5000);
    });
  };
  async componentDidMount() {
    const data = await this.splashScreenTimer();
    if (data !== null) {
      this.setState({showTheRealApp: false});
    }
  }
  render() {
    if (this.state.showTheRealApp) {
      return <SplashSceen />;
    }
    return <TheArrowFnMainScreen />;
  }
}
