function printValue(name, _form){
  element = _form.querySelector(`input[name=${name}]`)
  console.log(element.value)
}


function updateURL(event) {
  element_url = form.querySelector(`input[name=${"field_url"}]`).value
  element_sec = form.querySelector(`input[name=${"second"}]`).value
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp} ${element_url}`;
  var hcsrc = "http://media.w3.org/2010/05/bunny/movie.mp4"
  var video = document.getElementsByTagName('video')[0];
  var sources = video.getElementsByTagName('source');
  
  if (element_url.length == 0) 
  {
	element_url = sources[0].src;
  }
  
  if (!element_sec.length == 0){
	element_url = element_url + '#t=' + element_sec;
  }
  
  
  sources[0].src = element_url;
  video.load();
  event.preventDefault();
}

function saveLogin(event) {
	var f_name = login_form.querySelector(`input[name=${"F_Name"}]`).value;
	var l_name = login_form.querySelector(`input[name=${"L_Name"}]`).value;
	sessionStorage.login = f_name + ' ' + l_name;
}

function removeLoginForm() {
	login_form.parentNode.removeChild(login_form)
	document.getElementById('login_mssg').innerHTML = "Welcome " + sessionStorage.login
}

function showCommentForm() {
	var parent = document.getElementById('user_comment');
	var commentForm = document.createElement('form');
	commentForm.setAttribute('id', 'comment_form');
	html = '<form>' +
					'<textarea name="Comment"/ rows = "5" cols = "80"> </textarea> ' +
					'<button type="submit">Comment</button>' +
				'</form>'
	commentForm.innerHTML = html;
	parent.appendChild(commentForm);
	commentForm.addEventListener('submit', postComment);
}

function getInitials() {

	var initials = sessionStorage.login.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
	return initials[0] + initials[1];

}

function getCoordinates(comment) { 
    var options = { 
        enableHighAccuracy: true, 
        timeout: 5000, 
        maximumAge: 0 
    }; 
  
    function success(pos) { 
        var crd = pos.coords; 
        var lat = crd.latitude.toString(); 
        var lng = crd.longitude.toString(); 
        var coordinates = [lat, lng]; 
        console.log(`Latitude: ${lat}, Longitude: ${lng}`); 
        getCity(coordinates, comment); 
        return; 
  
    }
    
     function error(err) { 
        console.warn(`ERROR(${err.code}): ${err.message}`); 
    } 
  
    navigator.geolocation.getCurrentPosition(success, error, options); 
}  
    
    
function getCity(coordinates, comment) { 
    var xhr = new XMLHttpRequest(); 
    var lat = coordinates[0]; 
    var lng = coordinates[1]; 
  
    // Paste your LocationIQ token below. 
    xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.06aefb5edda7e634dd00f55553704106&lat=" + 
    lat + "&lon=" + lng + "&format=json", true); 
    xhr.send(); 
    xhr.onreadystatechange = processRequest; 
    xhr.addEventListener("readystatechange", processRequest, false); 
  
    function processRequest(e) { 
        if (xhr.readyState == 4 && xhr.status == 200) { 
            var response = JSON.parse(xhr.responseText); 
            var city = response.address.city; 
            var country = response.address.country; 
            console.log(country, city);
            var divs = comment.getElementsByTagName('div');
            divs[6].innerHTML = 'from ' + city+', '+country;
            return 'from ' + city+', '+country;
        } 
    } 
} 

function postComment(event) {
	var comment_text = document.getElementById('comment_form').querySelector(`textarea[name=${"Comment"}]`).value;
	var parent = document.getElementById('comment_section')
	var comment = document.createElement('div')
	comment.setAttribute('class', 'person');
	var date = new Date();
	var loc = getCoordinates(comment);
	var timestamp = date.toLocaleDateString('fr-FR') + '  ' +
					date.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2}) + 
					':' + date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2});
	html = '<div class="person">' +
			  '<div>' +
				'<div class="person-avatarPlaceholder color-1 js-avatarPlaceholder"><span class="js-initials">'+getInitials()+'</span></div>' +
			  '</div>' +
			  '<div class="person-name js-name">'+sessionStorage.login+ ': </div>' +
			  '<div class="person-comment">'+comment_text+'</div>' +
			  '<div class="person-timestamp"> ~'+timestamp+'</div>' +
			  '<div class="person-timestamp"> ~'+loc+'</div>' +
			'</div>' +
			'<br>';
	comment.innerHTML = html;
	console.log("u ok bro?");
	console.log(localStorage.comments);
	commentData = [getInitials(), sessionStorage.login, comment_text, timestamp, loc]
	try {
       var savedComments = JSON.parse(localStorage.comments);
    } catch(e) {
        alert(e);
        return
    }
	console.log(savedComments);
	console.log(typeof savedComments);
	savedComments.push(commentData);
	console.log(savedComments);
	localStorage.comments = JSON.stringify(savedComments);
	console.log(getInitials());
	parent.appendChild(comment);
	event.preventDefault();

}


function checkLogin(){
	if (sessionStorage.login) {
		console.log("hide element");
		removeLoginForm();
		showCommentForm();
	}	else {
		console.log("No login")
	}
	if (localStorage.comments) {
		var i;
		console.log("Saved Comments string:");
		console.log(localStorage.comments);
		try {
		   var savedComments = JSON.parse(localStorage.comments);
		} catch(e) {
			alert(e);
			return
		}
		for (i=0; i < savedComments.length; i++) {
			var commentData = savedComments[i];
			var p = document.getElementById('comment_section');
			var comment = document.createElement('div');
			comment.setAttribute('class', 'person');
			html = '<div class="person">' +
			  '<div>' +
				'<div class="person-avatarPlaceholder color-1 js-avatarPlaceholder"><span class="js-initials">'+commentData[0]+'</span></div>' +
			  '</div>' +
			  '<div class="person-name js-name">'+commentData[1]+ ': </div>' +
			  '<div class="person-comment">'+commentData[2]+'</div>' +
			  '<div class="person-timestamp"> ~'+commentData[3]+'</div>' +
			  '<div class="person-timestamp"> ~'+commentData[4]+'</div>' +
			'</div>' +
			'<br>';
			comment.innerHTML = html;
			p.appendChild(comment);
		}
	}
	else {
		localStorage.comments = JSON.stringify([]);
	}
	
}

function purgeComments(){
	let test = prompt("hey, you're not a dev!", "I don't care");
	while (test != "I don't care") {
		test = prompt("hey, you're not a dev!", "I don't care");
	}
	if (localStorage.comments){
		localStorage.removeItem("comments");
		
	}
	location.reload();
}

function rotateVideo(){
	let c = document.getElementById("videocontainer").getAttribute("class")
	if (c == "vvideoContainer") {
		document.getElementById("videocontainer").setAttribute("class", "hvideoContainer")
	} else {
		document.getElementById("videocontainer").setAttribute("class", "vvideoContainer")
	}
}

const form_video_url = document.querySelector('#form_video_url');
const video_url = document.querySelector('#video_url');
const form = document.getElementById('form_video_url');
const log = document.getElementById('log');
form.addEventListener('submit', updateURL);
const login_form = document.getElementById('login_form');
const body = document.getElementById('body');
body.addEventListener('load', checkLogin());
const x = document.getElementById('xxx');
x.addEventListener('click', function () {alert("No such things in here!")})
const purgec = document.getElementById('purgeButton');
purgec.addEventListener("click", purgeComments);
login_form.addEventListener('submit', saveLogin);
const rotate = document.getElementById('rotatevideo');
rotate.addEventListener("click", rotateVideo);


