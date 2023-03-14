import React from 'react';
import ObjContext from './context';
import Header from './Header';

class App extends React.Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001'
    }
  };
  render = () => {
    return (
      <div className="page">
        <ObjContext.Provider value={this.state.userData}>
          <Header />
        </ObjContext.Provider>
      </div>
    );
  };
}

export default App;
