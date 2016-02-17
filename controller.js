var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

$scope.currentPage = 1;

  $scope.getUsers = function() {
  	$scope.users = mainService.getUsers($scope.currentPage).then(function(response){
      $scope.users = response.data.data;
    });
  }
  $scope.getUsers();

$scope.next = function() {
  $scope.currentPage++;
  $scope.getUsers();
}

$scope.previous = function() {
  $scope.currentPage--;
  $scope.getUsers();
}

});
