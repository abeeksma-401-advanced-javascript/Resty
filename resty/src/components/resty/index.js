import React from 'react';

import Request from '../rest-request';
import Response from '../rest-response';

class Resty extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      response: null
  };
}

  handleResponse = response => {
    this.setState({
      response
    });
  }

  render() {
    return(
      <main>
        <Request onResponse={this.handleResponse} />
        <Response response={this.state.response} />
      </main>
    )
  }
}

export default Resty;