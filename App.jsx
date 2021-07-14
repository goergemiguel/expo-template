import React from "react"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { ThemeProvider } from "react-native-elements"
import { StoreProvider } from "~/store"
import { LocalizationProvider } from "~/locale"

import Routes from "~/routes"

export default function App() {
  return (
    <StoreProvider>
      <LocalizationProvider>
        <ThemeProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </LocalizationProvider>
    </StoreProvider>
  )
}
