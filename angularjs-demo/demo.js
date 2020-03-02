// create the angular "app" with any "plugins" you may need
const app = angular.module('todoApp', []);

// add a controller - used to add BEHAVIOR
// BUSINESS LOGIC ONLY
// DO NOT manipulate the DOM or HTML/CSS
app.controller('todoCtrl', function($scope){
	'use strict';
	// think of scope as your "model" or data between the controller and view
	$scope.yourName = 'Joe';
	
	// array to hold todos
	"model properties"
	
	$scope.todos = [
					{text: "Eat Breakfast", done: true},
					{text: "Learn Angular", done: false},
					{text: "Do Homework", done: false}
				];

	// method to add a todo

	$scope.addTodo = function () {
		// this refers to the object $scope

		// add new element to array
		$scope.todos.push({text: $scope.newTodo, done: false});

		// clear textbox
		$scope.newTodo ='';
	};

	// $scope.addTodo() = () => {
	//	//this refers to the function of the controller
	// }

	// custom filter to identify completed todos
	$scope.completedTodos = function() {
		// filter calls the following function foreach todo in the array
		return $scope.todos.filter(function (todo) {
			// return whether we want to include this element
			return todo.done
		});
	};

	$scope.incompletedTodos = function() {
		// filter calls the following function foreach todo in the array
		return $scope.todos.filter(function (todo) {
			// return whether we want to include this element
			return !todo.done
		});
	};

	// add button to clear all the completed todos
	$scope.clearComplted = function(){
		$scope.todos = $scope.incompletedTodos();
	}
	
});