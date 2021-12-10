import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

function ThemeState({ children }) {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('textutils')));
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeState
