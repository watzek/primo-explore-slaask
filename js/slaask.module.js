angular
  .module('slaask', ['angularLoad'])
  .component('prmTopBarBefore', {
      controller: ['angularLoad', 'slaask_id', function (angularLoad, slaask_id) {
          this.$onInit = function () {
            angularLoad.loadScript('https://cdn.slaask.com/chat.js')
              .then(() => _slaask.init(slaask_id))
          }
      }]
  })
