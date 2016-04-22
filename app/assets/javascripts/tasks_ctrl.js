/* global angular */
(function() {
  angular.module("app").controller("tasksCtrl", function($scope) {
    $scope.tasks = [
      {
        text: "take out the garbage",
        completed: false
      },
      {
        text: "take out the trash",
        completed: false
      }
    ];

    $scope.toggleCompleted = function(inputTask) {
      inputTask.completed = !inputTask.completed;
    };

    $scope.createNewTask = function(inputText) {
      $scope.tasks.push({text: inputText, completed: false});
      $scope.newTaskText = '';
    };

    $scope.destroyCompleted = function() {
      // var newTasks = [];
      // for (var i = 0; i < $scope.tasks.length; i++) {
      //   if (!$scope.tasks[i].completed) {
      //     newTasks.push($scope.tasks[i]);
      //   }
      // }
      // $scope.tasks = newTasks;

      // $scope.tasks = $scope.tasks.filter(function(task) {
      //   return !task.completed;
      // });
      $scope.tasks = $scope.tasks.filter(task => !task.completed);
    };

  });
})();
