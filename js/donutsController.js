angular.module('DonutsApp', [])
  .controller('DonutsController', DonutsController);

  DonutsController.$inject = ['$http'];

  function DonutsController($http){

    var self = this;

    self.all = [];

    function getDonuts() {
      $http
      .get('http://api.doughnuts.ga/doughnuts')
      .then(function(response) {
        console.log(response);
        self.all = response.data
      });
    };

    getDonuts();

    self.addDonut = addDonut;
    self.newDonut = {};

    function addDonut(){
      $http
      .post('http://api.doughnuts.ga/doughnuts', self.newDonut)
      .then(function(response) {
        console.log(response);
        // getDonuts();
        self.all.push(response.data)
      });

    self.newDonut = {};
  }

    self.delete = deleteDonut

    var deleteId

    function deleteDonut(id){
      deleteId = id
      $http
      .delete('http://api.doughnuts.ga/doughnuts/' + id)
      .then(function(response) {
        console.log(response);
        self.all.splice(deleteId, 1)
        // self.all.push(response.data)
      });

    self.newDonut = {};
  }
}