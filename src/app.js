import * as Ajax from './ajax';

var callback = {
	success: function (data) {
		console.log(JSON.parse(data));
	},
	error: function (err) {
		console.log(err);
	}
};

Ajax.get('./quotes/quote1.json')
	.then(callback.success)
	.catch(callback.error);

Ajax.post('./quotes/quote2.json', {
		"quote": {
			"text": "Some text"
		}
	})
	.then(callback.success)
	.catch(callback.error);
