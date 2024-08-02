import React, { createContext } from 'react'

export const ThemeContext = createContext({
    theme: '',
    setTheme: (theme: string) => {
        console.log()
    }
})