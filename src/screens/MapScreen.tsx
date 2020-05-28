import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

import Footer from '../components/Footer';
import FloatButton from '../components/FloatButton';

export default class MapScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle} />
                {/* <Footer /> */}
                <FloatButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})