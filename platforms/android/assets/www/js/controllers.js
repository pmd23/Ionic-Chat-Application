angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
    var messageOptions = [
  /* { content: '<p>Wow, this is really something huh?</p>' },
   { content: '<p>Yea, it\'s pretty sweet</p>' },
   { content: '<p>I think I like Ionic more than I like ice cream!</p>' },
   { content: '<p>Gee wiz, this is something special.</p>' },
   { content: '<p>fsdfsf</P>' },
   { content: '<p>Is this magic?</p>' },
   { content: '<p>Am I dreaming?</p>' },
    { content: '<p>Pritish</P>' },
     { content: '<p>Am I dreaming?</p>' },
     { content: '<p>Yea, it\'s pretty sweet</p>' },
     { content: '<p>I think I like Ionic more than I like ice cream!</p>' },*/
    ];

    $scope.data = {};
    // $scope.myId = '12345';
    $scope.messages = [];

    var messageIter = 0;
    //$scope.messages = messageOptions.slice(0, messageOptions.length);

    $scope.add = function () {
        //var nextMessage = messages[messageIter++ % $scope.data.message.length];
        $scope.messages.push(angular.extend({}, { content: '<p> ' + $scope.data.message + '</p>' }));
        delete $scope.data.message;

        // Update the scroll area and tell the frosted glass to redraw itself
        $ionicFrostedDelegate.update();
        $ionicScrollDelegate.scrollBottom(true);
    };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
