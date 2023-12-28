import { createGlobalStyle } from "styled-components";
import '../../fonts/inter/web/inter.css'
import '../../fonts/montserrat/webfonts/Montserrat.css'

const GlobalStyles = createGlobalStyle`
    //Inter FONT
    :root { font-family: 'Inter', sans-serif; }
    @supports (font-variation-settings: normal) {
    :root { font-family: 'Inter var', sans-serif; }
    }
    @font-face {
        font-family: 'Unkempt';
        src: local('Unkempt'), url(http://fonts.gstatic.com/s/unkempt/v7/opYoFyuMZRiBj_IeDTrh8g.ttf) format('truetype');
    }
    :root {

        --primary-60: #D7D9D7;

        --gold: #00e76e;
        /* #030324 */
    }
    /* html { width: 100%; min-width:1065px } */
    /* SCROLL */
    /* Chrome, Safari */
    ::-webkit-scrollbar {
        width: 11px;
        height: 11px;
    }

    ::-webkit-scrollbar-track-piece {
        background-color: var(--primary-60);
    }

    ::-webkit-scrollbar-thumb:vertical {
        height: 30px;
        background-color: var(--gold);
    }

    ::-moz-scrollbar-arrow {
        background-color: var(--gold);
    }

    /* Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color: var(--gold) var(--primary-60);
    }
    /* END SCROLL */
    html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
    font-family: Montserrat;
    }
    body {
    margin: 0;
    min-height: 100vh;
    }
    main {
    display: block;
    }
    h1 {
    font-size: 2em;
    margin: 0.67em 0;
    }
    hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
    }
    a {
    background-color: transparent;
    }
    abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
    }
    b,
    strong {
    font-weight: bolder;
    }
    code,
    kbd,
    samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
    }
    small {
    font-size: 80%;
    }
    sub,
    sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    }
    sub {
    bottom: -0.25em;
    }
    sup {
    top: -0.5em;
    }
    img {
    border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
    }
    button,
    input { 
    overflow: visible;
    }
    button,
    select { 
    text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
    -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
    }
    fieldset {
    padding: 0.35em 0.75em 0.625em;
    }
    legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
    }
    progress {
    vertical-align: baseline;
    }
    textarea {
    overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
    height: auto;
    }
    [type="search"] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
    }
    [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
    }
    details {
    display: block;
    }
    summary {
    display: list-item;
    }
    template {
    display: none;
    }
    [hidden] {
    display: none;
    }

    
    .button-grow:hover {
        transform: scale(1.1);
    }

`
export default GlobalStyles