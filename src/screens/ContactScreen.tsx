import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';

import Footer from '../components/Footer';
import ItemList from '../components/ItemList';
import FloatButton from '../components/FloatButton';

interface Props {
    navigation: any
}

export default class ContactScreen extends React.Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.contacts}>
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                </ScrollView>
                <View style={styles.btnAdd}>
                    <FloatButton btnPress={(pageParams: any) => { this.props.navigation.navigate('CreateContact') } } />
                </View>
                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnAdd: {
        marginBottom: '13%',
        marginLeft: '80%'
    },
    contacts: {
        // marginBottom: '5%'
    }
});