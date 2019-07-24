# Rental Car Project

## 기본 설치

- mkdir RentalCarDB
- cd RentalCarDB
- express RentalCar --view=ejs
- npm i

package.json

```json
{
  "name": "rentalcar",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "ejs": "~2.6.1",
    "express": "~4.16.1",
    "express-session": "^1.16.2",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "mysql": "^2.17.1",
    "mysql2": "^1.6.5",
    "sequelize": "^5.10.0"
  },
  "devDependencies": {
    "nodemon": "^1.19.1"
  }
}

```

해당 파일에는 session-express와 nodemon이 설치 되어있음

session-express 설치

- ctrl + ` 을 누른 뒤, NoDBSPA 폴더로 들어가자. 
- cmd 창에서 npm i express-session을 입력
- "express-session": "^1.16.2",이 생긴 것을 볼 수 있음

마찬가지의 방법으로 nodemon을 설치

- npm i --save-dev nodemon
- "nodemon": "^1.19.1"이 생긴 것을 볼 수 있음

mysql 설치

- npm i mysql
- "mysql": "^2.17.1",이 생긴 것을 볼 수 있음

npm start

->http://localhost:3000 으로 들어가기

public/stylesheets/main.css

```css
@import url(font-awesome.min.css);
@import url("http://fonts.googleapis.com/css?family=Raleway:300,700");

/*
	Typify by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

/* Reset */

	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
		display: block;
	}

	body {
		line-height: 1;
	}

	ol, ul {
		list-style: none;
	}

	blockquote, q {
		quotes: none;
	}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	body {
		-webkit-text-size-adjust: none;
	}

/* Box Model */

	*, *:before, *:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

/* Containers */

	.container {
		margin-left: auto;
		margin-right: auto;
	}

	.container.\31 25\25 {
		width: 100%;
		max-width: 100em;
		min-width: 80em;
	}

	.container.\37 5\25 {
		width: 60em;
	}

	.container.\35 0\25 {
		width: 40em;
	}

	.container.\32 5\25 {
		width: 20em;
	}

	.container {
		width: 80em;
	}

	@media screen and (max-width: 1680px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 100em;
			min-width: 80em;
		}

		.container.\37 5\25 {
			width: 60em;
		}

		.container.\35 0\25 {
			width: 40em;
		}

		.container.\32 5\25 {
			width: 20em;
		}

		.container {
			width: 80em;
		}

	}

	@media screen and (max-width: 1280px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 81.25em;
			min-width: 65em;
		}

		.container.\37 5\25 {
			width: 48.75em;
		}

		.container.\35 0\25 {
			width: 32.5em;
		}

		.container.\32 5\25 {
			width: 16.25em;
		}

		.container {
			width: 65em;
		}

	}

	@media screen and (max-width: 980px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 112.5%;
			min-width: 90%;
		}

		.container.\37 5\25 {
			width: 67.5%;
		}

		.container.\35 0\25 {
			width: 45%;
		}

		.container.\32 5\25 {
			width: 22.5%;
		}

		.container {
			width: 90%;
		}

	}

	@media screen and (max-width: 736px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 112.5%;
			min-width: 90%;
		}

		.container.\37 5\25 {
			width: 67.5%;
		}

		.container.\35 0\25 {
			width: 45%;
		}

		.container.\32 5\25 {
			width: 22.5%;
		}

		.container {
			width: 90%;
		}

	}

	@media screen and (max-width: 480px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 112.5%;
			min-width: 90%;
		}

		.container.\37 5\25 {
			width: 67.5%;
		}

		.container.\35 0\25 {
			width: 45%;
		}

		.container.\32 5\25 {
			width: 22.5%;
		}

		.container {
			width: 90%;
		}

	}

