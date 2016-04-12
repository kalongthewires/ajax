export function http (method, url, data) {

	let promise = new Promise(function(resolve, reject) {
		let request = new XMLHttpRequest(),
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

export function get (url) {
	return http('GET', url);
}

export function post (url, data) {
	return http('POST', url, data);
}
