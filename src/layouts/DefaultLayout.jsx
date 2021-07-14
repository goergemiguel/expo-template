import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import Toast from "react-native-toast-message"

export default function DefaultLayout(props) {
  return (
    <View style={styles.container}>
      {props.children}
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 12,
    backgroundColor: "white",
    height: "100%",
  },
})
