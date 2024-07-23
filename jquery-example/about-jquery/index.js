/* 
## About jQuery - How jQuery Works
*/

// $(document).ready(() => { alert("Hello world!"); });
// jQuery(document).ready(() => { alert("Hello world!!!!!!"); });

// ready, click은 deprecated
// $(document).ready(() => {
//     $("a").click((event) => {
//         event.preventDefault();
//         alert("Thanks for visiting!");
//     });
// });

// (cf.) [VS CODE] VS CODE의 외부 JS문서에서 제이쿼리 자동완성기능 추가 https://ossam5.tistory.com/227
$(() => {
    $("a").on("click", function (event) {
        event.preventDefault();
        alert("Thanks for visiting!");
        console.log(this);
        $("a").hide("slow");
    });

    $("a").addClass("test");
    $("a").removeClass("test");

    /* (cf.) 익명 함수를 줄 때와 화살표 함수를 줄 때의 this는 다름 - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions */
    $("#div1").on("click", function() {
        console.log(this);
        $(this).hide("fast");
    });
    $("#div2").on("click", () => {
        console.log(this);
        $("#div2").hide("fast");
    })

    // Callbacks and Functions 부분은 생략
})

/* 
## About jQuery - Additional jQuery Support

- 이하 여러 도움을 얻을만한 자원들
    - Official Forums - http://forum.jquery.com/ - 그 아래로 Getting Started 등 여러 subforums
    - Mailing List Archives
    - Chat / IRC Channel
    - StackOverflow
*/

$()
