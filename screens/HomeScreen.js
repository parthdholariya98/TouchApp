import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Stories from '../components/Stories';
import Feed from '../components/Feed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Stories />
        <Feed />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
