let total_page = 0; // 페이지 개수
let current_idx = 0; // 현재 페이지
let screen_h = 0; // 화면 크기
let page_h = 0; // 페이지 하나 당의 크기
let scroll_y = 0 // 스크롤의 마지막 위치
let onpage_on = true; // 
let isScroll = false; // 현재 스크롤 중인지 체크

$(document).ready(function(){

     // 새로고침 시 스크롤 상단에 위치
     history.scrollRestoration = "manual"

    $('.wrap').on('scroll touchmove mousewheel', function(event){

        init()

        if(scroll_y > $('html').scrollTop() && !onpage_on){
            onpage_on = true;
            isScroll = false;
        };

        if(!onpage_on) return;

        event.preventDefault();
        if(isScroll) return; // 스크롤 중이라면 return

        isScroll = true
        var direction = event.originalEvent.wheelDelta; //마우스 휠 방향
		var y = 0;

        if(direction > 0){
            // 위로 스크롤 한 경우
            current_idx--;
            if(current_idx < 0){
                set_idx(0)
                return;
            }
            y = current_idx * page_h;
        }else{
            // 아래로 스크롤 한 경우
            current_idx++;
            console.log(current_idx, total_page)
            if(current_idx == total_page){
                set_idx(total_page - 1)
                return;
            }
            y = current_idx * page_h;
        }

        $('html').animate({scrollTop:y}, 700, function(){isScroll=false;});
    });
}); 

function set_idx(idx){
    current_idx = idx
    onpage_on = false;
}

function init(){

    // 스크롤의 맨 끝 부분의 위치를 구함
    setHeight();

    total_page = $('article > div').length;
    scroll_y = page_h * total_page;
}

function setHeight(){
	// 현재 화면의 높이를 page의 높이로 할당

	screen_h = document.body.clientHeight;
	page_h = screen_h;
}