import React from "react";
interface Props {
    children: React.ReactNode;
}
declare type Language = 'english' | 'spanish' | 'french' | 'german';
interface LanguageManager {
    language: Language;
    changeLanguage(lang: Language): void;
}
export declare const LanguageContext: React.Context<LanguageManager>;
export declare const LanguageProvider: (props: Props) => JSX.Element;
export {};
//# sourceMappingURL=languageProvider.d.ts.map