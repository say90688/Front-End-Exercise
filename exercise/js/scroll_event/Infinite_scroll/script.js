$(document).ready(function(){

    // 새로고침 시 스크롤 상단에 위치
    history.scrollRestoration = "manual"

    // 스크롤 할 때마다 이벤트
    window.onscroll = function(){
        console.log($(document).height(), window.innerHeight, window.scrollY)
        if (window.innerHeight + window.scrollY >= $(document).height()){
            $('article').append(append_html_code())
        }
    }

    function append_html_code(){
        return "<div class='content_box'></div>"
    }
});