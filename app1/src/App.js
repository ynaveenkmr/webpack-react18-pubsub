import React, { Suspense } from 'react';
import PubSub from 'pubsub-js';

const RemoteApp = React.lazy(() => import('app2/App'));

const App = () => {
  const [dt, stDt] = React.useState('');

  React.useEffect(() => {
    let mySubscriber = function (msg, data) {
      console.log(msg, data);
      stDt(data);
    };
    let sub = PubSub.subscribe('MY TOPIC', mySubscriber);
    return () => {
      PubSub.unsubscribe(sub);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1</h1>
        <span>This text is from App2 --> </span>
        {dt}
      </div>
      <Suspense fallback={'loading...'}>
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;
