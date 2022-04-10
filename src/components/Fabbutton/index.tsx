import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

interface IFabbutton{
    onPress: () => void;
}

export function Fabbutton({onPress}:IFabbutton){
    return(
        <TouchableOpacity style={style.container} onPress={onPress}>
            <Feather name='search' color={'#fff'} size={25} />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        position: 'absolute' ,
        right: 10,
        bottom: 10,
        zIndex: 99 ,
        padding: 17,
        backgroundColor: 'rgba(16, 3, 63, 0.7)',
        borderRadius: 32,
        opacity: 0.7 ,
    },
})