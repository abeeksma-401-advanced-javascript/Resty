import React from 'react';
import superagent from 'superagent';

class Request extends React.Component {

  requestSummon = event => {
    event.preventDefault();

    let url = event.target.url.value;
    let method = event.target.method.value;
    superagent(method, url)
    .then(this.props.response)
    .catch(err => {throw err})
  }

  render() {
    return (
      <section className="summoningIncantation">
        <form onSubmit={this.requestSummon}>
          <section className="incantation">
            <input type="text" name="url"/>
            <button type="submit">Cast</button> 
          </section>
          <input type="hidden" name="method" value="get" />
        </form>
      </section>
    )
  }
}

export default Request;