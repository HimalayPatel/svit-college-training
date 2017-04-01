var studentApp =angular
    .module('studentApp', [
        'ngMessages' // for angular-validations
    ]);

studentApp.controller('StudentController', function($scope, StudentService) {
    $scope.save = function() {
        StudentService.save($scope.student);
        // refresh data
        $scope.students = StudentService.get();
        $scope.student = {};
    };

    $scope.remove = function(emailId) {
        StudentService.remove(emailId);
        // refresh data
        $scope.students = StudentService.get();
    };

    $scope.students = StudentService.get();
});


studentApp.service('StudentService', function() {
    var students = [
        {
            firstName: 'Hardik',
            lastName: 'Kaji',
            dob: '30/06/1990',
            city: 'Surat',
            emailId: 'hardikkaji@gmail.com'
        }, {
            firstName: 'Swapnil',
            lastName: 'Chauhan',
            dob: '17/08/1989',
            city: 'Nadiad',
            emailId: 'swap.chauhan@gmail.com'
        }
    ];
    var service = {
        get: get,
        save: save,
        remove: remove
    };

    return service;

    function get() {
        return students;
    }

    function save(student) {
        students.push(student);
    }

    function remove(emailId) {
        var index = students.findIndex(function(item) {
            return item.emailId === emailId;
        });

        students.splice(index, 1);
    }
});