/* Grid */

	.row {
		border-bottom: solid 1px transparent;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.row > * {
		float: left;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.row:after, .row:before {
		content: '';
		display: block;
		clear: both;
		height: 0;
	}

	.row.uniform > * > :first-child {
		margin-top: 0;
	}

	.row.uniform > * > :last-child {
		margin-bottom: 0;
	}

	.row.\30 \25 > * {
		padding: 0 0 0 0em;
	}

	.row.\30 \25 {
		margin: 0 0 -1px 0em;
	}

	.row.uniform.\30 \25 > * {
		padding: 0em 0 0 0em;
	}

	.row.uniform.\30 \25 {
		margin: 0em 0 -1px 0em;
	}

	.row > * {
		padding: 0 0 0 2em;
	}

	.row {
		margin: 0 0 -1px -2em;
	}

	.row.uniform > * {
		padding: 2em 0 0 2em;
	}

	.row.uniform {
		margin: -2em 0 -1px -2em;
	}

	.row.\32 00\25 > * {
		padding: 0 0 0 4em;
	}

	.row.\32 00\25 {
		margin: 0 0 -1px -4em;
	}

	.row.uniform.\32 00\25 > * {
		padding: 4em 0 0 4em;
	}

	.row.uniform.\32 00\25 {
		margin: -4em 0 -1px -4em;
	}

	.row.\31 50\25 > * {
		padding: 0 0 0 3em;
	}

	.row.\31 50\25 {
		margin: 0 0 -1px -3em;
	}

	.row.uniform.\31 50\25 > * {
		padding: 3em 0 0 3em;
	}

	.row.uniform.\31 50\25 {
		margin: -3em 0 -1px -3em;
	}

	.row.\35 0\25 > * {
		padding: 0 0 0 1em;
	}

	.row.\35 0\25 {
		margin: 0 0 -1px -1em;
	}

	.row.uniform.\35 0\25 > * {
		padding: 1em 0 0 1em;
	}

	.row.uniform.\35 0\25 {
		margin: -1em 0 -1px -1em;
	}

	.row.\32 5\25 > * {
		padding: 0 0 0 0.5em;
	}

	.row.\32 5\25 {
		margin: 0 0 -1px -0.5em;
	}

	.row.uniform.\32 5\25 > * {
		padding: 0.5em 0 0 0.5em;
	}

	.row.uniform.\32 5\25 {
		margin: -0.5em 0 -1px -0.5em;
	}

	.\31 2u, .\31 2u\24 {
		width: 100%;
		clear: none;
		margin-left: 0;
	}

	.\31 1u, .\31 1u\24 {
		width: 91.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\31 0u, .\31 0u\24 {
		width: 83.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\39 u, .\39 u\24 {
		width: 75%;
		clear: none;
		margin-left: 0;
	}

	.\38 u, .\38 u\24 {
		width: 66.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\37 u, .\37 u\24 {
		width: 58.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\36 u, .\36 u\24 {
		width: 50%;
		clear: none;
		margin-left: 0;
	}

	.\35 u, .\35 u\24 {
		width: 41.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\34 u, .\34 u\24 {
		width: 33.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\33 u, .\33 u\24 {
		width: 25%;
		clear: none;
		margin-left: 0;
	}

	.\32 u, .\32 u\24 {
		width: 16.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\31 u, .\31 u\24 {
		width: 8.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\31 2u\24 + *,
	.\31 1u\24 + *,
	.\31 0u\24 + *,
	.\39 u\24 + *,
	.\38 u\24 + *,
	.\37 u\24 + *,
	.\36 u\24 + *,
	.\35 u\24 + *,
	.\34 u\24 + *,
	.\33 u\24 + *,
	.\32 u\24 + *,
	.\31 u\24 + * {
		clear: left;
	}

	.\-11u {
		margin-left: 91.66667%;
	}

	.\-10u {
		margin-left: 83.33333%;
	}

	.\-9u {
		margin-left: 75%;
	}

	.\-8u {
		margin-left: 66.66667%;
	}

	.\-7u {
		margin-left: 58.33333%;
	}

	.\-6u {
		margin-left: 50%;
	}

	.\-5u {
		margin-left: 41.66667%;
	}

	.\-4u {
		margin-left: 33.33333%;
	}

	.\-3u {
		margin-left: 25%;
	}

	.\-2u {
		margin-left: 16.66667%;
	}

	.\-1u {
		margin-left: 8.33333%;
	}

	@media screen and (max-width: 1680px) {

		.row > * {
			padding: 0 0 0 2em;
		}

		.row {
			margin: 0 0 -1px -2em;
		}

		.row.uniform > * {
			padding: 2em 0 0 2em;
		}

		.row.uniform {
			margin: -2em 0 -1px -2em;
		}

		.row.\32 00\25 > * {
			padding: 0 0 0 4em;
		}

		.row.\32 00\25 {
			margin: 0 0 -1px -4em;
		}

		.row.uniform.\32 00\25 > * {
			padding: 4em 0 0 4em;
		}

		.row.uniform.\32 00\25 {
			margin: -4em 0 -1px -4em;
		}

		.row.\31 50\25 > * {
			padding: 0 0 0 3em;
		}

		.row.\31 50\25 {
			margin: 0 0 -1px -3em;
		}

		.row.uniform.\31 50\25 > * {
			padding: 3em 0 0 3em;
		}

		.row.uniform.\31 50\25 {
			margin: -3em 0 -1px -3em;
		}

		.row.\35 0\25 > * {
			padding: 0 0 0 1em;
		}

		.row.\35 0\25 {
			margin: 0 0 -1px -1em;
		}

		.row.uniform.\35 0\25 > * {
			padding: 1em 0 0 1em;
		}

		.row.uniform.\35 0\25 {
			margin: -1em 0 -1px -1em;
		}

		.row.\32 5\25 > * {
			padding: 0 0 0 0.5em;
		}

		.row.\32 5\25 {
			margin: 0 0 -1px -0.5em;
		}

		.row.uniform.\32 5\25 > * {
			padding: 0.5em 0 0 0.5em;
		}

		.row.uniform.\32 5\25 {
			margin: -0.5em 0 -1px -0.5em;
		}

		.\31 2u\28xlarge\29, .\31 2u\24\28xlarge\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28xlarge\29, .\31 1u\24\28xlarge\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28xlarge\29, .\31 0u\24\28xlarge\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28xlarge\29, .\39 u\24\28xlarge\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28xlarge\29, .\38 u\24\28xlarge\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28xlarge\29, .\37 u\24\28xlarge\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28xlarge\29, .\36 u\24\28xlarge\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28xlarge\29, .\35 u\24\28xlarge\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28xlarge\29, .\34 u\24\28xlarge\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28xlarge\29, .\33 u\24\28xlarge\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28xlarge\29, .\32 u\24\28xlarge\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28xlarge\29, .\31 u\24\28xlarge\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28xlarge\29 + *,
		.\31 1u\24\28xlarge\29 + *,
		.\31 0u\24\28xlarge\29 + *,
		.\39 u\24\28xlarge\29 + *,
		.\38 u\24\28xlarge\29 + *,
		.\37 u\24\28xlarge\29 + *,
		.\36 u\24\28xlarge\29 + *,
		.\35 u\24\28xlarge\29 + *,
		.\34 u\24\28xlarge\29 + *,
		.\33 u\24\28xlarge\29 + *,
		.\32 u\24\28xlarge\29 + *,
		.\31 u\24\28xlarge\29 + * {
			clear: left;
		}

		.\-11u\28xlarge\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28xlarge\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28xlarge\29 {
			margin-left: 75%;
		}

		.\-8u\28xlarge\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28xlarge\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28xlarge\29 {
			margin-left: 50%;
		}

		.\-5u\28xlarge\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28xlarge\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28xlarge\29 {
			margin-left: 25%;
		}

		.\-2u\28xlarge\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28xlarge\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 1280px) {

		.row > * {
			padding: 0 0 0 1.5em;
		}

		.row {
			margin: 0 0 -1px -1.5em;
		}

		.row.uniform > * {
			padding: 1.5em 0 0 1.5em;
		}

		.row.uniform {
			margin: -1.5em 0 -1px -1.5em;
		}

		.row.\32 00\25 > * {
			padding: 0 0 0 3em;
		}

		.row.\32 00\25 {
			margin: 0 0 -1px -3em;
		}

		.row.uniform.\32 00\25 > * {
			padding: 3em 0 0 3em;
		}

		.row.uniform.\32 00\25 {
			margin: -3em 0 -1px -3em;
		}

		.row.\31 50\25 > * {
			padding: 0 0 0 2.25em;
		}

		.row.\31 50\25 {
			margin: 0 0 -1px -2.25em;
		}

		.row.uniform.\31 50\25 > * {
			padding: 2.25em 0 0 2.25em;
		}

		.row.uniform.\31 50\25 {
			margin: -2.25em 0 -1px -2.25em;
		}

		.row.\35 0\25 > * {
			padding: 0 0 0 0.75em;
		}

		.row.\35 0\25 {
			margin: 0 0 -1px -0.75em;
		}

		.row.uniform.\35 0\25 > * {
			padding: 0.75em 0 0 0.75em;
		}

		.row.uniform.\35 0\25 {
			margin: -0.75em 0 -1px -0.75em;
		}

		.row.\32 5\25 > * {
			padding: 0 0 0 0.375em;
		}

		.row.\32 5\25 {
			margin: 0 0 -1px -0.375em;
		}

		.row.uniform.\32 5\25 > * {
			padding: 0.375em 0 0 0.375em;
		}

		.row.uniform.\32 5\25 {
			margin: -0.375em 0 -1px -0.375em;
		}

		.\31 2u\28large\29, .\31 2u\24\28large\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28large\29, .\31 1u\24\28large\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28large\29, .\31 0u\24\28large\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28large\29, .\39 u\24\28large\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28large\29, .\38 u\24\28large\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28large\29, .\37 u\24\28large\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28large\29, .\36 u\24\28large\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28large\29, .\35 u\24\28large\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28large\29, .\34 u\24\28large\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28large\29, .\33 u\24\28large\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28large\29, .\32 u\24\28large\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28large\29, .\31 u\24\28large\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28large\29 + *,
		.\31 1u\24\28large\29 + *,
		.\31 0u\24\28large\29 + *,
		.\39 u\24\28large\29 + *,
		.\38 u\24\28large\29 + *,
		.\37 u\24\28large\29 + *,
		.\36 u\24\28large\29 + *,
		.\35 u\24\28large\29 + *,
		.\34 u\24\28large\29 + *,
		.\33 u\24\28large\29 + *,
		.\32 u\24\28large\29 + *,
		.\31 u\24\28large\29 + * {
			clear: left;
		}

		.\-11u\28large\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28large\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28large\29 {
			margin-left: 75%;
		}

		.\-8u\28large\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28large\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28large\29 {
			margin-left: 50%;
		}

		.\-5u\28large\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28large\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28large\29 {
			margin-left: 25%;
		}

		.\-2u\28large\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28large\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 980px) {

		.row > * {
			padding: 0 0 0 1.5em;
		}

		.row {
			margin: 0 0 -1px -1.5em;
		}

		.row.uniform > * {
			padding: 1.5em 0 0 1.5em;
		}

		.row.uniform {
			margin: -1.5em 0 -1px -1.5em;
		}

		.row.\32 00\25 > * {
			padding: 0 0 0 3em;
		}

		.row.\32 00\25 {
			margin: 0 0 -1px -3em;
		}

		.row.uniform.\32 00\25 > * {
			padding: 3em 0 0 3em;
		}

		.row.uniform.\32 00\25 {
			margin: -3em 0 -1px -3em;
		}

		.row.\31 50\25 > * {
			padding: 0 0 0 2.25em;
		}

		.row.\31 50\25 {
			margin: 0 0 -1px -2.25em;
		}

		.row.uniform.\31 50\25 > * {
			padding: 2.25em 0 0 2.25em;
		}

		.row.uniform.\31 50\25 {
			margin: -2.25em 0 -1px -2.25em;
		}

		.row.\35 0\25 > * {
			padding: 0 0 0 0.75em;
		}

		.row.\35 0\25 {
			margin: 0 0 -1px -0.75em;
		}

		.row.uniform.\35 0\25 > * {
			padding: 0.75em 0 0 0.75em;
		}

		.row.uniform.\35 0\25 {
			margin: -0.75em 0 -1px -0.75em;
		}

		.row.\32 5\25 > * {
			padding: 0 0 0 0.375em;
		}

		.row.\32 5\25 {
			margin: 0 0 -1px -0.375em;
		}

		.row.uniform.\32 5\25 > * {
			padding: 0.375em 0 0 0.375em;
		}

		.row.uniform.\32 5\25 {
			margin: -0.375em 0 -1px -0.375em;
		}

		.\31 2u\28medium\29, .\31 2u\24\28medium\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28medium\29, .\31 1u\24\28medium\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28medium\29, .\31 0u\24\28medium\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28medium\29, .\39 u\24\28medium\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28medium\29, .\38 u\24\28medium\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28medium\29, .\37 u\24\28medium\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28medium\29, .\36 u\24\28medium\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28medium\29, .\35 u\24\28medium\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28medium\29, .\34 u\24\28medium\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28medium\29, .\33 u\24\28medium\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28medium\29, .\32 u\24\28medium\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28medium\29, .\31 u\24\28medium\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28medium\29 + *,
		.\31 1u\24\28medium\29 + *,
		.\31 0u\24\28medium\29 + *,
		.\39 u\24\28medium\29 + *,
		.\38 u\24\28medium\29 + *,
		.\37 u\24\28medium\29 + *,
		.\36 u\24\28medium\29 + *,
		.\35 u\24\28medium\29 + *,
		.\34 u\24\28medium\29 + *,
		.\33 u\24\28medium\29 + *,
		.\32 u\24\28medium\29 + *,
		.\31 u\24\28medium\29 + * {
			clear: left;
		}

		.\-11u\28medium\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28medium\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28medium\29 {
			margin-left: 75%;
		}

		.\-8u\28medium\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28medium\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28medium\29 {
			margin-left: 50%;
		}

		.\-5u\28medium\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28medium\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28medium\29 {
			margin-left: 25%;
		}

		.\-2u\28medium\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28medium\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 736px) {

		.row > * {
			padding: 0 0 0 1.25em;
		}

		.row {
			margin: 0 0 -1px -1.25em;
		}

		.row.uniform > * {
			padding: 1.25em 0 0 1.25em;
		}

		.row.uniform {
			margin: -1.25em 0 -1px -1.25em;
		}

		.row.\32 00\25 > * {
			padding: 0 0 0 2.5em;
		}

		.row.\32 00\25 {
			margin: 0 0 -1px -2.5em;
		}

		.row.uniform.\32 00\25 > * {
			padding: 2.5em 0 0 2.5em;
		}

		.row.uniform.\32 00\25 {
			margin: -2.5em 0 -1px -2.5em;
		}

		.row.\31 50\25 > * {
			padding: 0 0 0 1.875em;
		}

		.row.\31 50\25 {
			margin: 0 0 -1px -1.875em;
		}

		.row.uniform.\31 50\25 > * {
			padding: 1.875em 0 0 1.875em;
		}

		.row.uniform.\31 50\25 {
			margin: -1.875em 0 -1px -1.875em;
		}

		.row.\35 0\25 > * {
			padding: 0 0 0 0.625em;
		}

		.row.\35 0\25 {
			margin: 0 0 -1px -0.625em;
		}

		.row.uniform.\35 0\25 > * {
			padding: 0.625em 0 0 0.625em;
		}

		.row.uniform.\35 0\25 {
			margin: -0.625em 0 -1px -0.625em;
		}

		.row.\32 5\25 > * {
			padding: 0 0 0 0.3125em;
		}

		.row.\32 5\25 {
			margin: 0 0 -1px -0.3125em;
		}

		.row.uniform.\32 5\25 > * {
			padding: 0.3125em 0 0 0.3125em;
		}

		.row.uniform.\32 5\25 {
			margin: -0.3125em 0 -1px -0.3125em;
		}

		.\31 2u\28small\29, .\31 2u\24\28small\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28small\29, .\31 1u\24\28small\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28small\29, .\31 0u\24\28small\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28small\29, .\39 u\24\28small\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28small\29, .\38 u\24\28small\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28small\29, .\37 u\24\28small\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28small\29, .\36 u\24\28small\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28small\29, .\35 u\24\28small\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28small\29, .\34 u\24\28small\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28small\29, .\33 u\24\28small\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28small\29, .\32 u\24\28small\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28small\29, .\31 u\24\28small\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28small\29 + *,
		.\31 1u\24\28small\29 + *,
		.\31 0u\24\28small\29 + *,
		.\39 u\24\28small\29 + *,
		.\38 u\24\28small\29 + *,
		.\37 u\24\28small\29 + *,
		.\36 u\24\28small\29 + *,
		.\35 u\24\28small\29 + *,
		.\34 u\24\28small\29 + *,
		.\33 u\24\28small\29 + *,
		.\32 u\24\28small\29 + *,
		.\31 u\24\28small\29 + * {
			clear: left;
		}

		.\-11u\28small\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28small\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28small\29 {
			margin-left: 75%;
		}

		.\-8u\28small\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28small\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28small\29 {
			margin-left: 50%;
		}

		.\-5u\28small\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28small\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28small\29 {
			margin-left: 25%;
		}

		.\-2u\28small\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28small\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 480px) {

		.row > * {
			padding: 0 0 0 1.25em;
		}

		.row {
			margin: 0 0 -1px -1.25em;
		}

		.row.uniform > * {
			padding: 1.25em 0 0 1.25em;
		}

		.row.uniform {
			margin: -1.25em 0 -1px -1.25em;
		}

		.row.\32 00\25 > * {
			padding: 0 0 0 2.5em;
		}

		.row.\32 00\25 {
			margin: 0 0 -1px -2.5em;
		}

		.row.uniform.\32 00\25 > * {
			padding: 2.5em 0 0 2.5em;
		}

		.row.uniform.\32 00\25 {
			margin: -2.5em 0 -1px -2.5em;
		}

		.row.\31 50\25 > * {
			padding: 0 0 0 1.875em;
		}

		.row.\31 50\25 {
			margin: 0 0 -1px -1.875em;
		}

		.row.uniform.\31 50\25 > * {
			padding: 1.875em 0 0 1.875em;
		}

		.row.uniform.\31 50\25 {
			margin: -1.875em 0 -1px -1.875em;
		}

		.row.\35 0\25 > * {
			padding: 0 0 0 0.625em;
		}

		.row.\35 0\25 {
			margin: 0 0 -1px -0.625em;
		}

		.row.uniform.\35 0\25 > * {
			padding: 0.625em 0 0 0.625em;
		}

		.row.uniform.\35 0\25 {
			margin: -0.625em 0 -1px -0.625em;
		}

		.row.\32 5\25 > * {
			padding: 0 0 0 0.3125em;
		}

		.row.\32 5\25 {
			margin: 0 0 -1px -0.3125em;
		}

		.row.uniform.\32 5\25 > * {
			padding: 0.3125em 0 0 0.3125em;
		}

		.row.uniform.\32 5\25 {
			margin: -0.3125em 0 -1px -0.3125em;
		}

		.\31 2u\28xsmall\29, .\31 2u\24\28xsmall\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28xsmall\29, .\31 1u\24\28xsmall\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28xsmall\29, .\31 0u\24\28xsmall\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28xsmall\29, .\39 u\24\28xsmall\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28xsmall\29, .\38 u\24\28xsmall\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28xsmall\29, .\37 u\24\28xsmall\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28xsmall\29, .\36 u\24\28xsmall\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28xsmall\29, .\35 u\24\28xsmall\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28xsmall\29, .\34 u\24\28xsmall\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28xsmall\29, .\33 u\24\28xsmall\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28xsmall\29, .\32 u\24\28xsmall\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28xsmall\29, .\31 u\24\28xsmall\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28xsmall\29 + *,
		.\31 1u\24\28xsmall\29 + *,
		.\31 0u\24\28xsmall\29 + *,
		.\39 u\24\28xsmall\29 + *,
		.\38 u\24\28xsmall\29 + *,
		.\37 u\24\28xsmall\29 + *,
		.\36 u\24\28xsmall\29 + *,
		.\35 u\24\28xsmall\29 + *,
		.\34 u\24\28xsmall\29 + *,
		.\33 u\24\28xsmall\29 + *,
		.\32 u\24\28xsmall\29 + *,
		.\31 u\24\28xsmall\29 + * {
			clear: left;
		}

		.\-11u\28xsmall\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28xsmall\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28xsmall\29 {
			margin-left: 75%;
		}

		.\-8u\28xsmall\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28xsmall\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28xsmall\29 {
			margin-left: 50%;
		}

		.\-5u\28xsmall\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28xsmall\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28xsmall\29 {
			margin-left: 25%;
		}

		.\-2u\28xsmall\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28xsmall\29 {
			margin-left: 8.33333%;
		}

	}

/* Basic */

	@-ms-viewport {
		width: device-width;
	}

	body {
		-ms-overflow-style: scrollbar;
	}

	@media screen and (max-width: 480px) {

		html, body {
			min-width: 320px;
		}

	}

	body {
		background: #fff;
	}

		body.is-loading *, body.is-loading *:before, body.is-loading *:after {
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
			-moz-transition: none !important;
			-webkit-transition: none !important;
			-ms-transition: none !important;
			transition: none !important;
		}

/* Type */

	body {
		background-color: #fff;
		color: #444;
	}

	body, input, select {
		font-family: "Raleway", Arial, Helvetica, sans-serif;
		font-size: 14pt;
		font-weight: 300;
		letter-spacing: 0.09em;
		line-height: 3em;
	}

		@media screen and (max-width: 1680px) {

			body, input, select {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 1280px) {

			body, input, select {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 980px) {

			body, input, select {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 736px) {

			body, input, select {
				font-size: 11pt;
			}

		}

		@media screen and (max-width: 480px) {

			body, input, select {
				font-size: 11pt;
			}

		}

	a {
		text-decoration: underline;
	}

		a:hover {
			text-decoration: none;
		}

	strong, b {
		font-weight: 700;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2em 0;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 300;
		line-height: 1em;
		margin: 0 0 1em 0;
		text-transform: uppercase;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
		}

	h2 {
		font-size: 1.6em;
		line-height: 1.5em;
	}

	h3 {
		font-size: 1.2em;
		line-height: 1.5em;
	}

	h4 {
		font-size: 1em;
		line-height: 1.5em;
	}

	h5 {
		font-size: 0.9em;
		line-height: 1.5em;
	}

	h6 {
		font-size: 0.7em;
		line-height: 1.5em;
	}

	sub {
		font-size: 0.8em;
		position: relative;
		top: 0.5em;
	}

	sup {
		font-size: 0.8em;
		position: relative;
		top: -0.5em;
	}

	blockquote {
		border-left: solid 4px;
		font-style: italic;
		margin: 0 0 2em 0;
		padding: 0.5em 0 0.5em 2em;
	}

	code {
		border-radius: 0;
		border: solid 1px;
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0.25em;
		padding: 0.25em 0.65em;
	}

	pre {
		-webkit-overflow-scrolling: touch;
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0 2em 0;
	}

		pre code {
			display: block;
			line-height: 1.75em;
			padding: 1em 1.5em;
			overflow-x: auto;
		}

	hr {
		border: 0;
		border-bottom: solid 1px;
		margin: 2em 0;
	}

		hr.major {
			margin: 3em 0;
		}

	.align-left {
		text-align: left;
	}

	.align-center {
		text-align: center;
	}

	.align-right {
		text-align: right;
	}

	input, select {
		color: #555;
	}

	a {
		color: #00cdcf;
	}

	strong, b {
		color: #555;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #555;
	}

	blockquote {
		border-left-color: #e3e3e3;
	}

	code {
		background: rgba(144, 144, 144, 0.075);
		border-color: #e3e3e3;
	}

	hr {
		border-bottom-color: #e3e3e3;
	}

/* Box */

	.box {
		border-radius: 0;
		border: solid 1px;
		margin-bottom: 2em;
		padding: 1.5em;
	}

		.box > :last-child,
		.box > :last-child > :last-child,
		.box > :last-child > :last-child > :last-child {
			margin-bottom: 0;
		}

		.box.alt {
			border: 0;
			border-radius: 0;
			padding: 0;
		}

	.box {
		border-color: #e3e3e3;
	}

/* Button */

	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
	.button {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		border-radius: 0;
		border: 0;
		cursor: pointer;
		display: inline-block;
		height: 2.85em;
		line-height: 2.95em;
		padding: 0 1.5em;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		white-space: nowrap;
	}

		input[type="submit"].icon,
		input[type="reset"].icon,
		input[type="button"].icon,
		button.icon,
		.button.icon {
			padding-left: 1.35em;
		}

			input[type="submit"].icon:before,
			input[type="reset"].icon:before,
			input[type="button"].icon:before,
			button.icon:before,
			.button.icon:before {
				margin-right: 0.5em;
			}

		input[type="submit"].fit,
		input[type="reset"].fit,
		input[type="button"].fit,
		button.fit,
		.button.fit {
			display: block;
			margin: 0 0 1em 0;
			width: 100%;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		button.small,
		.button.small {
			font-size: 0.8em;
		}

		input[type="submit"].big,
		input[type="reset"].big,
		input[type="button"].big,
		button.big,
		.button.big {
			font-size: 1.35em;
		}

		input[type="submit"].disabled, input[type="submit"]:disabled,
		input[type="reset"].disabled,
		input[type="reset"]:disabled,
		input[type="button"].disabled,
		input[type="button"]:disabled,
		button.disabled,
		button:disabled,
		.button.disabled,
		.button:disabled {
			-moz-pointer-events: none;
			-webkit-pointer-events: none;
			-ms-pointer-events: none;
			pointer-events: none;
			opacity: 0.25;
		}

		@media screen and (max-width: 480px) {

			input[type="submit"],
			input[type="reset"],
			input[type="button"],
			button,
			.button {
				padding: 0;
			}

		}

	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
	.button {
		background-color: #f7f7f7;
		color: #555 !important;
	}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		button:hover,
		.button:hover {
			background-color: white;
		}

		input[type="submit"]:active,
		input[type="reset"]:active,
		input[type="button"]:active,
		button:active,
		.button:active {
			background-color: #eaeaea;
		}

		input[type="submit"].alt,
		input[type="reset"].alt,
		input[type="button"].alt,
		button.alt,
		.button.alt {
			background-color: transparent;
			box-shadow: inset 0 0 0 2px #e3e3e3;
			color: #555 !important;
		}

			input[type="submit"].alt:hover,
			input[type="reset"].alt:hover,
			input[type="button"].alt:hover,
			button.alt:hover,
			.button.alt:hover {
				background-color: rgba(144, 144, 144, 0.075);
			}

			input[type="submit"].alt:active,
			input[type="reset"].alt:active,
			input[type="button"].alt:active,
			button.alt:active,
			.button.alt:active {
				background-color: rgba(144, 144, 144, 0.2);
			}

			input[type="submit"].alt.icon:before,
			input[type="reset"].alt.icon:before,
			input[type="button"].alt.icon:before,
			button.alt.icon:before,
			.button.alt.icon:before {
				color: #bbb;
			}

		input[type="submit"].special,
		input[type="reset"].special,
		input[type="button"].special,
		button.special,
		.button.special {
			background-color: #00cdcf;
			color: #ffffff !important;
		}

			input[type="submit"].special:hover,
			input[type="reset"].special:hover,
			input[type="button"].special:hover,
			button.special:hover,
			.button.special:hover {
				background-color: #00e6e9;
			}

			input[type="submit"].special:active,
			input[type="reset"].special:active,
			input[type="button"].special:active,
			button.special:active,
			.button.special:active {
				background-color: #00b4b5;
			}

/* Form */

	form {
		margin: 0 0 2em 0;
	}

	.grid-form {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-justify-content: space-between;
		-webkit-justify-content: space-between;
		-ms-justify-content: space-between;
		justify-content: space-between;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}

		.grid-form .form-control {
			width: 100%;
			margin-bottom: 2em;
		}

			.grid-form .form-control.narrow {
				width: 47%;
			}

		.grid-form .actions {
			margin-bottom: 0;
			width: 100%;
		}

		@media screen and (max-width: 736px) {

			.grid-form .form-control.narrow {
				margin-bottom: 1em;
				width: 100%;
			}

		}

	label {
		display: block;
		font-size: 0.9em;
		margin: 0 0 0.2em 0;
		text-transform: uppercase;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select {
		/* -moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none; */
		border-radius: 0;
		border: none;
		border: solid 1px;
		color: inherit;
		display: block;
		outline: 0;
		padding: 0 1em;
		text-decoration: none;
		width: 100%;
	}

		input[type="text"]:invalid,
		input[type="password"]:invalid,
		input[type="email"]:invalid,
		select:invalid {
			box-shadow: none;
		}

	.select-wrapper {
		text-decoration: none;
		display: block;
		position: relative;
	}

		.select-wrapper:before {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			font-family: FontAwesome;
			font-style: normal;
			font-weight: normal;
			text-transform: none !important;
		}

		.select-wrapper:before {
			content: '\f078';
			display: block;
			height: 2.75em;
			line-height: 2.75em;
			pointer-events: none;
			position: absolute;
			right: 0;
			text-align: center;
			top: 0;
			width: 2.75em;
		}

		.select-wrapper select::-ms-expand {
			display: none;
		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select {
		height: 2.75em;
		text-align: center;
	}

	input[type="checkbox"],
	input[type="radio"] {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		display: block;
		float: left;
		margin-right: -2em;
		opacity: 0;
		width: 1em;
		z-index: -1;
	}

		input[type="checkbox"] + label,
		input[type="radio"] + label {
			text-decoration: none;
			cursor: pointer;
			display: inline-block;
			font-size: 1em;
			font-weight: 300;
			padding-left: 2.4em;
			padding-right: 0.75em;
			position: relative;
		}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;
			}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				border-radius: 0;
				border: solid 1px;
				content: '';
				display: inline-block;
				height: 1.65em;
				left: 0;
				line-height: 1.58125em;
				position: absolute;
				text-align: center;
				top: 0;
				width: 1.65em;
			}

		input[type="checkbox"]:checked + label:before,
		input[type="radio"]:checked + label:before {
			content: '\f00c';
		}

	input[type="checkbox"] + label:before {
		border-radius: 0;
	}

	input[type="radio"] + label:before {
		border-radius: 100%;
	}

	::-webkit-input-placeholder {
		opacity: 1.0;
	}

	:-moz-placeholder {
		opacity: 1.0;
	}

	::-moz-placeholder {
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		opacity: 1.0;
	}

	.formerize-placeholder {
		opacity: 1.0;
	}

	label {
		color: #555;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select {
		background: rgba(144, 144, 144, 0.075);
		border-color: #e3e3e3;
	}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		select:focus {
			border-color: #00cdcf;
			box-shadow: 0 0 0 1px #00cdcf;
		}

	.select-wrapper:before {
		color: #e3e3e3;
	}

	input[type="checkbox"] + label,
	input[type="radio"] + label {
		color: #444;
	}

		input[type="checkbox"] + label:before,
		input[type="radio"] + label:before {
			background: rgba(144, 144, 144, 0.075);
			border-color: #e3e3e3;
		}

	input[type="checkbox"]:checked + label:before,
	input[type="radio"]:checked + label:before {
		background-color: #00cdcf;
		border-color: #00cdcf;
		color: #ffffff;
	}

	input[type="checkbox"]:focus + label:before,
	input[type="radio"]:focus + label:before {
		border-color: #00cdcf;
		box-shadow: 0 0 0 1px #00cdcf;
	}

	::-webkit-input-placeholder {
		color: #bbb !important;
	}

	:-moz-placeholder {
		color: #bbb !important;
	}

	::-moz-placeholder {
		color: #bbb !important;
	}

	:-ms-input-placeholder {
		color: #bbb !important;
	}

	.formerize-placeholder {
		color: #bbb !important;
	}

/* Icon */

	.icon {
		text-decoration: none;
		border-bottom: none;
		position: relative;
	}

		.icon:before {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			font-family: FontAwesome;
			font-style: normal;
			font-weight: normal;
			text-transform: none !important;
		}

		.icon > .label {
			display: none;
		}

/* Image */

	.image {
		border-radius: 0;
		border: 0;
		display: inline-block;
		position: relative;
	}

		.image img {
			border-radius: 0;
			display: block;
		}

		.image.left, .image.right {
			max-width: 40%;
		}

			.image.left img, .image.right img {
				width: 100%;
			}

		.image.left {
			float: left;
			margin: 0 1.5em 1em 0;
			top: 0.25em;
		}

		.image.right {
			float: right;
			margin: 0 0 1em 1.5em;
			top: 0.25em;
		}

		.image.fit {
			display: block;
			margin: 0 0 2em 0;
			width: 100%;
		}

			.image.fit img {
				width: 100%;
			}

		.image.main {
			display: block;
			margin: 0 0 3em 0;
			width: 100%;
		}

			.image.main img {
				width: 100%;
			}

/* List */

	ol {
		list-style: decimal;
		margin: 0 0 2em 0;
		padding-left: 1.25em;
	}

		ol li {
			padding-left: 0.25em;
		}

	ul {
		list-style: disc;
		margin: 0 0 2em 0;
		padding-left: 1em;
	}

		ul li {
			padding-left: 0.5em;
		}

		ul.alt {
			list-style: none;
			padding-left: 0;
		}

			ul.alt li {
				border-top: solid 1px;
				padding: 0.5em 0;
			}

				ul.alt li:first-child {
					border-top: 0;
					padding-top: 0;
				}

		ul.icons {
			cursor: default;
			list-style: none;
			padding-left: 0;
		}

			ul.icons li {
				display: inline-block;
				padding: 0 1em 0 0;
			}

				ul.icons li:last-child {
					padding-right: 0;
				}

				ul.icons li .icon:before {
					font-size: 2em;
				}

		ul.actions {
			cursor: default;
			list-style: none;
			padding-left: 0;
		}

			ul.actions li {
				display: inline-block;
				padding: 0 1em 0 0;
				vertical-align: middle;
			}

				ul.actions li:last-child {
					padding-right: 0;
				}

			ul.actions.small li {
				padding: 0 0.5em 0 0;
			}

			ul.actions.vertical li {
				display: block;
				padding: 1em 0 0 0;
			}

				ul.actions.vertical li:first-child {
					padding-top: 0;
				}

				ul.actions.vertical li > * {
					margin-bottom: 0;
				}

			ul.actions.vertical.small li {
				padding: 0.5em 0 0 0;
			}

				ul.actions.vertical.small li:first-child {
					padding-top: 0;
				}

			ul.actions.fit {
				display: table;
				margin-left: -1em;
				padding: 0;
				table-layout: fixed;
				width: calc(100% + 1em);
			}

				ul.actions.fit li {
					display: table-cell;
					padding: 0 0 0 1em;
				}

					ul.actions.fit li > * {
						margin-bottom: 0;
					}

				ul.actions.fit.small {
					margin-left: -0.5em;
					width: calc(100% + 0.5em);
				}

					ul.actions.fit.small li {
						padding: 0 0 0 0.5em;
					}

			@media screen and (max-width: 480px) {

				ul.actions {
					margin: 0 0 2em 0;
				}

					ul.actions li {
						padding: 1em 0 0 0;
						display: block;
						text-align: center;
						width: 100%;
					}

						ul.actions li:first-child {
							padding-top: 0;
						}

						ul.actions li > * {
							width: 100%;
							margin: 0 !important;
						}

							ul.actions li > *.icon:before {
								margin-left: -2em;
							}

					ul.actions.small li {
						padding: 0.5em 0 0 0;
					}

						ul.actions.small li:first-child {
							padding-top: 0;
						}

			}

	dl {
		margin: 0 0 2em 0;
	}

		dl dt {
			display: block;
			font-weight: 700;
			margin: 0 0 1em 0;
		}

		dl dd {
			margin-left: 2em;
		}

	ul.alt li {
		border-top-color: #e3e3e3;
	}

/* Section/Article */

	section.special, article.special, header.special {
		text-align: center;
	}

	header {
		margin-bottom: 1em;
	}

		header p {
			position: relative;
			margin: 0 0 1.5em 0;
			text-transform: uppercase;
		}

		header h2, header h3 {
			display: inline-block;
			padding-bottom: 0.4em;
			border-bottom-style: double;
			border-bottom-width: 4px;
		}

		header h2 + p {
			font-size: 1.25em;
			margin-top: -0.5em;
			line-height: 1.5em;
		}

		header h3 + p {
			font-size: 1.1em;
			line-height: 1.5em;
		}

		header h4 + p,
		header h5 + p,
		header h6 + p {
			font-size: 0.9em;
			line-height: 1.5em;
		}

		header.major {
			margin-bottom: 4em;
		}

		@media screen and (max-width: 1280px) {

			header.major {
				margin-bottom: 2em;
			}

		}

		@media screen and (max-width: 736px) {

			header.major {
				margin-bottom: 1.5em;
			}

		}

		@media screen and (max-width: 480px) {

			header.major {
				margin-bottom: 1em;
			}

		}

	header h2, header h3 {
		border-bottom-color: #e3e3e3;
	}

	header p {
		color: #bbb;
	}

/* Table */

	.table-wrapper {
		-webkit-overflow-scrolling: touch;
		overflow-x: auto;
	}

	table {
		margin: 0 0 2em 0;
		width: 100%;
	}

		table tbody tr {
			border: solid 1px;
			border-left: 0;
			border-right: 0;
		}

		table td {
			padding: 0.75em 0.75em;
		}

		table th {
			font-size: 0.9em;
			font-weight: 700;
			padding: 0 0.75em 0.75em 0.75em;
			text-align: left;
		}

		table thead {
			border-bottom: solid 2px;
		}

		table tfoot {
			border-top: solid 2px;
		}

		table.alt {
			border-collapse: separate;
		}

			table.alt tbody tr td {
				border: solid 1px;
				border-left-width: 0;
				border-top-width: 0;
			}

				table.alt tbody tr td:first-child {
					border-left-width: 1px;
				}

			table.alt tbody tr:first-child td {
				border-top-width: 1px;
			}

			table.alt thead {
				border-bottom: 0;
			}

			table.alt tfoot {
				border-top: 0;
			}

	table tbody tr {
		border-color: #e3e3e3;
	}

		table tbody tr:nth-child(2n + 1) {
			background-color: rgba(144, 144, 144, 0.075);
		}

	table th {
		color: #555;
	}

	table thead {
		border-bottom-color: #e3e3e3;
	}

	table tfoot {
		border-top-color: #e3e3e3;
	}

	table.alt tbody tr td {
		border-color: #e3e3e3;
	}

/* Feature */

	.features {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-moz-justify-content: center;
		-webkit-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		margin-bottom: 2em;
	}

	.feature {
		padding: 2em 2em 0.1em 2em;
		border-style: solid;
		border-width: 1px;
		margin-left: -1px;
		margin-top: -1px;
		width: 33.33333%;
	}

		.feature .fa {
			font-size: 2.8em;
			margin-bottom: 0.7em;
		}

		@media screen and (max-width: 1280px) {

			.feature {
				padding: 2em 1.5em 0.1em 1.5em;
			}

		}

		@media screen and (max-width: 736px) {

			.feature {
				padding: 2em 1em 0.1em 1em;
				width: 50%;
			}

		}

		@media screen and (max-width: 480px) {

			.feature {
				padding: 2em 0.5em 0.1em 0.5em;
				width: 100%;
			}

		}

	.feature {
		border-color: #e3e3e3;
	}

		.feature .fa {
			color: #00cdcf;
		}

/* Wrapper */

	.wrapper {
		padding: 6em 0 4em 0;
		position: relative;
	}

		.wrapper > .inner {
			margin: 0 auto;
			width: 65em;
		}

			.wrapper > .inner.narrow {
				width: 35em;
			}

		.wrapper.style1 {
			background-color: #00cdcf;
			color: #ffffff;
		}

			.wrapper.style1 input, .wrapper.style1 select {
				color: #ffffff;
			}

			.wrapper.style1 a {
				color: #00cdcf;
			}

			.wrapper.style1 strong, .wrapper.style1 b {
				color: #ffffff;
			}

			.wrapper.style1 h1, .wrapper.style1 h2, .wrapper.style1 h3, .wrapper.style1 h4, .wrapper.style1 h5, .wrapper.style1 h6 {
				color: #ffffff;
			}

			.wrapper.style1 blockquote {
				border-left-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 code {
				background: rgba(255, 255, 255, 0.075);
				border-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 hr {
				border-bottom-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 .box {
				border-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 input[type="submit"],
			.wrapper.style1 input[type="reset"],
			.wrapper.style1 input[type="button"],
			.wrapper.style1 button,
			.wrapper.style1 .button {
				background-color: #f7f7f7;
				color: #555 !important;
			}

				.wrapper.style1 input[type="submit"]:hover,
				.wrapper.style1 input[type="reset"]:hover,
				.wrapper.style1 input[type="button"]:hover,
				.wrapper.style1 button:hover,
				.wrapper.style1 .button:hover {
					background-color: white;
				}

				.wrapper.style1 input[type="submit"]:active,
				.wrapper.style1 input[type="reset"]:active,
				.wrapper.style1 input[type="button"]:active,
				.wrapper.style1 button:active,
				.wrapper.style1 .button:active {
					background-color: #eaeaea;
				}

				.wrapper.style1 input[type="submit"].alt,
				.wrapper.style1 input[type="reset"].alt,
				.wrapper.style1 input[type="button"].alt,
				.wrapper.style1 button.alt,
				.wrapper.style1 .button.alt {
					background-color: transparent;
					box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
					color: #ffffff !important;
				}

					.wrapper.style1 input[type="submit"].alt:hover,
					.wrapper.style1 input[type="reset"].alt:hover,
					.wrapper.style1 input[type="button"].alt:hover,
					.wrapper.style1 button.alt:hover,
					.wrapper.style1 .button.alt:hover {
						background-color: rgba(255, 255, 255, 0.075);
					}

					.wrapper.style1 input[type="submit"].alt:active,
					.wrapper.style1 input[type="reset"].alt:active,
					.wrapper.style1 input[type="button"].alt:active,
					.wrapper.style1 button.alt:active,
					.wrapper.style1 .button.alt:active {
						background-color: rgba(255, 255, 255, 0.2);
					}

					.wrapper.style1 input[type="submit"].alt.icon:before,
					.wrapper.style1 input[type="reset"].alt.icon:before,
					.wrapper.style1 input[type="button"].alt.icon:before,
					.wrapper.style1 button.alt.icon:before,
					.wrapper.style1 .button.alt.icon:before {
						color: #99ebeb;
					}

				.wrapper.style1 input[type="submit"].special,
				.wrapper.style1 input[type="reset"].special,
				.wrapper.style1 input[type="button"].special,
				.wrapper.style1 button.special,
				.wrapper.style1 .button.special {
					background-color: #009a9c;
					color: #fff !important;
				}

					.wrapper.style1 input[type="submit"].special:hover,
					.wrapper.style1 input[type="reset"].special:hover,
					.wrapper.style1 input[type="button"].special:hover,
					.wrapper.style1 button.special:hover,
					.wrapper.style1 .button.special:hover {
						background-color: #00b4b5;
					}

					.wrapper.style1 input[type="submit"].special:active,
					.wrapper.style1 input[type="reset"].special:active,
					.wrapper.style1 input[type="button"].special:active,
					.wrapper.style1 button.special:active,
					.wrapper.style1 .button.special:active {
						background-color: #008183;
					}

			.wrapper.style1 label {
				color: #ffffff;
			}

			.wrapper.style1 input[type="text"],
			.wrapper.style1 input[type="password"],
			.wrapper.style1 input[type="email"],
			.wrapper.style1 select {
				background: rgba(255, 255, 255, 0.075);
				border-color: rgba(255, 255, 255, 0.25);
			}

				.wrapper.style1 input[type="text"]:focus,
				.wrapper.style1 input[type="password"]:focus,
				.wrapper.style1 input[type="email"]:focus,
				.wrapper.style1 select:focus {
					border-color: #00cdcf;
					box-shadow: 0 0 0 1px #00cdcf;
				}

			.wrapper.style1 .select-wrapper:before {
				color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 input[type="checkbox"] + label,
			.wrapper.style1 input[type="radio"] + label {
				color: #ffffff;
			}

				.wrapper.style1 input[type="checkbox"] + label:before,
				.wrapper.style1 input[type="radio"] + label:before {
					background: rgba(255, 255, 255, 0.075);
					border-color: rgba(255, 255, 255, 0.25);
				}

			.wrapper.style1 input[type="checkbox"]:checked + label:before,
			.wrapper.style1 input[type="radio"]:checked + label:before {
				background-color: #00cdcf;
				border-color: #00cdcf;
				color: #ffffff;
			}

			.wrapper.style1 input[type="checkbox"]:focus + label:before,
			.wrapper.style1 input[type="radio"]:focus + label:before {
				border-color: #00cdcf;
				box-shadow: 0 0 0 1px #00cdcf;
			}

			.wrapper.style1 ::-webkit-input-placeholder {
				color: #99ebeb !important;
			}

			.wrapper.style1 :-moz-placeholder {
				color: #99ebeb !important;
			}

			.wrapper.style1 ::-moz-placeholder {
				color: #99ebeb !important;
			}

			.wrapper.style1 :-ms-input-placeholder {
				color: #99ebeb !important;
			}

			.wrapper.style1 .formerize-placeholder {
				color: #99ebeb !important;
			}

			.wrapper.style1 ul.alt li {
				border-top-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 header h2, .wrapper.style1 header h3 {
				border-bottom-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 header p {
				color: #99ebeb;
			}

			.wrapper.style1 table tbody tr {
				border-color: rgba(255, 255, 255, 0.25);
			}

				.wrapper.style1 table tbody tr:nth-child(2n + 1) {
					background-color: rgba(255, 255, 255, 0.075);
				}

			.wrapper.style1 table th {
				color: #ffffff;
			}

			.wrapper.style1 table thead {
				border-bottom-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 table tfoot {
				border-top-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 table.alt tbody tr td {
				border-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 .feature {
				border-color: rgba(255, 255, 255, 0.25);
			}

				.wrapper.style1 .feature .fa {
					color: #009a9c;
				}

		.wrapper.style2 {
			background-color: #f7f7f7;
			color: black;
			font-weight: bold;
		}

			.wrapper.style2 input, .wrapper.style2 select {
				color: #555;
			}

			.wrapper.style2 a {
				color: #00cdcf;
			}

			.wrapper.style2 strong, .wrapper.style2 b {
				color: #555;
			}

			.wrapper.style2 h1, .wrapper.style2 h2, .wrapper.style2 h3, .wrapper.style2 h4, .wrapper.style2 h5, .wrapper.style2 h6 {
				color: #555;
			}

			.wrapper.style2 blockquote {
				border-left-color: #ddd;
			}

			.wrapper.style2 code {
				background: #fff;
				border-color: #ddd;
			}

			.wrapper.style2 hr {
				border-bottom-color: #ddd;
			}

			.wrapper.style2 .box {
				border-color: #ddd;
			}

			.wrapper.style2 input[type="submit"],
			.wrapper.style2 input[type="reset"],
			.wrapper.style2 input[type="button"],
			.wrapper.style2 button,
			.wrapper.style2 .button {
				background-color: #555;
				color: #f7f7f7 !important;
			}

				.wrapper.style2 input[type="submit"].alt,
				.wrapper.style2 input[type="reset"].alt,
				.wrapper.style2 input[type="button"].alt,
				.wrapper.style2 button.alt,
				.wrapper.style2 .button.alt {
					background-color: transparent;
					box-shadow: inset 0 0 0 2px #ddd;
					color: #555 !important;
				}

					.wrapper.style2 input[type="submit"].alt:hover,
					.wrapper.style2 input[type="reset"].alt:hover,
					.wrapper.style2 input[type="button"].alt:hover,
					.wrapper.style2 button.alt:hover,
					.wrapper.style2 .button.alt:hover {
						background-color: #fff;
					}

					.wrapper.style2 input[type="submit"].alt:active,
					.wrapper.style2 input[type="reset"].alt:active,
					.wrapper.style2 input[type="button"].alt:active,
					.wrapper.style2 button.alt:active,
					.wrapper.style2 .button.alt:active {
						background-color: rgba(144, 144, 144, 0.2);
					}

					.wrapper.style2 input[type="submit"].alt.icon:before,
					.wrapper.style2 input[type="reset"].alt.icon:before,
					.wrapper.style2 input[type="button"].alt.icon:before,
					.wrapper.style2 button.alt.icon:before,
					.wrapper.style2 .button.alt.icon:before {
						color: #bbb;
					}

				.wrapper.style2 input[type="submit"].special,
				.wrapper.style2 input[type="reset"].special,
				.wrapper.style2 input[type="button"].special,
				.wrapper.style2 button.special,
				.wrapper.style2 .button.special {
					background-color: #00cdcf;
					color: #ffffff !important;
				}

					.wrapper.style2 input[type="submit"].special:hover,
					.wrapper.style2 input[type="reset"].special:hover,
					.wrapper.style2 input[type="button"].special:hover,
					.wrapper.style2 button.special:hover,
					.wrapper.style2 .button.special:hover {
						background-color: #00e6e9;
					}

					.wrapper.style2 input[type="submit"].special:active,
					.wrapper.style2 input[type="reset"].special:active,
					.wrapper.style2 input[type="button"].special:active,
					.wrapper.style2 button.special:active,
					.wrapper.style2 .button.special:active {
						background-color: #00b4b5;
					}

			.wrapper.style2 label {
				color: #555;
			}

			.wrapper.style2 input[type="text"],
			.wrapper.style2 input[type="password"],
			.wrapper.style2 input[type="email"],
			.wrapper.style2 select {
				background: #fff;
				border-color: #ddd;
			}

				.wrapper.style2 input[type="text"]:focus,
				.wrapper.style2 input[type="password"]:focus,
				.wrapper.style2 input[type="email"]:focus,
				.wrapper.style2 select:focus {
					border-color: #00cdcf;
					box-shadow: 0 0 0 1px #00cdcf;
				}

			.wrapper.style2 .select-wrapper:before {
				color: #ddd;
			}

			.wrapper.style2 input[type="checkbox"] + label,
			.wrapper.style2 input[type="radio"] + label {
				color: #444;
			}

				.wrapper.style2 input[type="checkbox"] + label:before,
				.wrapper.style2 input[type="radio"] + label:before {
					background: #fff;
					border-color: #ddd;
				}

			.wrapper.style2 input[type="checkbox"]:checked + label:before,
			.wrapper.style2 input[type="radio"]:checked + label:before {
				background-color: #00cdcf;
				border-color: #00cdcf;
				color: #ffffff;
			}

			.wrapper.style2 input[type="checkbox"]:focus + label:before,
			.wrapper.style2 input[type="radio"]:focus + label:before {
				border-color: #00cdcf;
				box-shadow: 0 0 0 1px #00cdcf;
			}

			.wrapper.style2 ::-webkit-input-placeholder {
				color: #bbb !important;
			}

			.wrapper.style2 :-moz-placeholder {
				color: #bbb !important;
			}

			.wrapper.style2 ::-moz-placeholder {
				color: #bbb !important;
			}

			.wrapper.style2 :-ms-input-placeholder {
				color: #bbb !important;
			}

			.wrapper.style2 .formerize-placeholder {
				color: #bbb !important;
			}

			.wrapper.style2 ul.alt li {
				border-top-color: #ddd;
			}

			.wrapper.style2 header h2, .wrapper.style2 header h3 {
				border-bottom-color: #ddd;
			}

			.wrapper.style2 header p {
				color: #bbb;
			}

			.wrapper.style2 table tbody tr {
				border-color: #ddd;
			}

				.wrapper.style2 table tbody tr:nth-child(2n + 1) {
					background-color: #fff;
				}

			.wrapper.style2 table th {
				color: #555;
			}

			.wrapper.style2 table thead {
				border-bottom-color: #ddd;
			}

			.wrapper.style2 table tfoot {
				border-top-color: #ddd;
			}

			.wrapper.style2 table.alt tbody tr td {
				border-color: #ddd;
			}

			.wrapper.style2 .feature {
				border-color: #ddd;
			}

				.wrapper.style2 .feature .fa {
					color: #00cdcf;
				}

		.wrapper.style3 {
			background-color: #009a9c;
			color: #ddd;
		}

			.wrapper.style3 input, .wrapper.style3 select {
				color: #fff;
			}

			.wrapper.style3 a {
				color: #00cdcf;
			}

			.wrapper.style3 strong, .wrapper.style3 b {
				color: #fff;
			}

			.wrapper.style3 h1, .wrapper.style3 h2, .wrapper.style3 h3, .wrapper.style3 h4, .wrapper.style3 h5, .wrapper.style3 h6 {
				color: #fff;
			}

			.wrapper.style3 blockquote {
				border-left-color: #ddd;
			}

			.wrapper.style3 code {
				background: #00b4b5;
				border-color: #ddd;
			}

			.wrapper.style3 hr {
				border-bottom-color: #ddd;
			}

			.wrapper.style3 .box {
				border-color: #ddd;
			}

			.wrapper.style3 input[type="submit"],
			.wrapper.style3 input[type="reset"],
			.wrapper.style3 input[type="button"],
			.wrapper.style3 button,
			.wrapper.style3 .button {
				background-color: #f7f7f7;
				color: #555 !important;
			}

				.wrapper.style3 input[type="submit"]:hover,
				.wrapper.style3 input[type="reset"]:hover,
				.wrapper.style3 input[type="button"]:hover,
				.wrapper.style3 button:hover,
				.wrapper.style3 .button:hover {
					background-color: white;
				}

				.wrapper.style3 input[type="submit"]:active,
				.wrapper.style3 input[type="reset"]:active,
				.wrapper.style3 input[type="button"]:active,
				.wrapper.style3 button:active,
				.wrapper.style3 .button:active {
					background-color: #eaeaea;
				}

				.wrapper.style3 input[type="submit"].alt,
				.wrapper.style3 input[type="reset"].alt,
				.wrapper.style3 input[type="button"].alt,
				.wrapper.style3 button.alt,
				.wrapper.style3 .button.alt {
					background-color: transparent;
					box-shadow: inset 0 0 0 2px #ddd;
					color: #fff !important;
				}

					.wrapper.style3 input[type="submit"].alt:hover,
					.wrapper.style3 input[type="reset"].alt:hover,
					.wrapper.style3 input[type="button"].alt:hover,
					.wrapper.style3 button.alt:hover,
					.wrapper.style3 .button.alt:hover {
						background-color: #00b4b5;
					}

					.wrapper.style3 input[type="submit"].alt:active,
					.wrapper.style3 input[type="reset"].alt:active,
					.wrapper.style3 input[type="button"].alt:active,
					.wrapper.style3 button.alt:active,
					.wrapper.style3 .button.alt:active {
						background-color: rgba(144, 144, 144, 0.2);
					}

					.wrapper.style3 input[type="submit"].alt.icon:before,
					.wrapper.style3 input[type="reset"].alt.icon:before,
					.wrapper.style3 input[type="button"].alt.icon:before,
					.wrapper.style3 button.alt.icon:before,
					.wrapper.style3 .button.alt.icon:before {
						color: #00cdcf;
					}

				.wrapper.style3 input[type="submit"].special,
				.wrapper.style3 input[type="reset"].special,
				.wrapper.style3 input[type="button"].special,
				.wrapper.style3 button.special,
				.wrapper.style3 .button.special {
					background-color: #00cdcf;
					color: #ffffff !important;
				}

					.wrapper.style3 input[type="submit"].special:hover,
					.wrapper.style3 input[type="reset"].special:hover,
					.wrapper.style3 input[type="button"].special:hover,
					.wrapper.style3 button.special:hover,
					.wrapper.style3 .button.special:hover {
						background-color: #00e6e9;
					}

					.wrapper.style3 input[type="submit"].special:active,
					.wrapper.style3 input[type="reset"].special:active,
					.wrapper.style3 input[type="button"].special:active,
					.wrapper.style3 button.special:active,
					.wrapper.style3 .button.special:active {
						background-color: #00b4b5;
					}

			.wrapper.style3 label {
				color: #fff;
			}

			.wrapper.style3 input[type="text"],
			.wrapper.style3 input[type="password"],
			.wrapper.style3 input[type="email"],
			.wrapper.style3 select {
				background: #00b4b5;
				border-color: #ddd;
			}

				.wrapper.style3 input[type="text"]:focus,
				.wrapper.style3 input[type="password"]:focus,
				.wrapper.style3 input[type="email"]:focus,
				.wrapper.style3 select:focus {
					border-color: #00cdcf;
					box-shadow: 0 0 0 1px #00cdcf;
				}

			.wrapper.style3 .select-wrapper:before {
				color: #ddd;
			}

			.wrapper.style3 input[type="checkbox"] + label,
			.wrapper.style3 input[type="radio"] + label {
				color: #ddd;
			}

				.wrapper.style3 input[type="checkbox"] + label:before,
				.wrapper.style3 input[type="radio"] + label:before {
					background: #00b4b5;
					border-color: #ddd;
				}

			.wrapper.style3 input[type="checkbox"]:checked + label:before,
			.wrapper.style3 input[type="radio"]:checked + label:before {
				background-color: #00cdcf;
				border-color: #00cdcf;
				color: #ffffff;
			}

			.wrapper.style3 input[type="checkbox"]:focus + label:before,
			.wrapper.style3 input[type="radio"]:focus + label:before {
				border-color: #00cdcf;
				box-shadow: 0 0 0 1px #00cdcf;
			}

			.wrapper.style3 ::-webkit-input-placeholder {
				color: #00cdcf !important;
			}

			.wrapper.style3 :-moz-placeholder {
				color: #00cdcf !important;
			}

			.wrapper.style3 ::-moz-placeholder {
				color: #00cdcf !important;
			}

			.wrapper.style3 :-ms-input-placeholder {
				color: #00cdcf !important;
			}

			.wrapper.style3 .formerize-placeholder {
				color: #00cdcf !important;
			}

			.wrapper.style3 ul.alt li {
				border-top-color: #ddd;
			}

			.wrapper.style3 header h2, .wrapper.style3 header h3 {
				border-bottom-color: #ddd;
			}

			.wrapper.style3 header p {
				color: #00cdcf;
			}

			.wrapper.style3 table tbody tr {
				border-color: #ddd;
			}

				.wrapper.style3 table tbody tr:nth-child(2n + 1) {
					background-color: #00b4b5;
				}

			.wrapper.style3 table th {
				color: #fff;
			}

			.wrapper.style3 table thead {
				border-bottom-color: #ddd;
			}

			.wrapper.style3 table tfoot {
				border-top-color: #ddd;
			}

			.wrapper.style3 table.alt tbody tr td {
				border-color: #ddd;
			}

			.wrapper.style3 .feature {
				border-color: #ddd;
			}

				.wrapper.style3 .feature .fa {
					color: #00cdcf;
				}

		@media screen and (max-width: 1280px) {

			.wrapper {
				padding: 5em 0 3em 0;
			}

				.wrapper > .inner {
					width: 60em;
				}

		}

		@media screen and (max-width: 980px) {

			.wrapper {
				padding: 4em 2em 2em 2em;
			}

				.wrapper > .inner {
					width: 100%;
				}

		}

		@media screen and (max-width: 736px) {

			.wrapper {
				padding: 3em 1.5em 1em 1.5em;
			}

				.wrapper > .inner.narrow {
					width: 80%;
				}

		}

		@media screen and (max-width: 480px) {

			.wrapper {
				padding: 2em 1em 0.1em 1em;
			}

				.wrapper > .inner.narrow {
					width: 100%;
				}

		}

/* Banner */

	#banner {
		background-color: #00cdcf;
		color: #ffffff;
		padding: 8em 0 6em 0;
		text-align: center;
	}

		#banner input, #banner select {
			color: #ffffff;
		}

		#banner a {
			color: #00cdcf;
		}

		#banner strong, #banner b {
			color: #ffffff;
		}

		#banner h1, #banner h2, #banner h3, #banner h4, #banner h5, #banner h6 {
			color: #ffffff;
		}

		#banner blockquote {
			border-left-color: rgba(255, 255, 255, 0.25);
		}

		#banner code {
			background: rgba(255, 255, 255, 0.075);
			border-color: rgba(255, 255, 255, 0.25);
		}

		#banner hr {
			border-bottom-color: rgba(255, 255, 255, 0.25);
		}

		#banner input[type="submit"],
		#banner input[type="reset"],
		#banner input[type="button"],
		#banner button,
		#banner .button {
			background-color: #f7f7f7;
			color: #555 !important;
		}

			#banner input[type="submit"]:hover,
			#banner input[type="reset"]:hover,
			#banner input[type="button"]:hover,
			#banner button:hover,
			#banner .button:hover {
				background-color: white;
			}

			#banner input[type="submit"]:active,
			#banner input[type="reset"]:active,
			#banner input[type="button"]:active,
			#banner button:active,
			#banner .button:active {
				background-color: #eaeaea;
			}

			#banner input[type="submit"].alt,
			#banner input[type="reset"].alt,
			#banner input[type="button"].alt,
			#banner button.alt,
			#banner .button.alt {
				background-color: transparent;
				box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
				color: #ffffff !important;
			}

				#banner input[type="submit"].alt:hover,
				#banner input[type="reset"].alt:hover,
				#banner input[type="button"].alt:hover,
				#banner button.alt:hover,
				#banner .button.alt:hover {
					background-color: rgba(255, 255, 255, 0.075);
				}

				#banner input[type="submit"].alt:active,
				#banner input[type="reset"].alt:active,
				#banner input[type="button"].alt:active,
				#banner button.alt:active,
				#banner .button.alt:active {
					background-color: rgba(255, 255, 255, 0.2);
				}

				#banner input[type="submit"].alt.icon:before,
				#banner input[type="reset"].alt.icon:before,
				#banner input[type="button"].alt.icon:before,
				#banner button.alt.icon:before,
				#banner .button.alt.icon:before {
					color: #99ebeb;
				}

			#banner input[type="submit"].special,
			#banner input[type="reset"].special,
			#banner input[type="button"].special,
			#banner button.special,
			#banner .button.special {
				background-color: #009a9c;
				color: #fff !important;
			}

				#banner input[type="submit"].special:hover,
				#banner input[type="reset"].special:hover,
				#banner input[type="button"].special:hover,
				#banner button.special:hover,
				#banner .button.special:hover {
					background-color: #00b4b5;
				}

				#banner input[type="submit"].special:active,
				#banner input[type="reset"].special:active,
				#banner input[type="button"].special:active,
				#banner button.special:active,
				#banner .button.special:active {
					background-color: #008183;
				}

		#banner h2 {
			border-style: double solid;
			border-width: 4px 1px;
			font-size: 2.4em;
			line-height: 1.35em;
			margin: 0 auto 1em;
			padding: 1.1em;
			position: relative;
			width: 40%;
		}

		#banner p {
			font-size: 1.5em;
			text-transform: uppercase;
		}

		@media screen and (max-width: 1680px) {

			#banner {
				padding: 8em 0 6em 0;
			}

		}

		@media screen and (max-width: 1280px) {

			#banner {
				padding: 6em 0 4em 0;
			}

				#banner h2 {
					width: 50%;
				}

		}

		@media screen and (max-width: 980px) {

			#banner {
				padding: 4em 2em 2em 2em;
			}

				#banner h2 {
					width: 75%;
				}

		}

		@media screen and (max-width: 736px) {

			#banner {
				padding: 3em 1.5em 1em 1.5em;
			}

				#banner h2 {
					font-size: 2em;
				}

				#banner p {
					font-size: 1.25em;
				}

		}

		@media screen and (max-width: 480px) {

			#banner {
				padding: 3em 1em 1em 1em;
			}

				#banner h2 {
					font-size: 1.65em;
					width: 100%;
				}

		}

