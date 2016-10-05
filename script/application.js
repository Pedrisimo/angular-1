(function() {
    "use strict";
    let ang = angular.module('app', []);
    ang.value('model', {
        users: [
            {id: '1', name: 'Pedro', phone: '+375259645656', email: 'kapowdeveloper@gmail.com'},
            {id: '2', name: 'Boris', phone: '+375259645656', email: 'kapowdeveloper@gmail.com'},
            {id: '3', name: 'Egor', phone: '+375259645656', email: 'kapowdeveloper@gmail.com'}
        ]
    });
    ang.controller('Todo', Todo);
    function Todo($scope, model) {
        $scope.todo = model;
    }
})();