/**
 * Created by JuanMa7 on 20/1/17.
 */
(function () {
    'use strict';

    angular.module('LCApp', []).controller('LCController', LCController);

    LCController.$inject = ['$scope', '$filter'];
    function LCController($scope, $filter) {
        $scope.name = "JuanMa Ariza";
        $scope.value = "";
        $scope.messaje = "";

        $scope.commaCount = function () {
            var v = $scope.value;
            if(v!="") {
                var numCommas = v.split(',');
                if (numCommas.length > 3)
                    $scope.message = "Too Much!!!!";
                else
                    $scope.message = "Enjoy!";
            }else{
                $scope.message = "Empty!!";
            }
        };
    }
})();