import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Image source={require('./Tukz.png')} style={styles.profilePicture} />
          <View>
            <Text>Toka Lethunya</Text>
            <Text>11 hrs ago</Text>
          </View>
        </View>
      </View>

      <Text style={styles.description}>
        "This is the day the Lord has made; we will rejoice and be glad in it." - Psalm 118:24. Blessed to be surrounded by such a wonderful church family. ❤️
      </Text>

      <Image source={require('./Toka.png')} style={styles.postImage} />

      <View style={styles.interactions}>
        <View style={styles.interaction}>
          <EvilIcons name="like" size={24} color="black" />
          <Text>62 Likes</Text>
        </View>
        <View style={styles.interaction}>
          <FontAwesome6 name="comment-alt" size={24} color="black" />
          <Text>9 Comments</Text>
        </View>
        <View style={styles.interaction}>
        <FontAwesome5 name="share" size={24} color="black" />
          <Text>3 Shares</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  profile: {
    padding: 40,
    flexDirection: 'row',
  },

  profilePicture: {
    
    width: 75,
    height: 75,
    borderRadius: 37.5, 
    padding: 5, 
  },

  profileInfo: {
    flexDirection: 'row',
  },

  description: {
    paddingHorizontal: 20,
  },

  postImage: {
    
    width: '100%',
    aspectRatio: 1,
  },

  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  interaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
