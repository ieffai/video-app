import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react';

const appId = '1c95909b03cb41bfb32b67d3681da25b';
const token =
  '0061c95909b03cb41bfb32b67d3681da25bIACktxEKWtnE6MOIjUIPzitfVl6KSax4THBllDUVnFbIFGTNKL8AAAAAEAAh3GK84g5GYQEAAQDhDkZh';

export const config = { mode: 'rtc', codec: 'vp8', appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = 'main';
