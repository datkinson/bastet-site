(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Server',
        avatar: 'svg-1',
        icon: '/img/icon-black.svg',
        status: 'Coming Soon',
        content: 'Proxy Application to link between all different kinds of home automation / internet of things devices.',
        git: 'https://github.com/martindevans/bastet',
        install: 'curl http://bastet.link/scripts/install-bastet | sh',
        projectName: 'Bastet'
      },
      {
        name: 'Client',
        avatar: 'svg-2',
        icon: '/img/icon-white.svg',
        status: 'Coming Soon',
        content: 'A client application to manage and interact with baset via its open API',
        git: 'https://github.com/datkinson/bastet-node',
        projectName: 'Bastet-Node'
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
