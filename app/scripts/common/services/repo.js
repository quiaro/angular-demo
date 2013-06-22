'use strict';

angular.module('services.repo', [])
	.service('repo', function($http) {

	var API, 
		api = 'repo',
		sitename = 'pebbles';

	// Common function
	function getServiceURL(api, method, sitename, searchStr) {
		var res = '/api/0.1/' + api + '/' + method + '/' + sitename + ((!searchStr) ? '' : '?' + searchStr);
		return res;
	};

	function list(filtersObj) {

		var searchStr, url;

		for (var filter in filtersObj) {
			if (filtersObj.hasOwnProperty(filter)) {
				searchStr += filter + '=' + filtersObj[filter];
			}
		}
		url = getServiceURL(api, 'list', sitename, searchStr);
		return $http.get(url);
	};

	function read(item, version) {

		var searchStr, url;
		
		searchStr = 'item=' + item + 'version=' + version;
		url = getServiceURL(api, 'read', sitename, searchStr);

		return $http.get(url);
	}

	return API = {
		list: list,
		read: read
	}
});