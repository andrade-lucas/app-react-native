import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import FooterItem from '../components/FooterItem';

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <FooterItem label="Opcao1" />
                <FooterItem label="Opcao2" />
                <FooterItem label="Opcao3" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#2282e3',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row'
    }
});