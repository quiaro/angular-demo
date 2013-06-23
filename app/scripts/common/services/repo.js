'use strict';

// COMMON global var
var S2dio = {};
S2dio.siteName = '';

angular.module('services.repo', [])
	.service('repo', function($http) {

	var api = 'repo';

	// INIT function
	setSiteName('pebbles');

	// COMMON function
	function getServiceURL(api, method, searchStr) {

		var siteName, res;

		siteName = getSiteName();
		res = '/api/0.1/' + api + '/' + method + '/' + siteName + ((!searchStr) ? '' : '?' + searchStr);
		return res;
	}

	// COMMON function
	// In real life, when the UI loads, siteName will be passed as a parameter in the URL and cached
	function getSiteName () {

		if (S2dio.siteName) {
			return S2dio.siteName;
		} else {
			throw new ReferenceError("S2dio.siteName has not been set");
		}
	}

	// COMMON function
	function setSiteName (name) {
		S2dio.siteName = name;
	}

	function list(filtersObj) {

		var searchStr, url;

		for (var filter in filtersObj) {
			if (filtersObj.hasOwnProperty(filter)) {
				searchStr += filter + '=' + filtersObj[filter];
			}
		}
		url = getServiceURL(api, 'list', searchStr);

		return $http.get(url);
	}

	function read(item, version) {

		var searchStr, url;

		searchStr = 'item=' + item + 'version=' + version;
		url = getServiceURL(api, 'read', searchStr);

		return $http.get(url);
	}

	// expose the API to the user
	return {
		list: list,
		read: read
	};
});