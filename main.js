function doorsqueek() {
    var doorsqueek = new Audio('assets/door1.wav')
    doorsqueek.play();
}
function scream() {
    var scream = new Audio('assets/scream.wav')
    scream.play()
}

function openDoor() {
    console.log('working')
    document.getElementById('2').src='';
    document.getElementById('1').src='assets/webpage door 2.png';
    doorsqueek()

    setTimeout(() => {
        document.getElementById('1').src='assets/webpage door 3.png';
        scream()
      }, 1000);

    setTimeout(() => {
        location.href = 'home.html';
      }, 3000);

}