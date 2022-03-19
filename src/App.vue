<template>
	<router-view />
</template>

<style lang="scss">
// RESET CSS

* {
	box-sizing: border-box;
	transition: 0.4s;
}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
	text-decoration: none;
}

.container {
	width: 80%;
	margin: 0 auto;
	@include min($sm) {
		width: 540px;
	}
	@include min($md) {
		width: 720px;
	}
	@include min($lg) {
		width: 960px;
	}
	@include min($xl) {
		width: 1140px;
	}
	@include min($xxl) {
		width: 1320px;
	}
}

// TYPOGRAPHY

@font-face {
	font-family: 'OPTI';
	src: url('./assets/fonts/OPTIEngeEtienne.otf');
}

h1 {
	font-family: 'Kalam', cursive;
	font-size: 30px;
	letter-spacing: 10px;
	line-height: 150%;
	text-align: center;
	@include min($sm) {
		font-size: 50px;
	}
	@include min($lg) {
		font-size: 80px;
		text-align: left;
	}
}
h2 {
	font-family: 'Kalam', cursive;
	font-size: 40px;
	text-align: center;
	@include min($sm) {
		font-size: 60px;
	}
}
h3 {
	font-family: $font-002;
	font-size: 28px;
}

h4 {
	font-family: $font-002;
	font-size: 16px;
}

p {
	font-family: $font-002;
	font-size: 20px;
	line-height: 24px;
}

body {
	overflow-x: hidden;
}
</style>
