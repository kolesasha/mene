angular.module('mainController',[])
.controller('mainCtrl', function ($scope,db) {
	$scope.bands = [];
	$scope.activeBand = {}; // povezivanje sa dugmetom read more, postaje bend na koji smo kliknuli

	db.getData() // vracanje iz servis(http)
       .then(function (result){
       $scope.bands=result.data; //spajanje gita i bands i povezivanje na view

	},function (error){
      console.log(error);

	})  //konfiguracija prvo moramo reci kojom metodom cemo doci do servera, then-da se vidi rezultat

	$scope.display = function(band){
		$scope.activeBand = band; // povezivanje sa dugmetom read more
	}
})