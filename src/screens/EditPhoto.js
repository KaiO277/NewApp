import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

const EditPhotoScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Edit Photo</Text>
            <View style={styles.imageView}>
                <Image 
                    source={require('../assets/images/1.png')} 
                    style={styles.image}
                /> 
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.iconButton}>
                    {/* <Entypo name="chevron-right" style={{ fontSize: 22 }} /> */}
                    <Text style={styles.iconText}>Kích cỡ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconText}>Truyền thống</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconText}>Bản văn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconText}>Âm nhạc</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconText}>Vẽ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconText}>Nhãn dán</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.iconText}>Âm thanh</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Màu nền đen cho toàn bộ màn hình
    },
    imageView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1, // Thay đổi aspectRatio theo tỷ lệ của ảnh
        resizeMode: 'contain',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#000',
        padding: 10,
    },
    iconButton: {
        alignItems: 'center',
    },
    iconText: {
        color: '#fff',
    },
    buttonSubmit: {
        marginRight: 10,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    headerLeftText: {
        color: '#fff',
        fontSize: 20,
    },
})

export default EditPhotoScreen;

