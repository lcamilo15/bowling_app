// Sub-application/main Level State
app.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('app.home', {
      url: '/home',
      templateUrl: 'js/main/templates/home.tpl.html',
      controller: 'HomeCtrl'
    })
    .state('app.game', {
      url: '/game',
      templateUrl: 'js/main/templates/about.tpl.html',
      controller: 'AboutCtrl'
    })
    .state('app.stats', {
      url: '/stats',
      templateUrl: 'js/main/templates/about.tpl.html',
      controller: 'AboutCtrl'
    })
    .state('app.league', {
      url: '/league',
      templateUrl: 'js/main/templates/contact.tpl.html',
      controller: 'ContactCtrl'
    });

}]);