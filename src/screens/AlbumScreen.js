import * as React from 'react';
import { View, StatusBar, StyleSheet, Dimensions, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function GhimScreen() {
  return (
    <View style={styles.screen}>
      <Text>Nội dung của GhimScreen</Text>
    </View>
  );
}

function BangScreen() {
  return (
    <View style={styles.screen}>
      <Text>Nội dung của BangScreen</Text>
    </View>
  );
}

const { width } = Dimensions.get('window');
const tabWidth = 100; // Chiều rộng của tab view
const totalTabWidth = tabWidth * 2; // Tổng chiều rộng của hai tab
const remainingWidth = width - totalTabWidth; // Chiều rộng còn lại để chia đều hai bên
const sidePadding = remainingWidth / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tabBar: {
    width: totalTabWidth,
    alignSelf: 'center',
  },
});

export default function AlbumScreen() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: { width: tabWidth },
          tabBarStyle: { width: totalTabWidth, alignSelf: 'center' },
        }}
      >
        <Tab.Screen name="Ghim" component={GhimScreen} />
        <Tab.Screen name="Bảng" component={BangScreen} />
      </Tab.Navigator>
    </View>
  );
}
