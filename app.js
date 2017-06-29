var app = angular.module('bugs', []);

app.controller('JogoController', function($scope, $interval){
  $scope.Iniciar = function() { //Função que da início ao jogo
    $scope.bugs = [];  //Zero bugs no início (caso reinicie o jogo ele começa com 0)
    $scope.pontos = 0; //Zera os pontos

    function geraBugs() {
      var objetoBug = { left: Math.floor(Math.random() * 500) + 'px', top: Math.floor(Math.random() * 500) + 'px'}; // Gera um objeto com posição aleatória com no máximo 500px de largura ou altura

      $scope.bugs.push(objetoBug); //Adicionar o objetoBug no vetor $scope.bugs
    }

    $scope.remover = function(indexBug) { //recebe o index do bug que foi clicado
      $scope.bugs.splice(indexBug, 1); //remove o bug com base no index
      $scope.pontos++; //Acrecenta + 1 quando se remove um bug
    }


    $scope.tempo = $interval(function () {
      if($scope.bugs.length > 15){
        if(angular.isDefined($scope.tempo)) {
            $interval.cancel($scope.tempo);
        }

        return $scope.bugs = [{fail: "GAME OVER"}];
      }
      geraBugs(); //Repete a função infinitamente (cria os bug's na tela)
    }, 100);

}
});
