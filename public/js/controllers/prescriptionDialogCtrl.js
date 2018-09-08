app.controller('prescriptionDialogCtrl', function($scope, $state, $mdSidenav, $timeout, $log, $mdDialog,MethodFactory) {
    console.log("hi from prescription dialog ctrl");
      $scope.methodFactory = MethodFactory;
      $scope.userDetails = $scope.methodFactory.userData;
    $scope.expanded = false;
    $scope.toggleWidth = function(){
      $scope.expanded = !$scope.expanded;
    };
  	$scope.close = function(){
      $mdDialog.hide();
    };
    $scope.addToMenu = function(){
      window.location = "#/main/overview#prescription";
      $scope.close();
    }
    $scope.refillRequest = function() {
        swal({
            title: 'Done!',
            text: 'Refill request has been sent',
            type: 'success',
            timer: 2000
        }).then(function() {

        });
    };
    $scope.prescriptionDetails=[{
      "name":"Paracetamol",
      "dosage":"200mg",
      "directions":"Morning and Night",
      "quantity":"2/day",
      "date":"08/06/2016",
      "prescribed":"Dr.Bruce Banner",
      "refill":"yes"
    },{

      "name":"Aleve",
      "dosage":"400mg",
      "directions":"Morning and Night",
      "quantity":"2/day",
      "date":"10/06/2016",
      "prescribed":"Dr.Tony ",
      "refill":"no"
    },{

      "name":"Asprin",
      "dosage":"100mg",
      "directions":"Morning ",
      "quantity":"1/day",
      "date":"10/08/2016",
      "prescribed":"Dr.Barry ",
      "refill":"yes"
    },{

      "name":"Advil",
      "dosage":"800mg",
      "directions":" Night",
      "quantity":"1/day",
      "date":"10/09/2016",
      "prescribed":"Dr.Stark ",
      "refill":"no"
    }]
      console.log($scope.userDetails);
});
