import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
        <Text>{item.text}</Text>
        <VideoPost />
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
    backgroundColor: '#fff',
    marginTop: 30,
    alignItems: 'center',
  },

  feedList: {
    width: '100%'
  },

  postView: {
    marginHorizontal: 8,
    marginBottom: 8,
    padding: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderTopColor: 'grey',
    borderTopWidth: 1, 
    borderStyle: 'solid'
  }
});
