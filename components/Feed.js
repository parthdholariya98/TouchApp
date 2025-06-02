import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const postData = [
  {
    id: 1,
    user: {
      name: 'john_doe',
      avatar: require('../assets/story1.jpg'),
      time: '2h ago',
    },
    image: require('../assets/post1.jpg'),
    likes: 2304,
    comments: 1421,
    caption: 'Feeling good 🌸',
  },
  {
    id: 2,
    user: {
      name: 'adventurer_23',
      avatar: require('../assets/story2.jpg'),
      time: '5h ago',
    },
    image: require('../assets/post2.jpg'),
    likes: 1220,
    comments: 98,
    caption: 'Road trip vibes 🚗',
  },
  {
    id: 3,
    user: {
      name: 'nature_lover',
      avatar: require('../assets/story3.jpg'),
      time: '1d ago',
    },
    image: require('../assets/post3.jpg'),
    likes: 980,
    comments: 65,
    caption: 'Sunset dreams 🌄',
  },
];

export default function Feed() {
  const handleShare = async (caption) => {
    try {
      await Share.share({
        message: caption,
      });
    } catch (error) {
      console.log('Error sharing:', error.message);
    }
  };

  return (
    <View>
      {postData.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <Image source={post.user.avatar} style={styles.avatar} />
              <View>
                <Text style={styles.username}>{post.user.name}</Text>
                <Text style={styles.time}>{post.user.time}</Text>
              </View>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
              <Icon name="ellipsis-horizontal" size={20} color="#555" />
            </View>
          </View>

          <Image source={post.image} style={styles.image} />

          <View style={styles.captionBox}>
            <Text style={styles.caption}>{post.caption}</Text>
            <View style={styles.stats}>
              <Icon name="heart-outline" size={18} color="red" />
              <Text style={styles.statText}>{post.likes}</Text>
              <Icon name="chatbubble-outline" size={18} color="gray" style={{ marginLeft: 10 }} />
              <Text style={styles.statText}>{post.comments}</Text>
              <TouchableOpacity onPress={() => handleShare(post.caption)} style={styles.shareBtn}>
                <Icon name="share-social-outline" size={18} color="#007AFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followBtn: {
    backgroundColor: '#3897f0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 8,
  },
  followText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 300,
  },
  captionBox: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  caption: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 14,
    marginLeft: 4,
    marginRight: 10,
    color: '#555',
  },
  shareBtn: {
    marginLeft: 10,
  },
});
