'use strict';

angular.module('dashboard.services', [])
  .factory('dashboardService', ['$q' ,function($q) {

    var staticItems = [{
      'id': '1AWTX',
      'existence': 'existing',
      'type': 'page',
      'status': 'editing',
      'name': 'about',
      'url': '/company/about',
      'lastEdited': '02/28/13 05:36 PM',
      'lastAuthor': 'Ben Stevenson',
      'lastPersonalEdit': '01/16/13 02:33 PM'
    }, {
      'id': '3QCRS',
      'existence': 'new',
      'type': 'page',
      'status': 'scheduled',
      'name': 'products',
      'url': '/company/products',
      'lastEdited': '03/14/13 01:22 PM',
      'lastAuthor': 'Mark Johnson',
      'lastPersonalEdit': '03/14/13 01:22 PM'
    }, {
      'id': '9ZS8TX',
      'existence': 'existing',
      'type': 'component',
      'status': 'processing',
      'name': 'footer-disclaimer',
      'url': '/components/footer/disclaimer',
      'lastEdited': '02/24/13 10:36 AM',
      'lastAuthor': 'Clyde Newman',
      'lastPersonalEdit': '12/05/12 09:12 AM'
    }];

    var dashboardFactory = {
      getRecentActivity : function() {
        var deferred = $q.defer();
        //this is only like this because of static data.
        //return the actual promise from the $http call later on.
        deferred.resolve(staticItems);

        return deferred.promise;
      }
    };
    return dashboardFactory;
  }]);