import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Book from './pages/Book';
import Donate from './pages/Donate';
import colors from './constants/colors';

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.main,
      },
      headerTintColor: 'white',
      tabBarActiveTintColor: 'rgb(92, 0, 0)'
    }}>
      <BottomTabs.Screen 
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
        }}
      />
      <BottomTabs.Screen 
        name='Order'
        component={Order}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='truck-delivery-outline' size={size} color={color} />
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar />
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={TabsNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='Contact'
            component={Contact}
          />
          <Stack.Screen 
            name='Appointments'
            component={Appointments}
          />
          <Stack.Screen 
            name='Book'
            component={Book}
          />
          <Stack.Screen 
            name='Donate'
            component={Donate}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});