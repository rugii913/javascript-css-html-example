/* 
# Using jQuery Core - https://learn.jquery.com/using-jquery-core/
*/
/* 
## Using jQuery Core - $ vs. $()

### $().? 혹은 jQuery().?
- 위와 같은 방식으로 호출되는 메서드들은 jQuery object methods
    - $.fn namespace 혹은 jQuery prototype의 부분
    - 이러한 메서드들은 selection을 알아서 this로 받고, this로 selection을 return
- (cf.) jQuery() jQuery 공식 API Documentation - https://api.jquery.com/jQuery/
    - jQuery(..)는 jQuery type 객체를 반환함 - https://api.jquery.com/Types/#jQuery
    - jQuery type 객체는 DOM element의 collection을 담고 있음

### $.? 혹은 jQuery.?
- 위와 같은 방식으로 호출되는 메서드들은 jQuery methods
    - jQuery namespace의 부분
    - 주로 utility-type 메서드들이며, selection에 대해 동작하는 게 아님
    - 자동으로 어떤 argument를 받아들이지 않고, return value의 type도 다양
    
### 주의사항
- $.each()와 $(..).each처럼 메서드 이름이 같은 경우가 있으므로 주의
- 가이드에서는 each(), $.each()와 같은 식으로 utility 메서드에서는 jQuery namespace를 명시하여 구분함
*/
$("h1").remove(); // 

// ----------------------------------------------

/* 
## Using jQuery Core - $(document).ready()
- (cf.) JQuery<Document>.ready()는 deprecated
    - https://api.jquery.com/ready/
    - 위 문서를 참고하면 $( handler ) 방식만 권장함
    - (ex.) $(function() { .. })
- (cf.) document 객체는 전역 객체 window의 property 중 하나
- (cf.) readyStateChange, ready
    - https://ko.javascript.info/onload-ondomcontentloaded#ref-721
- ready에 대한 더 자세한 내용은 https://api.jquery.com/ready/ 참고

### $(document).ready(..) vs. $(window).on("load", ..)
- $(document).ready([실행할 함수])는
    - 실행할 함수가 DOM이 준비가 된 후(JS를 실행할 수 있는 상태) 단 한 번 실행되도록 함
- 반면에 $(window).on("load", [실행할 함수])는
    - DOM이 아닌 전체 페이지(image, iframes 같은 것들을 포함하여)가 모두 준비된 후 실행되도록 함
*/
$(function () {
    console.log("index.js - document ready");
});
// index.html의 img 로딩을 기준으로 콘솔 로그 순서를 확인해볼 것
// - 캐시 비우기 및 강력 새로고침으로 불러와야 좀 더 정확하게 볼 수 있음
$(window).on("load", function() {
    console.log("index.js - window loaded");
});
