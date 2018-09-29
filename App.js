
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList   
        data={[
           {key: 'Rawal'}, {key: '34,555'}, {key: '4.4 GB'}, {key: '68%'},
          {key: 'Address'}, {key: '752,886'}, {key: '1.4 GB'}, {key: '38%'},
           {key: 'email'}, {key: '559,923'}, {key: '1.1 GB'}, {key: '28%'}, 
           {key: 'Account'},{key: '248,840'}, {key: '486.0 MB'}, {key: '13%'},
            {key: 'contact'},{key: '211,915'},  {key: '413.9 MB'},{key: '11 %'},
        ]}
          numColumns={4}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 22
  },
  item: {
   flex:1,
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
