import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Footer from '../components/Footer';
import CardItemMenu from '../components/CardItemMenu';

interface Props {
    navigation: any
}

export default class MainScreen extends React.Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.row}>
                        <CardItemMenu icon="ios-list" label="Contatos" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Contacts', pageParams) }}
                            img="https://cdn.clipart.email/88d0bd73a27ff38b7f00f78d20642194_download-wallpaper-1920x1080-crowd-people-dance-silhouette-full-_1920-1080.jpeg" />

                        <CardItemMenu icon="ios-document" label="Arquivos" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Files', pageParams) }}
                            img="https://images2.alphacoders.com/261/thumb-1920-26102.jpg" />

                        <CardItemMenu icon="ios-navigate" label="Mapa" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Maps', pageParams) }}
                            img="https://i.pinimg.com/736x/d1/10/e9/d110e94b8a7cdfcdd82dc5db47357448.jpg" />
                    </View>
                    <View style={styles.row}>
                        <CardItemMenu icon="ios-calculator" label="Calculadora" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Calculator', pageParams) }}
                            img="https://st2.depositphotos.com/3935719/7014/i/950/depositphotos_70144657-stock-photo-calculator.jpg" />

                        <CardItemMenu icon="ios-briefcase" label="Tarefas" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Files', pageParams) }}
                            img="https://www.inside4u.com.br/wp-content/uploads/2017/09/creative-office-PR22NE6-web-1170x658.jpg" />

                        <CardItemMenu icon="ios-compass" label="Bússola" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Maps', pageParams) }}
                            img="https://i.pinimg.com/originals/ce/d9/80/ced980b73d088a20375483e5db7a821a.jpg" />
                    </View>
                    <View style={styles.row}>
                        <CardItemMenu icon="ios-cash" label="Orçamentos" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Contacts', pageParams) }}
                            img="https://expensereduction.com.br/wp-content/uploads/2018/08/a-gestao-de-despesas-inteligente-e-sustentada.jpg" />

                        <CardItemMenu icon="ios-document" label="Arquivos" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Files', pageParams) }}
                            img="https://images2.alphacoders.com/261/thumb-1920-26102.jpg" />

                        <CardItemMenu icon="ios-navigate" label="Mapa" onPressItem={(pageParams: any) => { this.props.navigation.navigate('Maps', pageParams) }}
                            img="https://i.pinimg.com/736x/d1/10/e9/d110e94b8a7cdfcdd82dc5db47357448.jpg" />
                    </View>
                </ScrollView>
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
    },
    scroll: {
        marginBottom: '15%'
    }
})