//Creating Module
var myApp = angular.module('myApp', []);

//Initialize new Controller
myApp.controller('mainController', function($scope) {

  //Hides all Views by Default
  $(".bar").hide();
  $(".line").hide();

  //Shows the Line View
  $scope.showLine = function(){
    $(".bar").hide();
    $(".line").show();
  }

  //Shows the Bar View
  $scope.showBar = function(){
    $(".line").hide();
    $(".bar").show();
  }

  let barChart = document.getElementById('barGraph').getContext('2d');

  let bar = new Chart(barChart, {
    type:'bar',
    data:{
      labels:['Jan', 'Feb', 'Mar', 'Apr', 'May',
      'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets:[{
        label:'Avg Claims Per Month',
        data:[
          3460,
          3043,
          3567,
          3563,
          3542,
          3667,
          3690,
          4125,
          3288,
          3419,
          3196,
          3035
        ],
        backgroundColor:'orange'

      }]
    },
    options:{}
  });

  let lineChart = document.getElementById('lineChart').getContext('2d');

  let line = new Chart(lineChart, {
    type:'line',
    data:{
      labels:['Jan', 'Feb', 'Mar', 'Apr', 'May',
      'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets:[{
        label:'Avg Claims Per Month',
        data:[
          3460,
          3043,
          3567,
          3563,
          3542,
          3667,
          3690,
          4125,
          3288,
          3419,
          3196,
          3035
        ],
        backgroundColor:'orange'

      }]
    },
    options:{}
  });

});
