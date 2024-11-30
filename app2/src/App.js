import React from 'react';
import PubSub from 'pubsub-js';

const App = () => {
  React.useEffect(() => {
    let text2App1 = <u>'This text is from App2'</u>;
    PubSub.publish('MY TOPIC', text2App1);
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
