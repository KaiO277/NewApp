import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

const AddTagScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Tìm kiếm các thẻ"
                />
            </View> 
            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    Gắn thẻ các chủ đề liên quan để tiếp cận những người quan tâm 
                    đến các Ghim như của bạn. Mọi người sẽ không thấy các
                    chủ đề bạn đã gắn thẻ.
                </Text>
            </View>           
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        alignItems: 'center',
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
        fontSize: 25,
        width: '100%',
        fontWeight: 'bold', // Chữ in đậm
        color: 'rgba(0, 0, 0, 0.5)',
    },
    description:{
        textAlign:'left'
    },
    descriptionText:{

        paddingHorizontal: 10,
        // height: 50,
        marginTop: 10,
        fontSize: 20,
        lineHeight: 30,
        // fontWeight:'bold'
    }
});

export default AddTagScreen;