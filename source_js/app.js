var app = angular.module('mp3', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/movies', {
            templateUrl: 'partials/list.html',
            controller: 'ListViewController'
        }).when('/detail/:rank', {
        templateUrl: 'partials/details.html',
        controller: 'DetailViewController'
    }).when('/movies/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'GalleryViewController'
    }).otherwise({
        redirectTo: '/movies'
    });
});


app.factory('httpService', ['$http', function($http){

}]);