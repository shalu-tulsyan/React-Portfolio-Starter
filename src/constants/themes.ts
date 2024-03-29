import { createContext } from "react";

export const LightTheme={
    body: "#FCF6F4",
    text:"#000000",
    fontFamily: "'Source Sans Pro', sans-serif",
    bodyRgba: "252 246 244 ",
    textRgba: "0,0,0",
}

export const DarkTheme={
    body: "#000000",
    text:"#FCF6F4",
    fontFamily: "'Source Sans Pro', sans-serif",
    bodyRgba: "0,0,0 ",
    textRgba: "252 246 244 ",
}

export const enum ThemeType{
    Dark= 'Dark',
    Light= 'Light',
}

export type ThemeContextType={
    theme: ThemeType;
    changeTheme: ()=>void;
}

export const ThemedContext = createContext<ThemeContextType>({theme: ThemeType.Dark, changeTheme: ()=>{}});