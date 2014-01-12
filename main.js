var app = angular.module('app', ['ngResource', 'ngSanitize']);

app.controller('MainCtrl', function($scope, $http, Parsoid) {
    $scope.inputText = "== Goals == \n" +
        "Produce a specification of MediaWiki's markup format that is ''sufficiently'' '''complete''' and '''''consistent'''''.";

    $scope.useResource = function() {
        var parseWTPromise = Parsoid.parseWT($scope.inputText);
        parseWTPromise.success(function(data) {
            $scope.parsedText = data;
        });
    };
});

app.factory('Parsoid', function($http) {
    return {
        parseWT: function(inputText) {
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            return $http.post('http://localhost:8000/enwiki/', "wt=\n" + inputText);
        }
    };
});