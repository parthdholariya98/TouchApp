import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';

const stories = [
  { id: '1', image: require('../assets/story1.jpg'), username: 'john' },
  { id: '2', image: require('../assets/story2.jpg'), username: 'sara' },
  { id: '3', image: require('../assets/story3.jpg'), username: 'mike' },
  { id: '4', image: require('../assets/story4.jpg'), username: 'lisa' },
  { id: '5', image: require('../assets/story5.jpg'), username: 'emma' },
  { id: '6', image: require('../assets/story6.jpg'), username: 'alex' },
  { id: '7', image: require('../assets/story7.jpg'), username: 'disuza' },
  { id: '8', image: require('../assets/story8.jpg'), username: 'monarchi' },

];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.appName}>TouchApp</Text>
      </View>

      <FlatList
        data={stories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.storiesContainer}
        renderItem={({ item }) => (
          <View style={styles.story}>
            <Image source={item.image} style={styles.storyImage} />
            <Text style={styles.username}>{item.username}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'right',
    padding: 16,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  storiesContainer: {
    paddingHorizontal: 10,
  },
  story: {
    alignItems: 'center',
    marginRight: 10,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#e91e63',
  },
  username: {
    marginTop: 4,
    fontSize: 12,
  },
});
