import { NavigationContainer, View, Text } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddMealScreen from './screens/AddMealScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <Text>Hello, Test!</Text>
    </View>
  );
}