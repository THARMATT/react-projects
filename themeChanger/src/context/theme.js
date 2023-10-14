import { createContext, useContext } from "react";

export const ThemeContext=createContext({
    themeMode:'light',//variable
    darkTheme:()=>{},
    lightTheme:()=>{} //method
})
export const ThemeProvider=ThemeContext.Provider
//custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}