import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={{alignItems: 'center'}} >
      <View style={styles.card}>
        <Text>Hello World!</Text>
      </View>
      <View style={styles.card}>
        <Text>Hello World!</Text>
      </View>
      <View style={styles.card}>
        <Text>Hello World!</Text>
      </View>
      <View style={styles.card}>
        <Text>Hello World!</Text>
      </View>
      <View style={styles.card}>
        <Text>Hello World!</Text>
      </View>
      <View style={styles.card}>
        <Text>Hello World!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: "70%",
    aspectRatio: 1,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 5,
    elevation: 30,
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 30,
  },
  scroll: {
    backgroundColor: 'aliceblue',
    color: "black"
  }
});
