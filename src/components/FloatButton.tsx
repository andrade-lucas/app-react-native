import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default function FloatButton(props: any) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.btnPress()}>
            <View style={styles.btn}>
                <Ionicons name="ios-add" size={60} color="#2282e3" />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 60,
        position: 'absolute',
        bottom: 10,
        marginBottom: 15,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    btn: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    }
});