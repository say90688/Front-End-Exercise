$(document).ready(function(){
    const area = document.querySelector('.box_area');
    const target  = document.querySelector('.box');
    const header = document.querySelector('header');
    const hight_score_target = document.querySelector('.high_score_box');

    let score = 0

    function get_display_position(){
        let target_style  = getComputedStyle(target);
        let area_style = getComputedStyle(area);
        let header_style = getComputedStyle(header);
        
        let area_width = parseInt(area_style.width, 10);
        let header_height = parseInt(header_style.height, 10);
        let area_height = parseInt(area_style.height, 10) - header_height;
        
        let rand_x  = calculate_rand_position(area_width);
        let rand_y  = calculate_rand_position(area_height);
        let rand_xy = [rand_x, rand_y];

        return rand_xy;
    }

    function calculate_rand_position(x1){
        let rand_int = Math.random();
        return rand_int * x1;
    }

    target.addEventListener('click', function(){
        let target_xy = get_display_position();
        let target_x = target_xy[0];
        let target_y = target_xy[1];
        //let target_y = target_xy[1];
        console.log("left : ", target_x, "top : ", target_y);
        // target.animate({'transform': 'translate(' + target_x + 'px, ' + target_y + 'px)'}, 300)
        target.style.transform = 'translate(' + target_x + 'px, ' + target_y + 'px)';
        set_score()
    })

    hight_score_target.addEventListener('click', function(){
        set_score()
    })

    function set_score(){
        score++;
        document.getElementById("count").textContent="COUNT : " + score;
    }

    $('.box > span').click(function(){
        $('.box > span').hide()
        $('.high_score_box').css({"display": "block"})
    })

    $('.start_button').click(function(){
        $('.loading_display').animate({'opacity': "1"}, 3000)
        setTimeout(function(){
            $('.wrap').css({'display': 'block'})
        }, 3000)
        $('.loading_display').animate({'opacity': "0"}, 3000)
        setTimeout(function(){
            $('.loading_display').css({'display':'none'})
        }, 6000)
    })

    // function timer(){
// 
    // }

    // function get_display_position(){
    //     let target_style  = getComputedStyle(target);

    //     let display_style = getComputedStyle(display);
    //     let display_width  = parseInt(display_style.width, 10);
    //     let display_height = parseInt(display_style.height, 10);
    //     console.log("display_style.height", display_width);
    //     console.log("display_style.height", display_height);

    //     let feature_size   = parseInt(target_style.width);
    //     let moveable_width = display_width - feature_size;
    //     let moveable_heigiht = display_height - feature_size;
        
    //     let rand_x  = calculate_rand_position(moveable_width);
    //     let rand_y  = calculate_rand_position(moveable_heigiht);
    //     let rand_xy = [rand_x, rand_y];

    //     return rand_xy;
    // }


    // target.addEventListener('mouseout', function(){
        // target.style.background = 'rgba(100, 100, 255, 1)'
    // })
    

    // target.addEventListener('mouseover', function(){
        // target.style.background = 'rgba(100, 100, 255, 1)'
    // })

    // function animate(){
        // target.animate({'width': '1000px'}, 1500)
        // target.animate({'width': '300px'}, 1500)
    // }


    // var player = target.animate([
    //   {transform: 'translate(0)'},
    //   {transform: 'translate(100px, 100px)'}
    // ], 500);
// 
    // 
    // player.addEventListener('finish', function() {
    //   target.style.transform = 'translate(100px, 100px)';
    // });
});
 