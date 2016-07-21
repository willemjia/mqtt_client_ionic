angular.module('starter.controllers', [])

.controller('DashCtrl', function() {

})

.controller('ChatsCtrl', function($scope, Chats) {
  client.subscribe("mqtt2");//订阅主题
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
})

.controller('AccountCtrl', function($scope) {
});
