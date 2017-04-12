var app = angular.module("restCountries", ["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/home", {
    templateUrl : "home.htm"
  })
  .when("/list", {
    templateUrl : "list.htm",
    controller : "listCtrl"
  })
  .when("/edit", {
    templateUrl : "edit.htm",
    controller : "listCtrl"
  });
});
