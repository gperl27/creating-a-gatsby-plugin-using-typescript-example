"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var INITIAL_LANGUAGE = "english";
var defaultState = {
    language: INITIAL_LANGUAGE,
    changeLanguage: function () { return undefined; },
};
exports.LanguageContext = react_1.default.createContext(defaultState);
exports.LanguageProvider = function (props) {
    var _a = react_1.default.useState(INITIAL_LANGUAGE), language = _a[0], setLanguage = _a[1];
    var changeLanguage = function (lang) { return setLanguage(lang); };
    return (react_1.default.createElement(exports.LanguageContext.Provider, { value: { language: language, changeLanguage: changeLanguage } }, props.children));
};
//# sourceMappingURL=languageProvider.js.map