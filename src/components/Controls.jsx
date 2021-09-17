import React, { useState } from 'react';
import { useClient } from '../settings';
import { Grid, Button } from '@material-ui/core';
import { MicOff, Videocam, VideocamOff, ExitToApp, Mic } from '@material-ui/icons';

const Controls = (props) => {
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  const mute = async (type) => {
    if (type === 'audio') {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === 'video') {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Button
          variant="contained"
          color={trackState.audio ? 'primary' : 'secondary'}
          onClick={() => mute('audio')}>
          {trackState.audio ? <Mic /> : <MicOff />}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color={trackState.video ? 'primary' : 'secondary'}
          onClick={() => mute('video')}>
          {trackState.video ? <Videocam /> : <VideocamOff />}
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="default" onClick={() => leaveChannel()}>
          <ExitToApp />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Controls;
