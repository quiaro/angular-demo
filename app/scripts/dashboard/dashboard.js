'use strict';

angular.module('dashboard', ['dialogs'])

    .controller('DashboardCtrl', function($scope) {
    $scope.itemList = [{
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
});
