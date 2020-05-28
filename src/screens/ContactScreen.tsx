import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

import FloatButton from '../components/FloatButton';
import Footer from '../components/Footer';

interface Props {
    navigation: any
}

export default class ContactScreen extends React.Component<Props> {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>This is the ContactScreen page!</Text>
                <FloatButton />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});