/* Main */

	#main {
		padding: 4em 0 2em 0;
	}

		@media screen and (max-width: 736px) {

			#main {
				padding: 3em 0 1em 0;
			}

		}

/* Footer */

	#footer {
		background-color: #f7f7f7;
		color: #444;
		padding: 5em 0 4em 0;
		position: relative;
	}

		#footer input, #footer select {
			color: #555;
		}

		#footer a {
			color: #00cdcf;
		}

		#footer strong, #footer b {
			color: #555;
		}

		#footer h1, #footer h2, #footer h3, #footer h4, #footer h5, #footer h6 {
			color: #555;
		}

		#footer blockquote {
			border-left-color: #ddd;
		}

		#footer code {
			background: #fff;
			border-color: #ddd;
		}

		#footer hr {
			border-bottom-color: #ddd;
		}

		#footer:before {
			background-color: #ddd;
			content: '';
			height: 1px;
			left: 30%;
			position: absolute;
			top: 0;
			width: 40%;
		}

		#footer .copyright {
			color: #bbb;
			font-size: 0.9em;
			margin: 0 0 2em 0;
			padding: 0;
			text-align: center;
			text-transform: uppercase;
		}

			#footer .copyright li {
				border-left: solid 1px #e3e3e3;
				display: inline-block;
				list-style: none;
				margin-left: 1.5em;
				padding-left: 1.5em;
			}

				#footer .copyright li:first-child {
					border-left: 0;
					margin-left: 0;
					padding-left: 0;
				}

		@media screen and (max-width: 1280px) {

			#footer {
				padding: 4em 2em 3em 2em;
			}

		}

		@media screen and (max-width: 980px) {

			#footer {
				padding: 3em 2em 2em 2em;
			}

				#footer:before {
					width: 75%;
					left: 12.5%;
				}

		}

		@media screen and (max-width: 736px) {

			#footer {
				padding: 3em 2em 1em 2em;
			}

				#footer:before {
					width: 85%;
					left: 7.5%;
				}

				#footer .copyright li {
					display: block;
					border-left: 0;
					margin-left: 0;
					padding-left: 0;
				}

		}

		@media screen and (max-width: 480px) {

			#footer {
				padding: 2em 1em 0.1em 1em;
			}

		}

