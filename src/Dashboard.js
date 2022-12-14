import React from 'react';
import {View, Dimensions, Platform} from 'react-native';
import CustomVideoPlayer from './component/CustomVideoPlayer/CustomVideoPlayer';

const Dashboard = () => {
  const dimension = Dimensions.get('window');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <CustomVideoPlayer
        style={{
          width: dimension.width,
          height: 250,
          marginTop: Platform.OS == 'ios' ? 50 : 0,
        }}
        source={{
          uri: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        }}
        poster="https://pbs.twimg.com/media/FDX7UCbVcAUcNXj.jpg"
        title="GYAN-VIDEO-PLAYER"
        autoPlay={false}
        playInBackground={false}
        showSeeking10SecondsButton={true}
        showHeader={true}
        showFullScreenButton={true}
        showSettingButton={true}
        showMuteButton={true}
      />
    </View>
  );
};

export default Dashboard;
