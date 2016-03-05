app.controller('ListViewController', ['$scope', '$http', function ($scope, $http) {
    $scope.header = 'Search for a movie here!';
    $scope.sortBy = "title";
    $scope.searchByName = "";
    $http.get('data/imdb250.json').success(function(data) {
        $scope.movies = data;
    }).error(function (){
        $scope.error = "Cannot load movies";
    });
}]);
