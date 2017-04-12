app.controller('listCtrl', function($scope, $http) {
  $scope.$watch('search', function() {
    fetch();
  });

  function fetch() {
    $http.get("https://restcountries.eu/rest/v2/all/")
      .then(function(response) {
        $scope.all = response.data;
      });
  }

  $scope.editCountry = function(country) {
    $scope.editListing = true;
    $scope.existListing = country;
  }

  $scope.saveEditCountry = function() {
    $scope.existListing = {};
    $scope.editListing = false;
  }
});
