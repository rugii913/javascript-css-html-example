## layout1 - 시맨틱 태그(semantic tag)
- layout을 잡을 때는 항상 width, height 값을 줘서 영역부터 확인
  - 각 영역 확인 시에는 임시로 background에 색을 줘서 확인
- block 간의 구조를 정렬할 때는 float: left를 사용
  - 그런데 float: left를 사용하면 마치 height가 0인 듯이 다음 block과 겹치는 현상이 발생함
    - 이를 해결하려면 clear: both를 사용
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
