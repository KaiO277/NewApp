import React, { useEffect, useRef, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const CreateMediaScreen = () => {
    const navigation = useNavigation();
    const BottomSheetModalRef = useRef(null);
    const [isBackPressed, setIsBackPressed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const snapPoints = ['25%'];

    const handlePresentModal = () => {
        setIsModalOpen(true);
        BottomSheetModalRef.current?.present();
    };

    const handleDismissModal = () => {
        BottomSheetModalRef.current?.dismiss();
        setIsModalOpen(false);
        setIsBackPressed(false);
    };

    useFocusEffect(
        useCallback(() => {
            const onBeforeRemove = (event) => {
                if (isBackPressed) return;

                event.preventDefault();
                setIsBackPressed(true);
                handlePresentModal();
            };

            navigation.addListener('beforeRemove', onBeforeRemove);

            return () => {
                navigation.removeListener('beforeRemove', onBeforeRemove);
            };
        }, [isBackPressed])
    );

    return (
        <BottomSheetModalProvider>
            <View style={styles.container}>
                {isModalOpen && <View style={styles.overlay} />}
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
                <TouchableOpacity onPress={() => navigation.navigate('ChooseAlbum')}>
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
            <View style={styles.footer}>
                <TouchableOpacity style={styles.iconButtonContainer}>
                    <Icon name="folder" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButtonContainer}>
                    <Icon name="download" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.createButtonText}>Tạo</Text>
                </TouchableOpacity>
            </View>

            <BottomSheetModal
                ref={BottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                onDismiss={handleDismissModal}
            >
                <View style={styles.bottomSheetContent}>
                    <Text style={styles.bottomSheetTitle}>Lưu bản nháp?</Text>
                    <Text style={styles.bottomSheetDescription}>
                        Nếu không lưu bây giờ, bạn sẽ mất tất cả thay đổi.
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.grayButton]} onPress={handleDismissModal}>
                            <Text style={styles.grayButtonText}>Xóa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.redButton]} onPress={() => { 
                            // Handle save draft action here
                            navigation.goBack();
                        }}>
                            <Text style={styles.redButtonText}>Lưu bản nháp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    header: {
        width: '100%',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: 200,
        position: 'relative',
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
    },
    bottomSheetContent: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    bottomSheetTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bottomSheetDescription: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20, // Increased border radius
        alignItems: 'center',
        marginHorizontal: 5,
    },
    grayButton: {
        backgroundColor: '#ccc',
    },
    grayButtonText: {
        color: '#000',
        fontSize: 16,
    },
    redButton: {
        backgroundColor: 'red',
    },
    redButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#fff'
    },
    iconButtonContainer: {
        backgroundColor: 'lightgray',
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    createButton: {
        backgroundColor: 'red',
        borderRadius: 25,
        height: 50,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CreateMediaScreen;
