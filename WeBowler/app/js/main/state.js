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
      templateUrl: 'js/main/templates/game.tpl.html',
      controller: 'GameCtrl'
    })
    .state('app.stats', {
      url: '/stats',
      templateUrl: 'js/main/templates/stats.tpl.html',
      controller: 'StatsCtrl'
    })
    .state('app.league', {
      url: '/league',
      templateUrl: 'js/main/templates/league.tpl.html',
      controller: 'LeagueCtrl'
    });

}]);