/* Custom */

	/* #loginToolbar {
		float: right;
		padding-top: 5px;
		font-weight: bold;
	} */

	#registerDiv {
		display: table;
		margin: 0 auto;
		text-align: center;
		/* vertical-align: center; */
	}

	.tab {
		white-space: pre;
	}

	#startTime, #endTime {
		width: 300px;
	}

	#startReg, #endReg {
		display: inline-block;
	}

	#searchPickup {
		width : 300px;
	}

	#registerBtnDiv {
		text-align: center;
	}
	
	button#deleteUser {
		background-color: black;
		font-weight: bold;
	}

	div input#userIDVal {
		cursor: default;
	}

	div input#userIDVal:hover {
		background-color: #F7F7F7;
	}

	table td  {
		border: 1px solid black;
	}

	table {
		width: 60%;
		height: 100px;
		margin: auto;
		text-align: center;
	}

	.center {
		margin: 0 auto;
	}

	#checkPW {
		width: 30%;
		margin: auto;
		text-align: center;
	}

	h2 {
		text-align: center;
	}
```

app.js

```javascript
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var app = express();

// view engine setup
// 기본 path를 rentalCar/views로 지정함
// view의 engine은 ejs로 설정함
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('2nd project'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave: false,
  saveUninitialized: false,  // session의 내용 변경이 없더라도 저장을 할것인가?
  secret: '2nd project', // 필수적으로 넣어야하며, 위의 cookieParser의 인자와 같은 값을 넣어야함
  cookie: {
    httpOnly: true,
    secure: false
  }
}));

