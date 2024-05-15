// CreateMediaScreen.js
// import * as React from 'react';
import React, { useEffect } from 'react';

import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CreateMediaScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // This event will only be triggered when coming back to this screen
            console.log('Toàn');
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/images/1.png')} 
                    style={styles.image}
                    resizeMode="contain"
                />
                <TouchableOpacity 
                    style={styles.iconButton}
                    onPress={() => navigation.navigate('EditPhoto')}
                >
                    <Icon name="edit" size={24} color="white" />
                </TouchableOpacity>
            </View>   
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Tiêu đề</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Cho mọi người biết Ghim của bạn giới thiệu điều gì"
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Mô tả</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Thêm mô tả, đề cập hoặc hashtag vào Ghim của bạn."
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Liên kết</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Thêm liên kết của bạn ở đây"
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AdvancedSettings')}>
                <View style={styles.linkView}>
                    <View style={styles.linkView1}>
                        <Text>Chọn một bảng</Text>
                    </View>
                    <Entypo name="chevron-right" style={{ fontSize: 22 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AddTag')}>
                <View style={styles.linkView}>
                    <View style={styles.linkView1}>
                        <Text>Gắn thẻ chủ đề liên quan</Text>
                    </View>
                    <Entypo name="chevron-right" style={{ fontSize: 22 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AdvancedSettings')}>
                <View style={styles.linkView}>
                    <View style={styles.linkView1}>
                        <Text>Cài đặt nâng cao</Text>
                    </View>
                    <Entypo name="chevron-right" style={{ fontSize: 22 }} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        // height: 200,
    },
    imageContainer: {
        width: '100%',
        height: 200, // Adjust as needed
        position: 'relative',
        // backgroundColor: '#f0f0f0',
    },
    image: {
        width: '100%',
        height: '100%',
        marginBottom: 10,
        borderRadius: 7,
    },
    content: {
        width: '100%',
        paddingHorizontal: 20,
    },
    title: {
        textAlign: 'left',
    },
    input: {
        width: '100%',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        height: 50,
        marginTop: 10,
    },
    linkView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 14,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
    linkView1: {
        flexDirection: 'row',
        width: '85%',
        alignItems: 'center',
    },
    iconButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 20,
    }
});

export default CreateMediaScreen;
