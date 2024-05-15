// HomeScreen.js
import * as React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button 
                title='Create Media'
                onPress={() => navigation.navigate('CreateMedia')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

export default HomeScreen;
