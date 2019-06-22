"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var languageProvider_1 = require("./languageProvider");
exports.wrapRootElement = function (props) { return (react_1.default.createElement(languageProvider_1.LanguageProvider, null, props.element)); };
//# sourceMappingURL=gatsby-browser.js.map