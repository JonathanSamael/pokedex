import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#101010',
        backgroundColor: '#cde0bf',
        backgrounContainer: '#efefef',
        Card: 'rgba(0,98,72,0.3)',
    },
    dark: {
        color: '#fff',
        backgroundColor: '#55555c',
        backgrounContainer: '#101040',
        Card: '#101010',
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
   
    const [ theme, setTheme ] = useState(themes.light);
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}




