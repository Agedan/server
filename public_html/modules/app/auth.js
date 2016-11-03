angular

	.module('auth', [])
	.config(function($httpProvider) {
	  
	  
	  
	  
	  var interceptor = ['$q', '$injector', function($q, $injector) {
return {
    request: function(config) {
      return config;
    },

    requestError: function(config) {
      return config;
    },

    response: function(res) {
	alert(res.status);
      return res;

    },

    responseError: function(res) {
	alert(res.status);
	if(res.status === 401) {
            $injector.get('$state').transitionTo('main.login');
            return $q.reject(res);
        }
      return res;
    }
  }

        

}];

$httpProvider.interceptors.push(interceptor);
	  
	  
	  
	  
	  
	  
		

	})
	.controller('AuthController', function ($scope,$http) {

	$scope.login = function (){
	return $http({
						  method: 'POST',
						  url: '/api/v1/sessions',
						  data: 'login='+$scope.userName+'&pass='+$scope.userPass
						});
		
	}
	  
    });

		


   
		


		
		
		
		
	