// localhost:3000/'첫번째인자'가 url로 들어온다면
// require안의 인자로 routing을 시켜줌 
app.use('/', require('./routes/index'));
app.use('/signup', require('./routes/signup'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/reservation', require('./routes/reservation'));
app.use('/car_name', require('./routes/car_name'));
app.use('/car_location', require('./routes/car_location'));
app.use('/car_number', require('./routes/car_number'));
app.use('/user_info', require('./routes/user_info'));
app.use('/user_info_check', require('./routes/user_info_check'));
app.use('/modify_info', require('./routes/modify_info'));
app.use('/delete_user', require('./routes/delete_user'));
app.use('/price_calculate', require('./routes/price_calculate'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

```

기본 Page를 만들어보자 

index.ejs

```ejs
<!DOCTYPE HTML>
<!--
	Typify by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>Typify by TEMPLATED</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="stylesheets/main.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src = 'javascripts/listener.js'></script>
		<script src="javascripts/skel.min.js"></script>
		<script src="javascripts/util.js"></script>
		<script src="javascripts/main.js"></script>
	</head>
	<body>
		<div>
		<%
			if(loginState) {
		%>
		<!-- 로그인이 된 경우 -->
					<button id = 'logoutBtn'>LOG OUT</button>
					<a href = '/user_info'><button>My Page</button></a>
					<button id = 'loginToolbar'><%= loginID %>님 환영합니다. </button>
					<h2>Welcome To CarChain</h2>
		<%
			} else {
		%>
		<!-- 로그인이 안된 경우 -->
				<div>
					<h2 style = 'margin-top: 2em'>Welcome To CarChain</h2>
				</div>
		<%
			}
		%>
		</div>
		<!-- menu 보여 주는 곳 -->
		<section id = "menu" class = 'wrapper special'>
			<div>
				<a href = '/'><button>HOME</button></a>
				<a href = '/signup'><button>SIGN UP</button></a>
				<a href = '/login'><button>LOGIN</button></a>
				<a href = '/reservation'><button>RESERVATION</button></a>
			</div>
		</section>

		<%
			if(!loginState) {
		%>
				<section class = "wrapper style2 special">
					<div class = "inner narrow">
						<span>회원 가입 or 로그인을 하시기 바랍니다. </span>
					</div>
				</section>
		<%
			}
		%>
		<!-- Footer -->
		<footer id = "footer">
			<div class = "copyright">
			&copy; Untitled. Design: <a href = "http://templated.co/">TEMPLATED</a>.
			</div>
		</footer>
	</body>
</html>
```

회원가입 page를 만들어보자

signup.ejs

```ejs
<!DOCTYPE html>
<html>
    <head>
        <title>Typify by TEMPLATED</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="stylesheets/main.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src = 'javascripts/listener.js'></script>
        <script src="javascripts/skel.min.js"></script>
        <script src="javascripts/util.js"></script>
        <script src="javascripts/main.js"></script>
    </head>

    <body>
        <%
			if(loginState) {
        %>
        <!-- 로그인이 된 경우 -->
                <div>
                    <button id = 'logoutBtn'>LOG OUT</button>
                    <a href = '/user_info'><button>My Page</button></a>
                    <button id = 'loginToolbar'><%= loginID %>님 환영합니다. </button>
                    <h2>SIGN UP PAGE</h2>
                </div>
		<%
			} else {
        %>
        <!-- 로그인이 안된 경우 -->
                <div>
                    <h2 style = 'margin-top: 2em'>Welcome To CarChain</h2>
                </div>
        <%
            }
        %>
        <!-- menu 보여 주는 곳 -->
        <section id = "menu" class = 'wrapper special'>
            <div>
                <a href = '/'><button>HOME</button></a>
                <a href = '/signup'><button>SIGN UP</button></a>
                <a href = '/login'><button>LOGIN</button></a>
                <a href = '/reservation'><button>RESERVATION</button></a>
            </div>
        </section>
        <!-- 회원가입을 하는 공간 -->
        <section id = "signupSection" class = "wrapper style2 special">
            <div class = "inner narrow">
                <%
                    if(loginState) {
                %>
                <!-- 로그인이 되있는 경우이기에 Logout을 하라는 공간 -->
                <span>좌측 상단의 Log Out 버튼을 눌러주세요. </span>
                <%
                    } else {
                %>
                <!-- 로그인이 안되있는 경우이기에 회원가입을 하라는 공간 -->
                <header>
                    <h2>REGISTER PAGE</h2>
                </header>
                <div class = "grid-form">
                    <div class = "form-control narrow">
                        <label for = "id">ID</label>
                        <input name = "id" id = "signupID" type = "text">
                    </div>
                    <div class = "form-control narrow">
                        <label for = "password">password</label>
                        <input name = "password" id = "signupPW" type = "password">
                    </div>
                    <div class = "form-control narrow">
                        <label for = "name">name</label>
                        <input name = "name" id = "signupName" type = "text">
                    </div>
                    <div class = "form-control narrow">
                        <label for = "phone">phone</label>
                        <input name = "phone" id = "signupPhone" type = "text">
                    </div>
                    <div class = "form-control">
                        <label for = "email">email</label>
                        <input name = "email" id = "signupEmail" type = "email">
                    </div>
                        
                    <ul class = "actions">
                        <li><input value = "SIGN UP" type = "submit" id = 'signupBtn'></li>
                    </ul>
                </div>
                <%
                    }
                %>
            </div>
        </section>

        <!-- Footer -->
		<footer id = "footer">
            <div class = "copyright">
            &copy; Untitled. Design: <a href = "http://templated.co/">TEMPLATED</a>.
            </div>
        </footer>
    </body>
</html>
```

로그인 Page를 만들어보자

login.ejs

```ejs
<!DOCTYPE html>
<html>
    <head>
        <title>Typify by TEMPLATED</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="stylesheets/main.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src = 'javascripts/listener.js'></script>
        <script src="javascripts/skel.min.js"></script>
        <script src="javascripts/util.js"></script>
        <script src="javascripts/main.js"></script>
    </head>

    <body>
        <%
			if(loginState) {
        %>
        <!-- 로그인이 된 경우 -->
                <div>
                    <button id = 'logoutBtn'>LOG OUT</button>
                    <a href = '/user_info'><button>My Page</button></a>
                    <button id = 'loginToolbar'><%= loginID %>님 환영합니다. </button>
                    <h2>LOGIN PAGE</h2>
                </div>
		<%
			} else {
        %>
        <!-- 로그인이 안된 경우 -->
                <div>
                    <h2 style = 'margin-top: 2em'>Welcome To CarChain</h2>
                </div>
        <%
            }
        %>
        <!-- menu 보여 주는 곳 -->
        <section id = "menu" class = 'wrapper special'>
            <div>
                <a href = '/'><button>HOME</button></a>
                <a href = '/signup'><button>SIGN UP</button></a>
                <a href = '/login'><button>LOGIN</button></a>
                <a href = '/reservation'><button>RESERVATION</button></a>
            </div>
        </section>
        <!-- 로그인을 하는 공간 -->
        <section id = "loginSection" class = "wrapper style2 special">
            <div class = "inner narrow">
                <%
                    if(loginState) {        
                %>
                <!-- 로그인이 되있는 경우이기에 Logout을 하라는 공간 -->
                <span>좌측 상단의 Log Out 버튼을 눌러주세요. </span>
                <%    
                    } else {
                %>
                <!-- 로그인이 안되있는 경우이기에 로그인을 하라는 공간 -->
                <header>
                    <h2>LOGIN PAGE</h2>
                </header>
                <div class = "grid-form">
                    <div class = "form-control narrow">
                        <label for = "id">ID</label>
                        <input name = "id" id = "loginID" type = "text">
                    </div>
                    <div class = "form-control narrow">
                        <label for = "password">password</label>
                        <input name = "password" id = "loginPW" type = "password">
                    </div>
                    <ul class = "actions">
                        <li><input value = "LOGIN" type = "submit" id = 'loginBtn'></li>
                    </ul>
                </div>
                <%
                    }
                %>
                
            </div>
        </section>
        
        <!-- Footer -->
        <footer id = "footer">
            <div class = "copyright">
            &copy; Untitled. Design: <a href = "http://templated.co/">TEMPLATED</a>.
            </div>
        </footer>
    </body>
</html>
```

예약 Page를 만들어보자

reservation.ejs

```ejs
<!DOCTYPE html>
<html>
    <head>
        <title>Typify by TEMPLATED</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="stylesheets/main.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src = 'javascripts/listener.js'></script>
		<script src="javascripts/skel.min.js"></script>
		<script src="javascripts/util.js"></script>
		<script src="javascripts/main.js"></script>
    </head>

    <body>
        <%
			if(loginState) {
		%>
		<!-- 로그인이 된 경우 -->
				<div>
					<button id = 'logoutBtn'>LOG OUT</button>
					<a href = '/user_info'><button>My Page</button></a>
					<button id = 'loginToolbar'><%= loginID %>님 환영합니다. </button>
					<h2>RESERVATION PAGE</h2>
        		</div>
		<%
			} else {
		%>
		<!-- 로그인이 안된 경우 -->
				<div>
						<h2 style = 'margin-top: 2em'>Welcome To CarChain</h2>
				</div>
		<%
			}
		%>
		<!-- menu 보여 주는 곳 -->
        <section id = "menu" class = 'wrapper special'>
            <div>
				<a href = '/'><button>HOME</button></a>
				<a href = '/signup'><button>SIGN UP</button></a>
				<a href = '/login'><button>LOGIN</button></a>
				<a href = '/reservation'><button>RESERVATION</button></a>
            </div>
		</section>
		<!-- 예약을 하는 공간 -->
		<%
			if(loginState) {
		%>
		<!-- 로그인이 된 경우 -->
				<div id = 'registerDiv'>
					<h3>렌터카 영업소 선택</h3>
					픽업<br />
					<!-- 차량의 지역. 챠량 이름, 차량 번호를 선택하는 곳 -->
					<select id = 'carLocation'>
						<option value = '' selected = 'selected'>지역을 선택해주세요. </option>
					</select>
					<select id = 'carName'>
						<option value = '' selected = 'selected'>차량을 선택해주세요. </option>
					</select>
					<select id = 'carNum'>
						<option value = '' selected = 'selected'>차량번호를 선택해주세요. </option>
					</select>
					<!-- 예약 날짜와 시간을 정하는 곳 -->
					<div id = 'startReg'>
						<span>픽업 날짜</span> <br />
						<input value = '시작일' type = 'date' id = 'startDay' class = 'calendar'><br />
						<select id = 'startTime'>
							<option value = '' selected = 'selected'>시간을 정해주세요. </option>
							<option value = '00:00'>00:00</option>
							<option value = '00:30'>00:30</option>
							<option value = '01:00'>01:00</option>
							<option value = '01:30'>01:30</option>
							<option value = '02:00'>02:00</option>
							<option value = '02:30'>02:30</option>
							<option value = '03:00'>03:00</option>
							<option value = '03:30'>03:30</option>
							<option value = '04:00'>04:00</option>
							<option value = '04:30'>04:30</option>
							<option value = '05:00'>05:00</option>
							<option value = '05:30'>05:30</option>
							<option value = '06:00'>06:00</option>
							<option value = '06:30'>06:30</option>
							<option value = '07:00'>07:00</option>
							<option value = '07:30'>07:30</option>
							<option value = '08:00'>08:00</option>
							<option value = '08:30'>08:30</option>
							<option value = '09:00'>09:00</option>
							<option value = '09:30'>09:30</option>
							<option value = '10:00'>10:00</option>
							<option value = '10:30'>10:30</option>
							<option value = '11:00'>11:00</option>
							<option value = '11:30'>11:30</option>
							<option value = '12:00'>12:00</option>
							<option value = '12:30'>12:30</option>
							<option value = '13:00'>13:00</option>
							<option value = '13:00'>13:30</option>
							<option value = '14:00'>14:00</option>
							<option value = '14:30'>14:30</option>
							<option value = '15:00'>15:00</option>
							<option value = '15:30'>15:30</option>
							<option value = '16:00'>16:00</option>
							<option value = '16:30'>16:30</option>
							<option value = '17:00'>17:00</option>
							<option value = '17:30'>17:30</option>
							<option value = '18:00'>18:00</option>
							<option value = '18:30'>18:30</option>
							<option value = '19:00'>19:00</option>
							<option value = '19:30'>19:30</option>
							<option value = '20:00'>20:00</option>
							<option value = '20:30'>20:30</option>
							<option value = '21:00'>21:00</option>
							<option value = '21:30'>21:30</option>
							<option value = '22:00'>22:00</option>
							<option value = '22:30'>22:30</option>
							<option value = '23:00'>23:00</option>
							<option value = '23:30'>23:30</option>
						</select>
					</div>
					<!-- 마감 날짜와 시간을 정하는 곳 -->
					<div id = 'endReg'>
						<span>반납 날짜</span> <br />
						<input value = '반납일' type = 'date' id = 'endDay' class = 'calendar'><br />
						<select id = 'endTime'>
							<option value = '' selected = 'selected'>시간을 정해주세요. </option>
							<option value = '00:00'>00:00</option>
							<option value = '00:30'>00:30</option>
							<option value = '01:00'>01:00</option>
							<option value = '01:30'>01:30</option>
							<option value = '02:00'>02:00</option>
							<option value = '02:30'>02:30</option>
							<option value = '03:00'>03:00</option>
							<option value = '03:30'>03:30</option>
							<option value = '04:00'>04:00</option>
							<option value = '04:30'>04:30</option>
							<option value = '05:00'>05:00</option>
							<option value = '05:30'>05:30</option>
							<option value = '06:00'>06:00</option>
							<option value = '06:30'>06:30</option>
							<option value = '07:00'>07:00</option>
							<option value = '07:30'>07:30</option>
							<option value = '08:00'>08:00</option>
							<option value = '08:30'>08:30</option>
							<option value = '09:00'>09:00</option>
							<option value = '09:30'>09:30</option>
							<option value = '10:00'>10:00</option>
							<option value = '10:30'>10:30</option>
							<option value = '11:00'>11:00</option>
							<option value = '11:30'>11:30</option>
							<option value = '12:00'>12:00</option>
							<option value = '12:30'>12:30</option>
							<option value = '13:00'>13:00</option>
							<option value = '13:00'>13:30</option>
							<option value = '14:00'>14:00</option>
							<option value = '14:30'>14:30</option>
							<option value = '15:00'>15:00</option>
							<option value = '15:30'>15:30</option>
							<option value = '16:00'>16:00</option>
							<option value = '16:30'>16:30</option>
							<option value = '17:00'>17:00</option>
							<option value = '17:30'>17:30</option>
							<option value = '18:00'>18:00</option>
							<option value = '18:30'>18:30</option>
							<option value = '19:00'>19:00</option>
							<option value = '19:30'>19:30</option>
							<option value = '20:00'>20:00</option>					
							<option value = '20:30'>20:30</option>
							<option value = '21:00'>21:00</option>
							<option value = '21:30'>21:30</option>
							<option value = '22:00'>22:00</option>
							<option value = '22:30'>22:30</option>
							<option value = '23:00'>23:00</option>					
							<option value = '23:30'>23:30</option>
						</select>
					</div>
				</div>
				<!-- 예약 기간에 따라 가격을 나타내주는 곳 -->
				<div id = 'registerBtnDiv'>
					<button id = 'totalPrice'>여기를 올리면 가격이 나옵니다.</button><br>
					<button id = 'registerBtn'>Register</button>
				</div>
		<%
			} else {
		%>
		<!-- 로그인이 안된 경우 -->
				<section class = "wrapper style2 special">
					<div class = "inner narrow">
						<span>회원 가입 or 로그인을 하시기 바랍니다. </span>
					</div>
				</section>
		<%
			}
		%>
        
		<!-- Footer -->
		<footer id = "footer">
			<div class = "copyright">
			&copy; Untitled. Design: <a href = "http://templated.co/">TEMPLATED</a>.
			</div>
		</footer>
    </body>
</html>
```

회원정보 수정 Page를 만들어보자

user_info.ejs

```ejs
<!DOCTYPE html>
<html>
    <head>
        <title>Typify by TEMPLATED</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="stylesheets/main.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src = 'javascripts/listener.js'></script>
		<script src="javascripts/skel.min.js"></script>
		<script src="javascripts/util.js"></script>
        <script src="javascripts/main.js"></script>
    </head>

    <body>
        <div>
            <button id = 'logoutBtn'>LOG OUT</button>
            <button id = 'loginToolbar'><%= loginID %>님 환영합니다. </button>
            <h2>회원 정보 수정</h2>
        </div>
        <!-- 사용자의 비밀번호를 입력하는 공간 -->
        <div class = 'center'>
            <input type = 'password' id = 'checkPW' placeholder = '비밀번호를 입력해주세요. '>
        </div>
        <!-- 사용자의 비밀번호가 맞게 입력되었는지 비교하는 버튼 -->
        <div id = 'checkDiv' align = center>
            <button id = 'checkBtn'>Check</button>
        </div>
        <!-- menu 보여 주는 곳 -->
        <section id = "menu" class = 'wrapper special'>
            <div>
                <a href = '/'><button>홈으로</button></a>
                <a href = '/signup'><button>회원 가입</button></a>
                <a href = '/login'><button>로그인</button></a>
                <a href = '/reservation'><button>예약</button></a>
            </div>
        </section>
        <!-- 사용자의 개인정보를 나타내는 공간 -->
        <div id = 'tableDiv'>
            <table class = 'userInfo'>
                <tr>
                    <td>회원가입 아이디</td>
                    <td><div><input id = 'userIDVal' type = 'button' value = '<%= loginID %>'></div></td>
                    <!-- 변경 불가 ID -->
                </tr>
                <tr>
                    <td>Password</td>
                    <td><div><input id = 'userPWVal' type = 'password' value = ''></div></td>
                    <!-- 변경 가능 PW -->
                </tr>
                <tr>
                    <td>이름</td>
                    <td><div><input id = 'userNameVal' type = 'text' value = ''></div></td>
                    <!-- 변경 가능 이름 -->
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td><div><input id = 'userPhoneVal' type = 'text' value = ''></div></td>
                    <!-- 변경 가능 폰번호 -->
                </tr>
                <tr>
                    <td>Email</td>
                    <td><div><input id = 'userEmailVal' type = 'text' value = ''></div></td>
                    <!-- 변경 가능 Email -->
                </tr>
            </table>
        </div>
        <!-- 사용자의 정보를 삭제하거나 수정하는 공간 -->
        <div align = right>
            <button id = 'deleteUser'>계정 삭제</button>
            <button id = 'modifyInfo'>수정</button>
        </div>
        
    </body>
</html>
```

기본 Page를 들어갈 때 이루어 지는 Logic

index.js

```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.loginState);
  console.log(req.session.userid);
  // signup.ejs를 띄우는데 
  // loginState와 loginID 값을 전달시킴
  res.render('index', {
    loginState: req.session.loginState,
    loginID: req.session.userid,
  });
});

module.exports = router;

```

회원가입 Page를 들어 갔을때와 회원가입 버튼이 눌린 뒤 일어나는 Logic

signup.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// get방식일 경우 수행
router.get('/', (req, res, next) => {
    console.log(req.session.loginState);
    console.log(req.session.userid);
    // signup.ejs를 띄우는데 
    // loginState와 loginID 값을 전달시킴
    res.render('signup', {
        loginState : req.session.loginState,
        loginID : req.session.userid,
    })
});

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    // 입력된 값들을 session 값에 저장
    req.session.userid = req.body.userid;
    req.session.userpw = req.body.userpw;
    req.session.name = req.body.name;
    req.session.phone = req.body.phone;
    req.session.email = req.body.email;

    const result = {
        txt : '회원 가입 오류'
    };

    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: 'root',
        database : 'rentalcar'
    });

    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log('DB Connected', `${req.body.userid} : ${req.body.userpw} : ${req.body.name} : ${req.body.phone} : ${req.body.email}`);
        // sql query문에 해당함
        const sql = `insert into member(id, password, name, phone, email) values('${req.body.userid}', '${req.body.userpw}', '${req.body.name}', '${req.body.phone}', '${req.body.email}')`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, (err, results, fields) => {
            if(err) {
                console.error(err.message);
                res.json(JSON.stringify(results));
                //  query문이 정상일 경우 수행
            } else {
                console.log(results, fields);
                result.txt = `회원 가입을 축하드립니다. ${req.body.name}님`;
                res.json(JSON.stringify(result));
            }
            // 연결 종료
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
            });
        });
    });
});

module.exports = router;
```

로그인 Page를 들어갈 때와 로그인 버튼이 눌렸을때 일어나는 Logic

login.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// get방식일 경우 수행
router.get('/', (req, res, next) => {
    // login.ejs를 띄우는데 
    // loginState와 loginID 값을 전달시킴
    res.render('login', {
        loginState : req.session.loginState,
        loginID: req.session.userid,
    });
});

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    };

    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'rentalcar'
    });

    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log('DB Connect: ', req.body.userid);
        // sql query문에 해당
        const sql = 
        `select * from member where id = '${req.body.userid}' and password = '${req.body.userpw}'`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '다시 로그인해주세요. ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs[0] && rs[0].name) {
                    console.log('rs[0] : ', rs[0]);
                    req.session.loginState = true;
                    req.session.userid = req.body.userid;
                    res.redirect('/');
                // query의 결과가 없는 경우
                } else {
                    result.txt = '다시 로그인해주세요. ';
                    res.json(JSON.stringify(result));
                }
            }
            // 연결 종료
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
                console.log('con close');
            });
        });
    });
});

