    let routeApp = angular.module('routeApp', ['ui.router']);

    routeApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/add');
        $stateProvider
                .state('add', {
            url: '/add',
            templateUrl: 'add-user.html'
        })
                .state('list', {
            url: '/list',
            templateUrl: 'user-list.html'
        });
    });
    ang.controller('Todo', Todo);
    function Todo($scope, model) {
        $scope.todo = model;
    }
       ang.value('model', {
        users: [
            {id: '1', name: 'Pedro', phone: '+375259645656', email: 'kapowdeveloper@gmail.com'},
            {id: '2', name: 'Boris', phone: '+375259645656', email: 'kapowdeveloper@gmail.com'},
            {id: '3', name: 'Egor', phone: '+375259645656', email: 'kapowdeveloper@gmail.com'}
        ]
    });
