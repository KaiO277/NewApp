import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeScreeens from './src/screens/HomeScreeen';
import DetailList from './src/screens/DetailsList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StorageScreen from './src/screens/StorageScreen';
import Navigation from './src/navigation/navigation';

function HomeScreeen({navigation}){
  return (
    <HomeScreeens/>
  );
}

function DetailsScreeen(){
  return (
    <DetailList />
  );
}

function StoreScreeen(){
  return (
    <StorageScreen />
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Navigation />
  );
}

const storeData = async (key, value) => {
  try{
    await AsyncStorage.setItem(key, value);
    console.log('Data is stored sucessfully');
  }catch (error){
    console.log(error);
  }
}

const getData = async (key) =>{
  try{
    const value = await AsyncStorage.getItem(key);
    console.log('Data retrieved sucessfully: ', value);
  }catch (error){
    console.log(error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   details:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  home:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
