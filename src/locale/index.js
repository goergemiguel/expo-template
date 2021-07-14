import React, { useReducer, createContext } from "react"
import enUS from "./en-US.json"
import zhHK from "./zh-HK.json"

function reducer(state, action) {
  switch (action.type) {
    case "SWITCH_LOCALE":
      return {
        ...state,
        currentLocale: action.payload,
      }
    default:
      return state
  }
}

export const Lang = createContext()

export function LocalizationProvider(props) {
  const initialState = {
    currentLocale: "en-US",
    supportedLocales: [
      {
        code: "en-US",
        label: "English",
      },
      { code: "zh-HK", label: "繁體中文" },
    ],
  }

  const Locales = {
    "en-US": enUS,
    "zh-HK": zhHK,
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)

  const $t = (string) => {
    const found = Locales?.[state?.currentLocale]?.[string]
    if (!found)
      console.log(
        `%c String "${string}" could not be found in your ${state?.currentLocale} config file.`,
        "padding: 1px 6px 1px 0px; background: yellow; color: black"
      )
    return found ?? string
  }

  const value = { state, dispatch, $t }

  return <Lang.Provider value={value}>{props?.children}</Lang.Provider>
}