module.exports = router;
```

로그아웃 버튼이 눌렸을때 일어나는 Logic

logout.js

```javascript
var express = require('express');
var router = express.Router()

// get방식일 경우 수행
// session을 없애버림
router.get('/', (req, res, next) => {
    if(req.session.userid) {
        req.session.destroy((err) => {
            res.redirect('/');
        });
    }
});

module.exports = router;
```

예약 Page를 들어갈 때와 예약 버튼이 눌렸을때 일어나는 Logic

reservation.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// get방식일 경우 수행
router.get('/', (req, res, next) => {
    res.render('reservation', {
        loginState : req.session.loginState,
        loginID : req.session.userid,
    })
});

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    }

    console.log(req.body);
    console.log('userid', req.session.userid);
    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'rentalcar'
    });
    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        // sql query문에 해당 reservation table에 등록하는 것
        let sql = `insert into reservation (mno, cno, startDay, endDay, startTime, endTime)
                        values((select mno from member where id = '${req.session.userid}'),
                                '${req.body.carNum}', '${req.body.startDay}',
                                '${req.body.endDay}', '${req.body.startTime}',
                                '${req.body.endTime}')`;
        
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '차량번호를 선택해주세요. ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    // reservation table에 등록이 된 차량 정보를 car table에서 삭제하는 query
                    sql = `delete from car where cno = ${req.body.carNum}`;
                    console.log(sql);
                    //  query문이 정상일 경우 수행
                    con.query(sql, (err, rs, fields) => {
                        if(err) {
                            console.error(err.message);
                            result.txt = '차량 데이터 삭제가 안되었습니다. ';
                            res.json(JSON.stringify(result));
                        } else {
                            // query의 결과가 있는 경우
                            if(rs) {
                                console.log('delete rs : ', rs);
                                result.txt = rs;
                                res.json(JSON.stringify(result));
                            } else {
                                result.txt = '차량 삭제 안됨. ';
                                res.json(JSON.stringify(result));
                            }
                        }
                    });
                } else {
                    result.txt = '예약할 수 있는 차량이 없습니다. ';
                    res.json(JSON.stringify(result));
                }
            }
            // 연결 종료
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
                console.log('con close');
            });
        });
    });
});

module.exports = router;
```

