import React, { useContext } from 'react'

import { ThemeContext } from '../theme-context'

const Header: React.FC = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <p>{theme}</p>
        </>
    )
}

export default Header