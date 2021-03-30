import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: 'Lato', sans-serif;
  }


  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input, textarea, button {
    font-family: 'Lato', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  :root{
    --primary-bg-color: #50c878;
    --secondary-bg-color: #83EEA7;
  }

<<<<<<< HEAD
`
=======
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    padding: 2rem;

    border-radius: 0.25rem;
  }

  /* @media(max-width: 720px) {
    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
      padding: 2rem;

      border-radius: 0.25rem;
    }
  } */
`;
>>>>>>> 1f8d9abd69a879b49d86c1b3a1f5c23c630c9187