지역에 대한 select tag에 마우스를 올리면 일어나는 Logic

car_location.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    };
    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'rentalcar'
    });
    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        // sql query문에 해당 지역이 중복되는 경우 하나로 출력하기 위함
        const sql = 'select distinct location from car';
        
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '담당 전화를 부탁드립니다.  ';
                res.json(JSON.stringify(result));
                // query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '지역을 선택해주세요. ';
                    res.json(JSON.stringify(result));
                }
            }
            // 연결 종료
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
                console.log('con close');
            });
        });
    });
});

module.exports = router;
```

차량 이름에 대한 select tag에 마우스를 올리면 일어나는 Logic

car_name.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    };

    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'rentalcar'
    });

    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log(req.body.carLocation);
        // sql query문에 해당, 지역에 따른 차량 이름을 중복없이 나타냄
        const sql = `select distinct car_name from car where location = '${req.body.carLocation}'`;
        console.log(sql);
        
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '차량을 선택해주세요. ';
                res.json(JSON.stringify(result));
                // query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '예약할 수 있는 차량이 없습니다. ';
                    res.json(JSON.stringify(result));
                }
            }
            // 연결 종료
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
                console.log('con close');
            });
        });
    });
});

module.exports = router;
```

차량 번호에 대한 select tag에 마우스를 올리면 일어나는 Logic

car_number.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); //mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    };

    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'rentalcar'
    });

    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log(req.body.carLocation);
        // sql query문에 해당, 지역과 차량 이름에 따른 차량 번호를 나타냄(중복 없음 primary key이기 때문)
        const sql = `select cno from car where location = '${req.body.carLocation}' and car_name = '${req.body.carName}'`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '차량번호를 선택해주세요. ';
                res.json(JSON.stringify(result));
                // query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '예약할 수 있는 차량이 없습니다. ';
                    res.json(JSON.stringify(result));
                }
            }
            // 연결 종료
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
                console.log('con close');
            });
        });
    });
});

module.exports = router;
```

가격표에 대한 button tag에 마우스를 올리면 일어나는 Logic

price_calculate.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    result = {
        txt : ''
    }

    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'rentalcar'
    });

    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log(req.body.carLocation);
        // sql query문에 해당, 차량 번호에 따른 가격을 읽음
        const sql = `select price from car where cno = '${req.body.carNum}'`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'error를 출력합니다. ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '예약을 할 수 없는 차이거나 날짜를 입력해주세요. ';
                    res.json(JSON.stringify(result));
                }
            }
            // 연결 종료
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
                console.log('con close');
            });
        });
    });
});

module.exports = router;
```

회원정보 Page를 들어갈 때 이루어 지는 Logic

user_info.js

```javascript
var express = require('express');
var router = express.Router();

// get방식일 경우 수행
router.get('/', (req, res, next) => {
    console.log(req.session.loginState);
    console.log(req.session.userid);
    res.render('user_info', {
        loginState : req.session.loginState,
        loginID : req.session.userid,
    })
});

module.exports = router;

```

회원정보 Page의 check라는 button tag를 누를 때 이루어 지는 Logic

