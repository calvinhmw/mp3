var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'ListViewController'
        }).otherwise({
       redirectTo: '/list'
    });
});
