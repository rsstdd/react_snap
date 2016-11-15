// import React from 'react';
//
// const App = React.createClass({
//   render() {
//     return <div>
//       <h1>Hello, Haters*</h1>
//       <br />
//       <p>* see <a href="http://www.vh1.com/news/53638/greatest-shake-it-off-anthems/">this.</a></p>
//     </div>;
//   }
// });
//
// export default App;
import React from 'react';

const App = React.createClass({
  getInitialState() {
    return {
       who: 'world',
       bob: 'Something',
       thing: 1
      };
  },

  handleChange(event) {
    const nextWho = event.target.value;

    this.setState({ bob: nextWho });
  },

  render() {
    let message;

    if (this.state.who.trim() === '') {
      message = 'Hello?';
    }
    else {
      message = `Hello ${this.state.who}`;
    }

    return <div>
      <h1>{message}</h1>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.who}
      />
    </div>;
  }
});

export default App;
