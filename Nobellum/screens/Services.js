import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Categories from '../constants/Categories';

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={{alignItems: 'center'}} >
      {
        Categories.map((category, index) => 
        <View style={styles.card} key={index}>
          <Text style={styles.cardTitle}>
            {category.title}
          </Text> 
          <Text style={styles.cardDesc}>{category.description}</Text>
        </View>)
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: "80%",
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 5,
    elevation: 30,
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 30,
    padding: 20,
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "rgb(52, 64, 80)",
  },
  cardDesc: {
    fontSize: 20,
    lineHeight: 30,
    color: "rgb(94, 110, 130)",
  },
  scroll: {
    backgroundColor: 'aliceblue',
    color: "black"
  }
});
