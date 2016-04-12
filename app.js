(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.http = http;
exports.get = get;
exports.post = post;
function http(method, url, data) {

	var promise = new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest(),
		    uri = url;

		request.open(method, uri);
		request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		request.send(JSON.stringify(data));

		request.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(this.response);
			} else {
				reject(this.statusText);
			}
		};

		request.onerror = function () {
			reject(this.statusText);
		};
	});

	return promise;
}

function get(url) {
	return http('GET', url);
}

function post(url, data) {
	return http('POST', url, data);
}

},{}],2:[function(require,module,exports){
'use strict';

var _ajax = require('./ajax');

var Ajax = _interopRequireWildcard(_ajax);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var callback = {
	success: function success(data) {
		console.log(JSON.parse(data));
	},
	error: function error(err) {
		console.log(err);
	}
};

Ajax.get('./quotes/quote1.json').then(callback.success).catch(callback.error);

Ajax.post('./quotes/quote2.json', {
	"quote": {
		"text": "Some text"
	}
}).then(callback.success).catch(callback.error);

},{"./ajax":1}]},{},[2]);
