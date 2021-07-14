import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "~/views/Home"

const screens = [
  {
    name: "Home",
    component: Home,
  },
]

export default function Routes() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {screens?.map((screen, index) => (
        <Stack.Screen
          name={screen.name}
          component={screen.component}
          key={index}
        />
      ))}
    </Stack.Navigator>
  )
}
