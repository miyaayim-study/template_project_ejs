const srcBase = './src/assets/';
const distBase = './dist/assets/';

export const dir = {
	src: {
		root: './src/',
		html: srcBase + "html/",
		ejs: srcBase + "html/ejs/",
		stylesheets: srcBase + "sass/",
		javascripts: srcBase + "js/",
		images: srcBase + "images/",
	},
	dist: {
		root: "dist/",
		html: "dist/",
		stylesheets: distBase + "css/",
		javascripts: distBase + "js/",
		images: distBase + "images/",
	},
};