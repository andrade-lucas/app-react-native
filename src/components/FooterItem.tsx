import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function FooterItem(props: any) {
    return (
        <View>
            <Text style={styles.footerItem}>{props.label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footerItem: {
        color: '#2282e3',
        backgroundColor: '#fff',
        padding: 3,
        margin: 20,
        borderRadius: 7,
        justifyContent: 'space-between'
    }
})