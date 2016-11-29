angular.module('contatooh').controller('ContatosController',
	function($scope,Contato){
		$scope.contatos = [];
		
		$scope.filter = '';
		
		function buscaContatos(){
			Contato.query(
				function(contatos) {
					$scope.contatos = contatos;
				},
				function(error){
					console.log(error);
					$scope.mensagem = {
						texto: 'Não foi possível obter a lista de contatos'
					};
				});
		}
		buscaContatos();

		$scope.remover = function(contato){
			Contato.delete({id:contato._id},
				buscaContatos,
				function(error){
					console.log(error)
					$scope.mensagem = {
						texto: 'Não foi possível remover contato'
					};
				});
		}

		$scope.mensagem = {texto: ''};


});