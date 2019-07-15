import React from 'react';

import './history.scss';

const History = props => {
  return (
    <section className="history">
      <h3>History</h3>
      <ul>
        {props.children}
      </ul>
    </section>
  )
};

export default History;
