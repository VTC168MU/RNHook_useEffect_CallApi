import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'

export default DmState = () => {

  const [title, setTitle] = useState("")
  useEffect(() => {
    console.log(title)
  })
  return (
    <View>
        <View>
            <Text>{title}</Text>
            <TextInput style={{borderWidth: 1, padding: 10}} value = {title} onChangeText={(text) => setTitle(text)} />
        </View>
    </View>
  )
}
