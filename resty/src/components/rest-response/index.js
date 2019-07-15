import React from 'react';

const Response = props => {
  if(!props.response){
    return (<div>Enter URL then go</div>)
  }

  return (
    <section className="response">
      <h3>headers</h3>
      <pre>
        {JSON.stringify(props.response.headers)}
      </pre>
      <h3>body</h3>
      <pre>
        {JSON.stringify(props.response.body)}
      </pre>
    </section>
  )
};

export default Response;