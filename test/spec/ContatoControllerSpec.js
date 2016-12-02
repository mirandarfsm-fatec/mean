describe("ContatoController",function(){

	var $scope, $httpBackend;

	beforeEach(function(){
		module('contatooh');
		inject(function($injector,_$httpBackend_){
			$scope = $injector.get('$rootScope').$new();
			$httpBackend = _$httpBackend_;
			$httpBackend.when('GET','/contato/1').respond({_id:'1'});
			$httpBackend.when('GET','/contato').respond([{}]);
		});
	});

	it("Deve criar um contato vazio quando nenhum parâmetro de rota for passado",inject(function($controller){
		$controller('ContatoController',{"$scope":$scope});
		expect($scope.contato._id).toBeUndefined();
	}));

	it("Deve preencher o contato quando o parâmetro de rota for passado",inject(function($controller){
		$controller('ContatoController',{
			"$routeParams": {contatoId: 1},
			"$scope":$scope
		});
		$httpBackend.flush();
		expect($scope.contato._id).toBeDefined();
	}));
});