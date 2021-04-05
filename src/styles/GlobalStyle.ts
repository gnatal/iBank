import { createGlobalStyle } from 'styled-components';

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

  img{
    width: 100%;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  strong {
    font-weight: 800;
  }

  /* @media(max-width: 1088px){
		html {
			font-size: 93.75%;
		}
	} */

	@media(max-width: 720px){
		html {
			font-size: 87.5%;
		}
	}

  :root{
    --primary-bg-color: #50c878;
    --secondary-bg-color: #83EEA7;
    --primary-purple: #4a148c;
    --gray: #868B8E;
    --light-gray: #B9B7BD;
    --blue: #0080F6;
    --red: #970C10;
    -green: #72C64B;
  }

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
    background: #FFF;
    padding: 3rem;

    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  .text-capitalize{
    text-transform: capitalize;
  }

  .text-uppercase{
    text-transform: uppercase;
  }

`;
