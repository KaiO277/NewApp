import * as React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { TabView, SceneMap } from 'react-native-tab-view'; // Import TabView and SceneMap
import ImageItem from './ImageItem';

const images = [
  { id: 1, source: require('../assets/images/1.png') },
  { id: 2, source: require('../assets/images/money.jpg') },
  { id: 3, source: require('../assets/images/1.png') },
];

// GhimScreen component
const GhimScreen = () => (
  <ScrollView style={styles.boardsContainer}>
    {renderBoard('uhn', 4, '22 giờ', 'https://example.com/path/to/your/image1.jpg')}
    {renderBoard('wtuj', 0, '22 giờ')}
    {renderBoard('ggg', 0, '1 ngày')}
    {renderBoard('kkkee', 0, '2 ngày')}
    {renderBoard('kkkk', 0, '2 ngày')}
  </ScrollView>
);

// BangScreen component
const BangScreen = () => (
  <ScrollView style={styles.boardsContainer}>
    <View style={styles.containerBoards}>
      <ImageItem style={styles.image1} source={images[0].source} />
      <View style={styles.images23}>
        <ImageItem style={styles.image2} source={images[1].source} />
        <ImageItem style={styles.image3} source={images[2].source} />
      </View>
    </View>
    {renderBoard('uhn', 4, '22 giờ', 'https://example.com/path/to/your/image1.jpg')}
    {renderBoard('wtuj', 0, '22 giờ')}
    {renderBoard('ggg', 0, '1 ngày')}
    {renderBoard('kkkee', 0, '2 ngày')}
    {renderBoard('kkkk', 0, '2 ngày')}
  </ScrollView>
);

// Function to render each board item
const renderBoard = (title, pins, time, imageUrl) => (
  <View style={styles.board}>
    <View style={styles.boardImageContainer}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.boardImage} />}
    </View>
    <Text style={styles.boardTitle}>{title}</Text>
    <Text style={styles.boardInfo}>{pins} ghim {time}</Text>
  </View>
);

// SceneMap to map each route to its corresponding component
const renderScene = SceneMap({
  Ghim: GhimScreen,
  Bang: BangScreen,
});

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.profileInitial}>N</Text>
          </TouchableOpacity>
          <View style={styles.tabContainer}>
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarStyle: {
                  borderTopWidth: 0,
                  elevation: 0, // For Android to remove shadow
                  shadowOpacity: 0, // For iOS to remove shadow
                },
                tabBarLabelStyle: {
                  fontSize: 15,
                  fontWeight: 'bold',
                },
                tabBarIconStyle: {
                  display: 'none',
                },
              }}
            >
              <Tab.Screen name="Ghim" component={GhimScreen} />
              <Tab.Screen name="Bảng" component={BangScreen} />
            </Tab.Navigator>
          </View>
          <Icon name="settings" size={28} style={{ marginLeft: 15 }} />
        </View>
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Tìm Ghim của bạn"
          />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>↕</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTag}>
            <Text style={styles.filterTagText}>Nhóm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTag}>
            <Text style={styles.filterTagText}>Bí mật</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    justifyContent: 'space-between',
  },
  tabContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    fontSize: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  addButton: {
    marginLeft: 16,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 18,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  filterButton: {
    width: 30,
    height: 30,
    borderRadius: 
    15,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  filterButtonText: {
    fontSize: 18,
  },
  filterTag: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  filterTagText: {
    fontSize: 14,
    color: '#888',
  },
  boardsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor:'red'
  },
  board: {
    marginBottom: 16,
  },
  boardImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  boardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  boardInfo: {
    color: '#888',
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  footerButtonText: {
    fontSize: 16,
  },
  containerBoards: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  image1: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  images23: {
    flexDirection: 'row',
    height: 120,
    marginTop: 16,
  },
  image2: {
    width: '50%',
    height: '100%',
    borderRadius: 8,
    marginRight: 8,
  },
  image3: {
    width: '50%',
    height: '100%',
    borderRadius: 8,
  },
});

export default App;
