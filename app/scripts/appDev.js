'use strict';

angular.module('s2doAppDev', [
    's2doApp',
    'ngMockE2E'])

    .run(function($httpBackend) {

    var items = [{
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

    $httpBackend.whenGET('/api/0.1/repo/list/pebbles').respond(200, items);
    // Mock failed request
    // $httpBackend.whenGET('/api/0.1/repo/list/pebbles').respond(500, null);

    $httpBackend.whenGET('/api/0.1/repo/read/pebbles?itemId=3QCRS&version=3').respond(200, items[1]);

    // adds a new item  to the items list
    $httpBackend.whenPOST('/api/0.1/repo/write/pebbles').respond(200, function(method, url, data) {
        items.push(angular.fromJSON(data));
    });

    // Use .passThrough to bypass the mock and issue a real http request
    // e.g. $httpBackend.whenGET(/^\/templates\//).passThrough();
    $httpBackend.whenGET(/^scripts\/.*\.tpl\.html/).passThrough();
});
