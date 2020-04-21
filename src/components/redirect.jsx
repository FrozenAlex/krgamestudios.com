import React from 'react';

class Redirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: props.target
    };
  }

  componentWillMount() {
    window.location = this.state.target;
  }

  render() {
    return (
      <div className='page'>
        <p>Please wait while you're redirected...</p>
      </div>
    );
  }
}

export default Redirect;
