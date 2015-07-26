'use strict';

/**
 * @ngdoc service
 * @name birraApp.facebookProvider
 * @description
 * # facebookProvider
 * Provider in the birraApp.
 */
angular.module('birraApp')
  .provider('facebookProvider', function () {

    // Private variables
    var accessToken = 'CAAXNFKKLuU0BAHDXZBsA89wpHHbiRnKBlQfcw2AScaKpZC5ZAHxikQs0XgIapVhCyt3ZCWI2FVZCtfHmAudHSvGZBJ5DTeP7ZBbZC5DD2YjOi1rXUJeyK7OolNIriNjVhfT28BQeA9BbhvnDIfZCRNmVhbKbwvV2769OPAJZBsA3ZBtnvoPAJQoBo2d6TlkMhP5a6wqgu5rKVZADgf0NVmFNdxAZA';
    var fbPage = 'Cer';

    // Private constructor
    function facebookProvider() {
      this.accessToken = accessToken;
      this.fbPage = fbPage;
    };



    // Method for instantiating
    this.$get = function () {
      return new facebookProvider();
    };
  });
