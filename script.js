

eventListeners();
function eventListeners() {
  const ui = new UI();
    //Loading Screen
 window.addEventListener('load', function () {
       ui.hideLoadingScreen();
  });
    //Navbar button
    document.querySelector('.nav-btn').addEventListener('click', function () {
        ui.showNavBar()
    });
    //video switch
    document.querySelector('.switch').addEventListener('click',function () {
        ui.videoSwitch()
    });


}

//constructor
function UI() {

}
//Hide the loading screen
UI.prototype.hideLoadingScreen = function () {
    document.querySelector('.loading').style.display = "none";
};
//Show the Navbar
UI.prototype.showNavBar = function () {
    document.querySelector('.nav').classList.toggle('nav-reveal')
};
//video switch function
UI.prototype.videoSwitch = function () {
    let btn = document.querySelector('.switch-btn');
    if(!btn.classList.contains('switch-off')) {
        btn.classList.add('switch-off');
        document.querySelector('.video').pause()
    }
    else {
        btn.classList.remove('switch-off');
        document.querySelector('.video').play()
    }
};

//Image Modal
var modal = document.getElementById('myModal');

var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");

var showModal = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
};

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
};








