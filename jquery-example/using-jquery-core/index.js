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
