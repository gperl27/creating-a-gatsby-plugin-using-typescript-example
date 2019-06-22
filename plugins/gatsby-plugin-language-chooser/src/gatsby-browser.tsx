import React from 'react'
import { LanguageProvider } from './languageProvider';

interface GatsbyRootProps {
    element: React.ReactNode;
}

export const wrapRootElement = (props: GatsbyRootProps) => (
    <LanguageProvider>
        {props.element}
    </LanguageProvider>
);
