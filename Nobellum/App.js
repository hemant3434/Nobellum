import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerItems from './constants/DrawerItems';
import ServicesScreen from './screens/Services';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Services"
        screenOptions={{ 
          headerStyle: { backgroundColor: 'aliceblue' },
          drawerStyle: {
            backgroundColor: 'aliceblue',
          },
        }}
      >
      {
        DrawerItems.map(drawer => 
        <Drawer.Screen
          key={drawer.name}
          name={drawer.name}
          component={ServicesScreen}
        />)
      }
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
  },
});