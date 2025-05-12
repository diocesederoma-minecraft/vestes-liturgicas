app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    // Rota padrão.
    $urlRouterProvider.otherwise("/");

    // Estados
    $stateProvider
        // Home
        .state('home', {
            url: '/',
            title: 'Página Inicial',
            templateUrl: 'views/home.html'
        })
        .state('eleitosDiaconos', {
            url: '/d13503988fc/eleito-diacono',
            title: 'Eleito Diácono',
            templateUrl: 'views/eleitosDiaconos.html',
            controller: 'eleitosDiaconosController'
        })
        .state('seminarista', {
            url: '/520b81d7941/seminarista',
            title: 'Vestes Seminaristas',
            templateUrl: 'views/seminarista.html',
            controller: 'seminaristaController'
        });
})

