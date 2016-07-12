var app = angular.module('JSONLint' , []);

 

app.controller('mainController' , function ($scope) {
   $scope.submit = function () {
       //The if condition seems useless now . 
        if ($scope.inputJson != "" || $scope.inputJson != undefined)
    {
        try{
           // console.log($scope.inputJson);
        $scope.inputJson = JSON.stringify(JSON.parse($scope.inputJson) , null , 4);
        //$scope.errorMessage =  {'Message' : 'Valid Json'}
    }catch(e){
        var error = ' { \n "Error": "'+e+'" \n } , \n'
        //error.fontcolor("red")
        console.log(error)
         $scope.inputJson =  error + $scope.inputJson ;
       
    }

    }else{
        var opMessage = {'Message' : 'You are Awesome!'} ;
        $scope.inputJson = JSON.stringify(opMessage , undefined , 4);
    }
    
   };
    
}); 
