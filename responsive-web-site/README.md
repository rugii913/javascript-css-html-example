## layout1 - 시맨틱 태그(semantic tag)
- layout을 잡을 때는 항상 width, height 값을 줘서 영역부터 확인
  - 각 영역 확인 시에는 임시로 background에 색을 줘서 확인
- block 간의 구조를 정렬할 때는 float: left를 사용
  - 그런데 float: left를 사용하면 마치 height가 0인 듯이 다음 block과 겹치는 현상이 발생함
    - 이를 해결하려면 clear: both를 사용 → emmet 약어 cl
- block 자체를 화면에서 가운데 정렬하려면 margin: 0 auto
- HTML5부터 등장한 semantic tag
  - class 이름에 semantic을 넣지 않고, tag 자체에 semantic을 부여함
  - tag의 이름 자체에 의미가 있는 div를 만든 것
  - 참고 자료
    - https://developer.mozilla.org/en-US/docs/Web/HTML/Element
    - https://webzz.tistory.com/229

## layout2 - 미디어 쿼리(media query)
- (ex.) https://webstoryboy.github.io/responsive2019/res205_02.html
  - 화면 크기에 따라 적용되는 css가 달라짐을 확인할 수 있음
  - 이러한 반응형 사이트의 핵심이 media query
- media query 참고할 자료
  - [MDN - CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries)
    - [MDN - Beginner's guide to media queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
    - [MDN - Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - [W3C Editor's Draft - Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/#typedef-media-feature)
- media query breakpoint 작성 순서 관련 참고 자료
  - [기타 블로그 - 미디어쿼리 breakpoint 작성순서](https://usingu.co.kr/frontend/css/%EB%AF%B8%EB%94%94%EC%96%B4%EC%BF%BC%EB%A6%AC-breakpoint-%EC%9E%91%EC%84%B1%EC%88%9C%EC%84%9C/)
    - 데스크탑을 기준점으로 작업할 경우 media query의 max-width만 명시
    - 아래 설정이 더 위에 쓰여진 설정을 덮어쓰는 CSS 특성을 이용하도록, max-width가 더 작은 속성을 아래 쪽에 적어줌

## layout3 - media query를 이용한 layout 구성 실습 1
- header, aside, section, footer가 있는 형태
- [(cf.) 각 영역 background에 색 줄 때 참고할 만한 사이트](https://materializecss.com/color.html)
- 유의사항
  - 반응형 사이트에서는 기본적으로 scroll bar가 나오지 않도록 해야 함
    - 가장 width가 큰 DOM element의 width가 1200px이라면
    - 브라우저 자체 스크롤바 width 등을 고려하여 break point를 딱 1200px로 줘선 안 됨

## layout4 - media query를 이용한 layout 구성 실습 2
- header, aside, section, article, footer가 있는 형태

## layout5 - media query를 이용한 layout 구성 실습 3
- header, aside, section 3개, footer가 있는 형태
- 가운데 정렬
  - block인 element를 가운데 정렬할 때는 margin: 0 auto
  - inline인 element를 가운데 정렬할 때는 text-align: center;

## layout6 - media query를 이용한 layout 구성 실습 4
- header, article, section 그리고 section 내의 10개의 div, footer가 있는 형태
- cf. block element라면 기본이 width: 100%와 비슷한 상태이므로 생략 가능
- float과 overflow: hidden
  - 참고 자료
    - [MDN - Block formatting context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_formatting_context)
    - [MDN - float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
    - [기타 블로그 - Day9. overflow: hidden;이 float의 문제점을 해결할 때 쓰이는 이유](https://velog.io/@kimconut/Day9.-overflow-hidden이-float의-문제점을-해결할-때-쓰이는-이유)
    - [기타 블로그 - HTML/CSS float와 overflow hidden 5분만에 이해하기](https://1duri1.tistory.com/249)
    - [기타 블로그 - CSS float 과 overflow / clear fix (내부플로팅 문제해결)](https://velog.io/@mhnormal/CSS-float-과-overflow-clear-fix-내부플로팅-문제해결)
- nth-last-child()
  - 참고 자료
    - [기타 블로그 - 【CSS】제일 마지막 요소부터 세는 nth-last-child()](https://wellcode.tistory.com/5)

## layout7 - media query를 이용한 layout 구성 실습 5
- 직접 작성한 layout과 제시된 layout 비교
  - element 선택 시 반드시 복붙해서 사용(오타 방지)
  - element 선택 시 태그 이름보다는 클래스 이름으로 선택할 것
  - 같은 float 값을 가진 element를 쌓아서 정렬하기 위한 overflow: hidden; 사용
  - 상위 element에 직접 height를 주기보다는 하위 element의 height를 감싸도록 함
  - width와 margin에 % 사용
  - 상위 element에서 padding을 사용한 경우,
    - 하위 요소의 width에서 %를 사용하면, 알아서 상위 요소의 padding을 제외한 안 쪽 부분만을 너비로 계산함
