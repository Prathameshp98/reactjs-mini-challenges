import React, { useState } from 'react'

import { ThemeContext } from './theme-context'

const Header = React.lazy(() => import('./components/Header'))
const Content = React.lazy(() => import('./components/Content'))

const LightDarkTheme: React.FC = () => {

    const getBrowserTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches

    console.log(getBrowserTheme(), "some")

    const [theme, setTheme] = useState<string>('light')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Header />
            <Content />
        </ThemeContext.Provider>
    )
}

export default LightDarkTheme
