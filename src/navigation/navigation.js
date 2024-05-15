// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreeen';
import CreateMediaScreen from '../screens/CreateMediaScreen';
import AdvancedSettingsScreen from '../screens/AdvancedSettings';
import AddTagScreen from '../screens/AddTag';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import EditPhotoScreen from '../screens/EditPhoto';


const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ 
                        headerShown: false
                        
                    }} 
                />
                <Stack.Screen 
                    name="CreateMedia" 
                    component={CreateMediaScreen} 
                    options={{ 
                        headerTitle: 'Tạo ghim',
                        headerTitleAlign: 'center' 
                    }}
                />
                <Stack.Screen 
                    name="AdvancedSettings" 
                    component={AdvancedSettingsScreen} 
                    options={{ headerTitle: 'Cài đặt nâng cao', headerTitleAlign: 'center' }} />
                <Stack.Screen 
                    name="AddTag" 
                    component={AddTagScreen} 
                    options={({ navigation }) => ({ 
                        headerTitle: 'Gắn thẻ chủ đề', 
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigation.navigate('EditPhoto')}>
                                <Text style={styles.buttonText}>Hoàn tất</Text>
                            </TouchableOpacity>
                        )
                    })} 
                />
                <Stack.Screen 
                    name="EditPhoto" 
                    style={styles.editPhoto}
                    component={EditPhotoScreen} 
                    options={{ 
                        headerTitle: '', 
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'black', // Màu nền đen cho header
                        },
                        headerTintColor: 'white',
                        headerRight: () => (
                            <TouchableOpacity style={ styles.buttonSubmit } onPress={() => null}>
                                <Text style={ styles.buttonText }>Hoàn tất</Text>
                            </TouchableOpacity>
                        )
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    buttonSubmit: {
        marginRight: 10,
        backgroundColor: 'red', // Màu nền đỏ
        borderRadius: 20, // Độ bo tròn
        paddingVertical: 10, // Khoảng cách dọc của nút
        paddingHorizontal: 20, 
    },
    buttonText:{
        color: 'white', // Màu chữ trắng
        textAlign: 'center', // Canh giữa chữ
        fontWeight: 'bold',
    },
    editPhoto:{
        backgroundColor:'black'
    }
})
