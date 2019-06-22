import React from "react"

interface Props {
  children: React.ReactNode;
}

type Language = 'english' | 'spanish' | 'french' | 'german';

interface LanguageManager {
  language: Language;

  changeLanguage(lang: Language): void;
}

const INITIAL_LANGUAGE: Language = "english"

const defaultState: LanguageManager = {
  language: INITIAL_LANGUAGE,
  changeLanguage: () => undefined,
}

export const LanguageContext = React.createContext(defaultState)

export const LanguageProvider = (props: Props) => {
  const [language, setLanguage] = React.useState<Language>(INITIAL_LANGUAGE)

  const changeLanguage = (lang: Language) => setLanguage(lang)

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}
