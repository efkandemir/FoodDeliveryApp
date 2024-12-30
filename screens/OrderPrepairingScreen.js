import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'

export default function OrderPrepairingScreen() {
  const navigation=useNavigation()
  useEffect(() => {
    setTimeout(()=>{
     navigation.navigate('Delivery')
    },2000)
  },[])
  
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80" />
    </View>
  )
}