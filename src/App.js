import React from 'react';
import Piano from './components/Piano'

class App extends React.Component{
  style = {
    main:{
      position: "absolute",
      left: "15vw",
      top: "15vh",
    }
  }
  render() {
    return (
        <div style={this.style.main}>
          <Piano/>
        </div>
    );
  }
}

export default App;
