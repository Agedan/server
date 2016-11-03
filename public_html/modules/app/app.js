angular
	.module('app', ['ui.router', 'chat', 'auth'])
	.config(function($stateProvider) {
	  
	 
	  
		$stateProvider.state('main',{
			abstract : true,
			views:{
				'mainView':{
					templateUrl: '/views/main.html'
				}
			}
			
		});
		
		
		$stateProvider.state('main.private',{
			abstract : true,
			views:{
				'chat@main':{
					templateUrl: '/views/chat.html'
				}
			}
			
		});
		
		
		$stateProvider.state('main.login',{
			url: '/login',
			views:{
				'content@main':{
					templateUrl: '/login.html'
				}
			}
		});

		
		$stateProvider.state('main.private.map',{
			url: '/map',
			views:{
				'content@main':{
					templateUrl: '/views/map.html'
				}
			},
			resolve : {
				      isPrivate: ['$http', function($http) {
						return $http({
						  method: 'GET',
						  url: '/views/map.html'
						});
					  }]
			}
			
		});
	  
	  	$stateProvider.state('main.private.city',{
			url: '/city',
			views:{
				'content@main':{
					templateUrl: '/views/city.html'
				}
			},
			resolve : {
				      isPrivate: ['$http', function($http) {
						return $http({
						  method: 'GET',
						  url: '/views/city.html'
						});
					  }]
			}
			
		});
		
		

		
		

	})
	.config(["$locationProvider", function($locationProvider) {
	 $locationProvider.html5Mode(true);
	}]) 
		.run(function($state) { 
				      
		$state.go('main.login');

      //console.log(res);
    });
		


   
		


		
		
		
		
	