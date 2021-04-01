document.addEventListener('mousemove', function(e){
    let left_eyes = document.querySelector('#left_eyes > div');
    let right_eyes = document.querySelector('#right_eyes > div');
    var position_x = e.clientX * 100 / window.innerWidth - 100;
    var position_y = e.clientY * 100 / window.innerHeight - 100;
    // var window_center = [document.body.clientWidth / 2, document.body.clientHeight / 2]
    
    left_eyes.style.transform = `translate(${position_x}%, ${position_y}%)`;
    right_eyes.style.transform = `translate(${position_x}%, ${position_y}%)`;
    console.log("position_x, position_y", position_x, position_y);
});