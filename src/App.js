import React from "react";
import Strip from './Component/Strip'

class App extends React.Component {
  state = {
    showPaypal: false
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
      return (
        <div className="main">
          <Strip/>
        </div>
      );
    }
  
}

export default App;
