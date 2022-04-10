import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'


export function Loading(){
    return (
        <View style ={style.container}>
            <ActivityIndicator color={'#000'} size={50} />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})