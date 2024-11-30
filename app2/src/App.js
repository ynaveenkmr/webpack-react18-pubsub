import React from 'react';
import PubSub from 'pubsub-js';

const App = () => {
  React.useEffect(() => {
    PubSub.publish('MY TOPIC', 'hello world! data used in App1');
  }, []);

  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>App 2</h1>
    </div>
  );
};

export default App;
