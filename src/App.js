import { useState } from 'react';
import { Button } from '@material-ui/core';
import { VideoCall } from './components';

function App() {
  const [inCall, setInCall] = useState(false);
  return (
    <div
      className="App"
      style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button variant="contained" color="primary" onClick={() => setInCall(true)}>
          Поговорить с мужем
        </Button>
      )}
    </div>
  );
}

export default App;
