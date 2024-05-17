import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChooseAlbumScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Icon name="search" size={20} color="#666" style={styles.inputIcon} />
                <TextInput 
                    style={styles.textInput}
                    placeholder="Tìm kiếm" />   
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Bảng của bạn</Text>
            </View>
            <View style={styles.listTable}>
                <View style={styles.table}>
                    <Image 
                        style={styles.imageTable} 
                        source={require('../assets/images/money.jpg')}
                        resizeMode="contain"
                    />
                    <Text style={styles.textTable}>zz</Text>
                </View>
                <View style={styles.table}>
                    <Image 
                        style={styles.imageTable} 
                        source={require('../assets/images/money.jpg')}
                        resizeMode="contain"
                    />
                    <Text style={styles.textTable}>12</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.createButton}>
                    <Icon name="plus" size={20} color="white" />
                </TouchableOpacity>
                <Text style={styles.createButtonText}>Tạo bảng</Text>
            </View>
        </View>
    );
};

export default ChooseAlbumScreen;

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    textInput: {
        height: 40,  
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        marginTop: 10,
        height: 50,
        borderRadius: 22,
        margin: 5,
        backgroundColor: 'rgba(170, 170, 170, 0.5)',
        paddingHorizontal: 10,
    },
    inputIcon: {
        marginRight: 10,
    },
    content: {
        margin: 5,
        height: 40,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    listTable: {
        flex: 1,
        paddingHorizontal: 10,
    },
    table: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    imageTable: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 10,
    },
    textTable: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
        marginHorizontal: 20,
    },
    createButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff0000',
        borderRadius: 50,
        height: 50,
        width: 50,
        marginRight: 10,
    },
    createButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
