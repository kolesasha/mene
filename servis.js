angular.module('dbService',[])
.service('db',function ($http) {
	this.getData = function(){
		return $http({

		method : "get",
		url: "https://danilovesovic.github.io/bands/bands.json"

	})
	}
})