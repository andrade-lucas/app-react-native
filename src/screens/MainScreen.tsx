import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Footer from '../components/Footer';
import CardItemMenu from '../components/CardItemMenu';

interface Props {
    navigation: any
}

export default class MainScreen extends React.Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <CardItemMenu icon="ios-list" label="Contatos" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Contacts', pageParams) }}
                        img="https://cdn.clipart.email/88d0bd73a27ff38b7f00f78d20642194_download-wallpaper-1920x1080-crowd-people-dance-silhouette-full-_1920-1080.jpeg" />

                    <CardItemMenu icon="ios-document" label="Arquivo" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Files', pageParams) }}
                    img="https://images2.alphacoders.com/261/thumb-1920-26102.jpg" />

                    <CardItemMenu icon="ios-navigate" label="Mapa" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Maps', pageParams) }}
                    img="https://i.pinimg.com/736x/d1/10/e9/d110e94b8a7cdfcdd82dc5db47357448.jpg" />
                </View>
                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        alignContent: 'stretch'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})