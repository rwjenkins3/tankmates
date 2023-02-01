import * as React from 'react';
import { View, StyleSheet, Button, Pressable } from 'react-native';
import { Video ,AVPlaybackStatus } from 'expo-av';

import VideoPlayer from './VideoPlayer';


const VideoPost = (props) => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    
    return (
        <View style={styles.container}>
            <VideoPlayer video={props.video} />

        </View>
    );

}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    video: {
      width: '100%',
      aspectRatio: 16/9
    }
  });
  
export default VideoPost;