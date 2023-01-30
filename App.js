import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Avatar from './component/Avatar';
import VideoPost from './component/VideoPost';

export default function App() {

  const feedData = [
    { id: 1, text: 'This is post number 1', videoLink: '', webLink: '', user: 'Rob Jenkins', avatar: '' },
    { id: 2, text: 'This is post number 2', videoLink: '' },
    { id: 3, text: 'This is post number 3', videoLink: '' },
    { id: 4, text: 'This is post number 4', videoLink: '' },
    { id: 5, text: 'This is post number 5', videoLink: '' },
    { id: 6, text: 'This is post number 6', videoLink: '' },
    { id: 7, text: 'This is post number 7', videoLink: '' },
    { id: 8, text: 'This is post number 8', videoLink: '' },
    { id: 9, text: 'This is post number 9', videoLink: '' },
  ];


  const renderItem = ({item, index}) => {
    return (
      <View style={styles.postView}>
        <View style={styles.avatarCol}>
          <Avatar />
        </View>
        <View style={styles.otherCol}>
          <Text style={styles.txtBold}>{item.user}</Text>
          <Text style={styles.txt}>{item.text}</Text>
          <VideoPost />
        </View>
        
      </View>
    );

  }

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        style={styles.feedList}
        data={feedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> 

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 30,
    alignItems: 'center',
  },

  feedList: {
    width: '100%',
    paddingHorizontal: 12
  },

  postView: {
    marginHorizontal: 8,
    marginTop: 12,
    padding: 2,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#000'
  },

  avatarCol: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '15%',
    backgroundColor: '#000',
    marginHorizontal: 12
  },

  otherCol: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#000'
  },

  txt: {
    color: 'white'
  },

  txtBold: {
    color: 'white',
    fontWeight: 'bold'
  }

});