user_info_check.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    }

    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'rentalcar'
    });

    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log('DB Connect: ', req.body.checkPW);
        // sql query문에 해당함, userid에 해당하는 모든것을 읽음
        const sql = 
        `select * from member where id = '${req.session.userid}'`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '해당하는 userid가 없습니다. ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    console.log('rs : ', rs);
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '해당하는 userid가 없습니다. ';
                    res.json(JSON.stringify(result));
                }
            }
            // 연결 종료
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
                console.log('con close');
            });
        });
    });
    // res.json(JSON.stringify(result));
});

module.exports = router;

```

회원정보 Page의 modify라는 button tag를 누를 때 이루어 지는 Logic

modify_info.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    };
    
    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'rentalcar'
    });

    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        // sql query문에 해당, userid를 조건으로 하여, password, name, phone, email의 값을 수정함
        const sql = 
        `update member set password = '${req.body.userPW}',
                            name = '${req.body.userName}',
                            phone = '${req.body.userPhone}',
                            email = '${req.body.userEmail}'
                        where id = '${req.session.userid}'`;
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'error 출력 ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    console.log('rs : ', rs);
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '해당하는 userid가 없습니다. ';
                    res.json(JSON.stringify(result));
                }
            }
            // 연결 종료
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
                console.log('con close');
            });
        });
    });
});

module.exports = router;
```

회원정보 Page의 delete라는 button tag를 누를 때 이루어 지는 Logic

delete_user.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    }

    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'rentalcar'
    });

    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log('DB Connect: ', req.session.userid);
        // member table에서 user 삭제하는 sql query문
        const sql = 
        `delete from member where id = '${req.session.userid}'`;
        console.log(sql);

        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'err를 출력합니다. ';
                res.json(JSON.stringify(result));
                // query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우, session에 담겨 있는 값들을 초기화 시켜줌
                if(rs) {
                    console.log('rs : ', rs);
                    result.txt = rs;
                    // req.session.loginState = '';
                    // req.session.userid = '';
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '해당하는 userid가 없습니다. ';
                    res.json(JSON.stringify(result));
                }
            }
            // 연결 종료
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
                console.log('con close');
            });
        });
    });

});

module.exports = router;
```

callback 함수를 담아놓은 javascript file

listener.js

```javascript
$(document).ready(() => {
    // id가 signupBtn인 객체가 눌리면 수행되는 것
    $('#signupBtn').click(() => {
        // 해당 값들을 변수에 저장함. 
        const userid = $('#signupID').val(); 
        const userpw = $('#signupPW').val();
        const name = $('#signupName').val();
        const phone = $('#signupPhone').val();
        const email = $('#signupEmail').val();

        // 하나라도 비어있다면 alert창을 띄움
        if(userid === '') {
            alert('ID를 입력해주세요.');
        } else if(userpw === '') {
            alert('비밀번호를 입력해주세요. ');
        } else if(name === '') {
            alert('이름를 입력해주세요. ');
        } else if(phone === '') {
            alert('핸드폰 번호를 입력해주세요. ');
        } else if(email === '') {
            alert('Email을 입력해주세요. ');
        } else {
            sendParams = {
                userid,
                userpw,
                name,
                phone,
                email
            };

            // post 방식으로 sendParams를 전송
            $.post('/signup', sendParams, (data, status) => {
                alert('회원 가입이 완료되었습니다. ');
                // 해당 id에 있는 값들 초기화
                $('#signupID').val('');
                $('#signupPW').val('');
                $('#signupName').val('');
                $('#signupPhone').val('');
                $('#signupEmail').val('');
            });
        }
    });

    // id가 loginBtn인 객체가 눌리면 수행되는 것
    $('#loginBtn').click(() => {
        // 해당 값들을 변수에 저장함. 
        const userid = $('#loginID').val(); 
        const userpw = $('#loginPW').val();
        // 하나라도 비어있다면 alert창을 띄움
        if(userid === '') {
            alert('ID를 입력해주세요.');
        } else if(userpw === '') {
            alert('비밀번호를 입력해주세요. ');
        } else {
            sendParams = {
                userid,
                userpw
            }
            // post 방식으로 sendParams를 전송
            $.post('/login', sendParams, (data, status) => {
                try {
                    // 해당 id에 있는 값들 초기화
                    $('#loginID').val() = '';
                    $('#loginPW').val() = '';
                } catch(err) {
                    window.location.reload(true);
                }
            });
        }
    });

    // id가 logoutBtn인 객체가 눌리면 수행되는 것
    $('#logoutBtn').click(() => {
        // get방식으로 수행 후 reload 수행
        $.get('/logout', '', (data, status) => {
            location.reload(true);
        });
    });

    // id가 carLocation 객체 위에 있으면 수행되는 것
    $('#carLocation').mouseover(() => {
        var carLocationCount = 0;
        // post 방식으로 car_location.js file로 전송
        $.post('/car_location', '', (data, status) => {
            const parsedData = JSON.parse(data);
            // 처음에는 아무것도 출력을 안함
            if(carLocationCount == 0) {
                $('#carLocation').html('');
            }
            // 지역의 개수만큼 for문을 수행
            parsedData.txt.forEach((element) => {
                // DB안에 있는 지역을 option의 인자로 넣어주어 보여줌
                if(carLocationCount < parsedData.txt.length) {
                    $('#carLocation').append(`<option value = "${element.location}">${element.location}</option>`);
                    carLocationCount++;
                }
            });
            // 값을 초기화 하지 않으면 append함수로 인해 select option tag로 계속 추가되기에 값을 초기화
        });
        carLocationCount = 0;
    });

    // id가 carName 객체 위에 있으면 수행되는 것
    $('#carName').mouseover(() => {
        var carNameCount = 0;

        // 해당 값들을 변수에 저장함. 
        const carLocation = $('#carLocation').val();
        
        const sendParams = {
            carLocation
        };
        // post 방식으로 car_name.js file로 전송하며 sendParams를 인자로 전송
        $.post('/car_name', sendParams, (data, status) => {
            const parsedData = JSON.parse(data);
            // 처음에는 아무것도 출력을 안함
            if(carNameCount == 0) {
                $('#carName').html('');
            }
            // 지역에 대한 차량 개수만큼 for문을 수행
            parsedData.txt.forEach((element) => {
                // DB안에 있는 차량 개수를 option의 인자로 넣어주어 보여줌
                if(carNameCount < parsedData.txt.length) {
                    $('#carName').append(`<option value = "${element.car_name}">${element.car_name}</option>`);
                    carNameCount++;
                }
            });
            // 값을 초기화 하지 않으면 append함수로 인해 select option tag로 계속 추가되기에 값을 초기화
        });
        carNameCount = 0;
    });

    // id가 carNum 객체 위에 있으면 수행되는 것
    $('#carNum').mouseover(() => {
        // 해당 값들을 변수에 저장함. 
        const carLocation = $('#carLocation').val();
        const carName = $('#carName').val();
        
        const sendParams = {
            carLocation,
            carName,
        };
        // post 방식으로 car_name.js file로 전송하며 sendParams를 인자로 전송
        $.post('/car_number', sendParams, (data, status) => {
            const parsedData = JSON.parse(data);
            // 처음에는 아무것도 출력을 안함
            if(carNameCount == 0) {
                $('#carNum').html('');
            }
            // 지역에 대한 차량 개수만큼 for문을 수행
            parsedData.txt.forEach((element) => {
                // DB안에 있는 차량에 대한 차량번호 개수를 option의 인자로 넣어주어 보여줌
                if(carNameCount < parsedData.txt.length) {
                    $('#carNum').append(`<option value = "${element.cno}">${element.cno}</option>`);
                    carNameCount++;
                }
            });
            // 값을 초기화 하지 않으면 append함수로 인해 select option tag로 계속 추가되기에 값을 초기화
        });
        carNameCount = 0;
    });

    // id가 totalPrice 객체 위에 있으면 수행되는 것
    $('#totalPrice').mouseover(() => {
        // 값 초기화
        let carPriceCount = 0;
        // 해당 값들을 변수에 저장함. 
        const strDate1 = $('#startDay').val();
        const strDate2 = $('#endDay').val();
        // Date 객체에 대해서 -를 기준으로 값을 잘라내어 값을 저장
        const arr1 = strDate1.split('-');
        const arr2 = strDate2.split('-');
        // Date 객체 생성 Date의 일자의 차이를 연산하기 위함
        const dat1 = new Date(arr1[0], arr1[1], arr1[2]);
        const dat2 = new Date(arr2[0], arr2[1], arr2[2]);

        const diff = dat2 - dat1; // 날짜 차이를 연산
        const currDay = 24 * 60 * 60 * 1000; // 시 * 분 * 초 * 밀리세컨
        const diffDay = parseInt(diff / currDay); // 날짜 차이를 int형으로 변환
        const carNum = $('#carNum').val();
        let price;
        const sendParams = {
            diffDay,
            carNum,
        }
        // post 방식으로 price_calculate.js file로 전송하며 sendParams를 인자로 전송
        $.post('/price_calculate', sendParams, (data, status) => {
            const parsedData = JSON.parse(data);
            // 차량 가격에 개수만큼 for문 수행
            parsedData.txt.forEach((element) => {
                if(carPriceCount < parsedData.txt.length) {
                    price = element.price;
                    carPriceCount++;
                }
            });
            // Date 객체를 연산할때, 날짜 차이를 int형으로 만들기 위함
            if(isNaN(parseInt(diffDay * parsedData.txt[0].price))) {
                $('#totalPrice').html(
                    "여기를 올리면 가격이 나옵니다."
                );
                // 가격을 나타내는 공간
            } else {
                $('#totalPrice').html(
                    "총 가격은 " +
                    parseInt(diffDay * parsedData.txt[0].price) +
                    " 입니다. "
                );
            }
        });
        

    });

    // id가 registerBtn인 객체가 눌리면 수행되는 것
    $('#registerBtn').click(() => {
        // 해당 값들을 변수에 저장함. 
        const location = $('#carLocation').val();
        const carName = $('#carName').val();
        const carNum = $('#carNum').val();
        const startDay = $('#startDay').val();
        const startTime = $('#startTime').val();
        const endDay = $('#endDay').val();
        const endTime = $('#endTime').val();

        const sendParams = {
            location,
            carName,
            carNum,
            startDay,
            startTime,
            endDay,
            endTime
        }
        // 하나라도 비어있다면 alert창을 띄움
        if($('#carLocation').val() === '') {
            alert('지역을 선택해주세요.');
        } else if($('#carName').val() === '') {
            alert('차량 이름을 선택해주세요.');
        } else if($('#carNum').val() === '') {
            alert('차량 번호를 선택해주세요.');
        } else if($('#startDay').val() === '') {
            alert('예약 일자를 선택해주세요.');
        } else if($('#endDay').val() === '') {
            alert('반납 일자를 선택해주세요.');
        } else if($('#startTime').val() === '') {
            alert('예약 시간를 선택해주세요.');
        } else if($('#endTime').val() === '') {
            alert('반납 시간를 선택해주세요.');
        } else {
            // 예약을 할 것인지 확인하는 곳
            if(confirm('예약을 하시겠습니까?')) {
                // 확인 버튼을 누르면 수행됨
                // post 방식으로 reservation.js file로 전송하며 sendParams를 인자로 전송
                $.post('/reservation', sendParams, (data, status) => {
                    try {
                        // 해당 id에 있는 값들 초기화
                        $('#location').val('')
                        $('#carName').val('')
                        $('#startDay').val('')
                        $('#startTime').val('')
                        $('#endDay').val('')
                        $('#endTime').val('')
                    } catch(err) {
                        window.location.reload(true);
                    }
                });
            }
        }
    });

    // id가 checjBtn인 객체가 눌리면 수행되는 것
    $('#checkBtn').click(() => {
        // 해당 값들을 변수에 저장함. 
        const checkPW = $('#checkPW').val();

        const sendParams = {
            checkPW
        }
        // post 방식으로 user_info_check.js file로 전송하며 sendParams를 인자로 전송
        $.post('/user_info_check', sendParams, (data, status) => {
            const parsedData = JSON.parse(data);
            // 해당 id의 객체에 인자값들을 채움
            $('#userIDVal').val(parsedData.txt[0].id);
            $('#userPWVal').val(parsedData.txt[0].password);
            $('#userNameVal').val(parsedData.txt[0].name);
            $('#userPhoneVal').val(parsedData.txt[0].phone);
            $('#userEmailVal').val(parsedData.txt[0].email);
        });
    });

    // id가 modifyInfo인 객체가 눌리면 수행되는 것
    $('#modifyInfo').click(() => {
        // 해당 값들을 변수에 저장함. 
        const userPW = $('#userPWVal').val();
        const userName = $('#userNameVal').val();
        const userPhone = $('#userPhoneVal').val();
        const userEmail = $('#userEmailVal').val();

        const sendParams = {
            userPW,
            userName,
            userPhone,
            userEmail,
        };
        // 하나라도 비어있다면 alert창을 띄움
        if(userPW == '') {
            alert('비밀번호를 입력해주시기 바랍니다. ');
        } else if(userName == '') {
            alert('이름을 입력해주시기 바랍니다. ');
        } else if(userPhone == '') {
            alert('핸드폰 번호를 입력해주시기 바랍니다. ');
        } else if(userEmail == '') {
            alert('Email 주소를 입력해주시기 바랍니다. ');
        } else {
            // post 방식으로 modify_info.js file로 전송하며 sendParams를 인자로 전송
            $.post('/modify_info', sendParams, (data, status) => {
                // 해당 id에 있는 값들 초기화
                $('#userPWVal').val('');
                $('#userNameVal').val('');
                $('#userPhoneVal').val('');
                $('#userEmailVal').val('');
                alert('회원 정보가 수정되었습니다. ');
            });
        }
    });

    // id가 deleteUser인 객체가 눌리면 수행되는 것
    $('#deleteUser').click(() => {
        // 중요 정보이기에 '정말 삭제하는지' 물어봄
        if(confirm("계정을 정말 삭제하시겠습니까?")) {
            // 확인 버튼을 누르면 수행함
            // post 방식으로 delete_user.js file로 전송함
            $.post('/delete_user', '', (data, status) => {
                alert('저희 서비스를 이용해주셔서 감사합니다. ');
                $.get('/logout', '', (data, status) => {
                    location.reload(true);
                });
            });
        }
    });
});
```

