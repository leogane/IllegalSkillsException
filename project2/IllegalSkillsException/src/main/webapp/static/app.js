/**
 * 
 */
window.onload = function() {
//	loadNavbar();
}

// ///////////////ANGULAR//////////////////////////////////////////
var app = angular.module("myHome", [ "ngRoute" ]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "static/features/home/home.html",
		controller 	: "role"
			
	}).when("/Profile", {
		templateUrl : "static/features/table/profile.html",
		controller : 'profile'

	});
});

app.controller('TestCtrl', function() {
	// nothing yet
});

app.controller('profile', function(dataService) {

	prof = this;

	prof.getProfile = dataService.profile

	prof.getProfile();

}).service('dataService', function($http) {

	var dataService = this;

	dataService.profile = function() {

		$http.get('profile').then(function(response) {

			getProfileInfo(response);

		});
	}
});

app.controller('role', function(getInfoService) {

	inf = this;

	homeB = this;
	
	inf.getRole = getInfoService.info

	inf.getRole();
	
	//For Boards
	homeB.getBoards = getInfoService.boards
	
	homeB.getBoards();

}).service('getInfoService', function($http) {

	var getInfoService = this;

	getInfoService.info = function() {

		$http.get('getRole').then(function(response) {

			getRoleType(response);

		});
	}
	
	getInfoService.boards = function() {
		$http.get('getHome').then(function(response) {

		loadHome(response);

		});
	}
});



// ///////////////ANGULAR//////////////////////////////////////////

function loadMasterNavbar() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById('navbar').innerHTML = xhr.responseText;
		}
	}
	xhr.open("GET", "ajaxNavbar", true);
	xhr.send();
}

function loadUserNavbar() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById('navbar').innerHTML = xhr.responseText;
		}
	}
	xhr.open("GET", "userNavbar", true);
	xhr.send();
}

function getProfileInfo(response) {
	
	client = response.data;

	// Grab the data from the json
	var userId = client.userId;
	var firstName = client.firstName;
	var lastName = client.lastName;
	var userName = client.userName;
	var password = client.password;
	var roleType = client.roleType;
	var email = client.email;
	var team = client.teamId;

	// create the cells - td and give the value to the cells
	var tdID = document.createElement('td');
	var tdFirstName = document.createElement('td');
	var tdLastName = document.createElement('td');
	var tdUser = document.createElement('td');
	var tdPass = document.createElement('td');
	var tdRole = document.createElement('td');
	var tdEmail = document.createElement('td');
	var tdTeam = document.createElement('td');

	tdID.innerHTML = userId;
	tdFirstName.innerHTML = firstName;
	tdLastName.innerHTML = lastName;
	tdUser.innerHTML = userName;
	tdPass.innerHTML = '*****';
	tdRole.innerHTML = roleType;
	tdEmail.innerHTML = email;
	tdTeam.innerHTML = team;

	// create the row -tr
	var row = document.createElement('tr');

	// append the cells to the tr
	row.appendChild(tdID);
	row.appendChild(tdFirstName);
	row.appendChild(tdLastName);
	row.appendChild(tdUser);
	row.appendChild(tdPass);
	row.appendChild(tdRole);
	row.appendChild(tdEmail);
	row.appendChild(tdTeam);

	// add the row to the table
	var table = document.getElementById('userTable');
	table.appendChild(row);
}

function getRoleType(response){
	client = response.data;
	var roleType = client.roleType;
	
	if(roleType == 1){
		loadMasterNavbar();
	}
	else if(roleType == 2){
		loadUserNavbar();
	}
	
}

function loadHome(response){
	
	var clientUser = response.data;
	
	var tableElement = document.getElementById('view');
	
//	var board = document.getElementById('homeTitle');
//	board.innerHTML = 'Here are Your Boards';
	
	var boardTitle;
	
	
	for (i = 0; i < clientUser.length; i++){
		
		var row = document.createElement('tr');
		
		var tdTitle = document.createElement('td');
		tdTitle.innerHTML = clientUser[i]["bTitle"];
		row.appendChild(tdTitle);
		
		var link = document.createElement('button');
		link.innerHTML = 'Go to board';
		link.setAttribute('id', clientUser[i]["bId"]);
		link.addEventListener('click', getBoard, false);
		link.setAttribute('class', 'btn btn-info');
		row.appendChild(link);
		
		tableElement.appendChild(row);
		
	}
	
}

function getBoard(){
	var boardId = this.id;
	console.log(boardId);
	//Add call to board
	console.log("Go to Board");
}