
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$mdThemingProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
        'use strict';

        // Remover a exclamação (!) da URL
        var SEM_PREFIXO = '';
        $locationProvider.hashPrefix(SEM_PREFIXO);

        // Utilizando o HTML5 History API (descomente se desejar URLs limpas)
        // $locationProvider.html5Mode(true);

        // Configuração de rotas padrão
        $urlRouterProvider.otherwise('/');

        // Configuração do tema padrão
        $mdThemingProvider.theme('default')
            .primaryPalette('blue');
    }
]);

app.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        // Atualizar o título da página dinamicamente com base no estado atual
        $rootScope.pageTitle = toState.title || 'Diocese de Roma'; // Título padrão
    });
});

