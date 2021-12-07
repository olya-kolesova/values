import React from 'react';
import ReactDOM from 'react-dom';
import Validator from './Validator';

class App extends React.Component {
  render() {
    return (
      <div>
        <Validator />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
