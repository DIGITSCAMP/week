import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./Tukz.png")}
        style={styles.Pic}
      />
      <Text>Toka Lethunya</Text>
      <Text>10hrs</Text>
      <View style={styles.detailsBox}><AntDesign name="picture" size={370} color="black" /></View>
      <SimpleLineIcons name="like" size={24} color="black" />
      <FontAwesome5 name="comment-alt" size={24} color="black" />
      <FontAwesome name="share-square" size={24} color="black" />
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding:20 
   
  },
  
  white: {
    color: 'red',
    fontSize: 20,
    marginBottom: 5,
  },
  Pic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  
});
