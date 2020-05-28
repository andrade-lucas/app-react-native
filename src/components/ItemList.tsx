import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function ItemList(props: any) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: 'https://vignette.wikia.nocookie.net/pt.starwars/images/6/6c/2511.jpg/revision/latest/top-crop/width/360/height/450?cb=20121107230903' }}
                style={styles.image} />
            <View style={styles.label}>
                <Text style={styles.name}>Mestre Yoda</Text>
                <Text style={styles.info}>yoda@jedimaster.com</Text>
                <Text style={styles.info}>(99) 99999-9999</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 80,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#c5c5c5',
        margin: 5,
        padding: 10
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        height: 30,
        alignSelf: 'center',
        borderRadius: 50
    },
    label: {
        flex: 5,
        marginLeft: 15,
        fontSize: 15,
        alignSelf: 'center'
    },
    name: {
        fontSize: 15
    },
    info: {
        fontSize: 10,
        color: '#c5c5c5'
    }
});