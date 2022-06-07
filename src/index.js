import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';


import _es from "./translations/es.json";
import _ca from "./translations/ca.json";
import _en from "./translations/en.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "es",
    resources: {
        es: {
            global: _es
        },
        ca: {
            global: _ca
        },
        en: {
            global: _en
        }
    }
});


ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>,
    document.getElementById('root')
);