# CSS Flex와 Grid 제대로 익히기
- Inflearn 강의 "CSS Flex와 Grid 제대로 익히기"를 따라가며, 이를 기억하기 위한 메모

## Flex 핵심 정리

### Flex 시작하기
- (참고 자료) [1분 코딩 - 이번에야말로 CSS Flex를 익혀보자](https://studiomeal.com/archives/197)
- flex
  - flexible box, flexbox라 부르기도 함
  - 이름처럼 유연한 박스 레이아웃을 위해 고안된 스펙
    - 레이아웃 배치 전용 기능으로 고안되었으므로, 기존의 float, inline-block도가 강력하고 편리
- flex에 대한 오해
  - grid가 더 최신 스펙이므로 flex는 필요 없다?
    - flex로 가능한 것은 대부분 grid로도 가능하지만, flex를 사용해야만 하는 경우도 있음
    - IE에서도 (버그는 있지만) 지원하긴 함
      - 참고 - [Can I Use - CSS Flexible Box Layout](https://caniuse.com/flexbox)
    - grid보다는 flex가 사용하기 더 간단한 경우가 많음
    - 둘의 특징을 알아두고 적재적소에 함께 활용하는 것이 좋음

### Flex 핵심 정리 \#1 - 배치의 흐름
- flex 레이아웃을 만들기 위한 기본적인 HTML 구조
  - (flex container) flex의 부모 요소
    - 전체 flex 레이아웃을 제어
  - (flex item) flex의 자식 요소
    - container 안에서 각 item들이 flex 규칙에 따라 배치됨
- (기억할 용어) axis(축)
  - main axis(메인 축): item들이 배치된 방향인 축 - 마치 떡꼬치 꼬챙이처럼
  - cross axis(교차 축, 수직 축): 메인 축과 수직인 축
- flex 속성들 역시 container에 적용하는 속성과 item에 적용하는 속성으로 나뉨
- 속성들
  - **display: flex;** → flex 레이아웃을 만들기 위한 시작 / container에 적용
    - 처음 적용해보면
      - display block인 item들이 마치 inline인 것처럼 배치
      - width도 하위 요소만큼의 width만을 차지
      - item 간의 틈이 없어서, inline이나 inline-block보다는 float처럼 느껴지기도 할 것
    - float과 비교해보면
      - height 부분에서 차이가 두드러짐
      - 형제 요소인 다른 item과 height가 맞춰짐 → float처럼 height를 맞추기 위해 배경 이미지를 주는 등의 꼼수를 쓸 필요 없음
  - (cf.) **display: inline-flex;** / container에 적용
    - flex와 inline-flex와의 차이
      - item의 배치가 아닌 container와 주변 요소와의 배치를 결정
      - display inline-flex인 container는 마치 inline-block처럼 동작
  - **flex-direction** / container에 적용
    - item들이 배치되는 축(main axis)의 방향을 결정 - 기본값 row
    - 가능한 값
      - row, row-reverse, column, column-reverse
      - (cf.) 언어의 default 속성을 따라감 - 아랍어는 row 방향이 반대
  - **flex-wrap** → 줄넘김 처리 설정 / container에 적용
    - item을 한 줄에 담을 여유 공간이 없을 때 item 줄바꿈을 어떻게 처리할지 결정 - 기본값 nowrap
    - 가능한 값
      - nowrap(기본값): 줄바꿈하지 않고 item이 container를 삐져나옴 → float, inline-block으로 배치한 요소와 다른 부분
      - wrap: 마지막 item이 아래로 줄바꿈
      - wrap-reverse: 마지막 item이 위로 올라가며 줄바꿈
  - **flex-flow** / container에 적용
    - 단축 속성 → flex-direction과 flex-wrap을 한 번에 지정
      - flex-direction, flex-wrap 순으로 한 칸 띄고 작성
    - (ex.) flex-flow: row wrap;

### Flex 핵심 정리 \#2 - 간단한 예제
- width 600px을 breakpoint로 레이아웃이 바뀌는 예제
- (cf.) flex, grid를 공부할 때(특히 grid)는 Chrome보다는 Firefox가 도움이 된다는 의견
  - 개발자 도구 레이아웃 탭에서 flex container와 gird를 위한 별도 툴 제공

### Flex 핵심 정리 \#3 - 전체 아이템 정렬
- (기억할 용어) justify와 align
  - justify는 main axis 위에서의 정렬
  - align은 cross axis 방향으로의 정렬
- 속성들
  - **justify-content** / container에 적용
    - container 하위 item을 main axis에 대해 정렬
    - 가능한 값들
      - flex-start(기본값) / start로 작성해도 같음
      - flex-end / end로 작성해도 같음
      - center
      - space-between: 첫 item과 마지막 item은 양 끝에 붙음
      - space-around: 각 item 둘레에 균일한 간격
      - space-evenly: item과 item 간 여백의 collapse를 고려하여 균일한 여백
        - IE 등 일부 브라우저에서는 지원하지 않으므로 유의
        - 강의에서는 Edge에서도 지원하지 않는다고 했으나, 현재(2024년 8월) 지원하고 있음
  - **align-items** / container에 적용
    - container 하위 item을 cross-axis 방향으로 정렬
    - 가능한 값들
      - stretch(기본값)
        - cross-axis 방향으로 container를 채움
      - flex-start / start로 작성해도 같음
      - flex-end / end로 작성해도 같음
      - center
      - baseline
        - flex-start 쪽으로 item들이 붙으면서도 text baseline 기준으로 정렬
  - **align-content** → 여러 행 정렬 / container에 적용
    - item 행이 두 줄 이상일 때 행들의 cross-axis 방향 정렬
      - align-content는 행들의 cross-axis 방향 정렬, align-items는 각 행 안에서 item의 cross-axis 방향 정렬이라 할 수 있을 것
      - 여러 행에 대한 것이므로 우선 flex-wrap이 설정되어 item의 행이 두 줄 이상임을 전제로 함
        - 비유하자면 떡꼬치 꼬챙이가 여러 개가 된 상황
    - 가능한 값들
      - stretch(기본값)
        - 각 행이 cross-axis 방향으로 container의 height를 꽉 채움
      - flex-start / start로 작성해도 같음
      - flex-end / end로 작성해도 같음
      - center
      - space-between
      - space-around
      - space-evenly
- (cf.) svg로 만들어진 아이콘 가운데 정렬하기
  - container에 width, height 설정 후 
  - display: inline-flex(옆에 다른 텍스트 나올 것을 고려), justify-content: center, align-item: center 설정

### Flex 핵심 정리 \#4 - 유연한 박스
- 속성들
  - **flex-basis** → 유연한 박스의 기본 영역 / item에 적용
    - flex item의 main axis 쪽으로의 기본 크기를 설정 / flex-grow, flex-shrink와 세트
      - flex-direction이 row일 때는 width와 유사
      - flex-direction이 column일 때는 height와 유사
      - (cf.) 기본 크기라는 개념이 width, height와 완전히 일치하지는 않음에 유의
    - 가능한 값들
      - auto(기본값)
        - 해당 item의 width를 따라감
        - item의 width가 명시되어 있지 않은 경우 content 크기가 될 것
      - 0, 1 등의 숫자 값
      - 50%, 300px, 10rem 등 width, height에 사용하는 단위 있는 값들
        - content의 크기가 명시된 단위 있는 값보다 크면 item의 content 크기까지 늘어남
        - (cf.) width, height를 지정하는 것과는 분명히 차이가 있음
          - 예를 들어 width를 명시한 경우 content의 크기가 명시된 단위 있는 값보다 크면 content를 줄바꿈시킴
      - content
        - width를 따로 설정하지 않은 경우와 같음
  - **flex-grow** → 유연하게 늘리기 / item에 적용
    - item이 flex-basis의 값보다 커질 수 있는지 결정 / flex-basis, flex-shrink와 세트
      - flex box라는 이름에 맞게 유연한 박스가 됨
    - 가능한 값들
      - 0(기본값) → 늘어나지 않음
      - 1 등 0보다 큰 값 → 비율대로 늘어남
        - containr에서 flex-basis를 제외한 여백 부분을 flex-grow에 지정된 숫자의 비율로 나눠 가짐
          - item의 크기 비율이 아니라 여백 간 비율임에 유의
        - (cf.) 정수 뿐 아니라 소수로도 지정 가능
  - **flex-shrink** → 유연하게 줄이기 / item에 적용
    - item이 flex-basis의 값보다 작아질 수 있는지 결정 / flex-basis, flex-grow와 세트
    - 가능한 값들
      - 1(기본값)
      - 0보다 큰 값 → 비율대로 줄어듦
      - 0 → 줄어들지 않게 함
        - 고정폭 컬럼을 만들 때 활용 가능

### Flex 핵심 정리 \#5 - flex 속성 활용
- 속성들
  - **flex** / item에 적용
    - 단축 속성 → flex-grow, flex-shrink, flex-basis를 한 번에 지정(지정 순서도 언급 순서와 동일)
      - 보통 위 세 속성이 서로 관련이 깊으므로, 축약형을 쓰는 것이 편리
      - **(주의)** flex-basis를 명시하지 않은 경우 기본값인 auto가 아닌 0%가 적용
        - flex-basis가 0%로 전체 width를 동일하게 나눠 갖는 형태가 됨
        - flex-shrink는 명시하지 않아도 기본값 1을 사용함
    - flex는 white-space nowrap 등에 의해 content가 계산된 width를 넘어가면 강제로 줄이진 않음에 유의
      - **정확하게 비율을 나눠야 하는 다단 컬럼을 만들어야할 때는 flex-grow, flex-basis가 아닌 width를 명시**
      - 그럼에도 불구하고 width가 아닌 flex-grow, flex-shrink, flex-basis도 사용하는 게 유리한 경우가 있음
    - 일반적으로 flex-basis는 기본값인 auto를 사용하는 게 안전
      - 고정 길이를 주고 싶다면 flex-basis보다는 width를 명시

### Flex 핵심 정리 \#6 - 반응형 컬럼
- 다시 보는 width와 flex-basis
  - flex-basis auto는 width를 basis로 하는 것
    - 결국 width 50%로 명시하면 flex-basis 역시 이 width 값에 맞춰짐

### Flex 핵심 정리 \#7 - 유용한 기법들

#### margin auto를 이용한 flex item 배치
- justify-content가 아닌 margin auto(남아있는 margin 모두 소진)도 사용이 가능함

#### 고정폭 컬럼과 가변폭 컬럼 혼합 예시
- width, flex-grow, flex-shrink를 이용한 고정폭 가변폭 컬럼 구현

#### footer를 창 바닥에 붙이기 예시
- flex를 주로 row 방향으로 사용하다보니, column을 생각하지 못할 수도 있는데, 이렇게 이용 가능함

#### IE 버그
- IE 11에서 flex 기본 표준 스펙을 대부분 지원하긴 하지만, 종종 버그가 있음
  - min-height가 있으면 원하는 정렬이 되지 않음 → min-height가 아닌 height 사용
  - item의 content가 height를 넘어가는 상황은 overflow auto로 임시 조치 가능(다른 브라우저와 똑같은 모양이 되지는 못함)

### Flex 핵심 정리 \#8 - 개별 아이템 속성
- 속성들
  - **align-self** → cross-axis 방향으로 개별 아이템 정렬 / item에 적용
    - align-items와 달리 개별 item 각각을 정렬
    - 가능한 값들 → align-items와 같은 동작(auto, stretch, flex-start, flex-end, center, baseline)
      - 기본값은 auto로, 기본적으로 align-items 설정 상속
      - align-self는 align-items보다 우선권을 가짐
  - **order** → 배치 순서 / item에 적용
    - 각 item의 시각적 나열 순서를 결정
      - 작은 숫자가 먼저 배치
      - 시각적 나열 순서를 바꾸는 것으로 HTML 자체의 구조를 바꾸는 게 아니므로 접근성 측면 유의
        - 스크린 리더로 화면을 읽으면 order를 이용해 순서를 바꾼 것은 의미가 없음
  - **z-index** / item에 적용
    - position에서의 z-index와 같음, 숫자가 클 수록 위로 올라옴, 설정하지 않으면 0

## Flex UI 만들기

### Flex UI \#1 - 메뉴
- (cf.) rem과 em의 사용
  - font-size는 root를 따라가도록 rem 사용
  - padding은 현재 font-size에 비례하도록 em 사용
- width가 있을 때의 flex-shrink
  - 메뉴 예제에서 width 25%, flex-basis auto(기본값)인 상태에서 flex-shrink 1(기본값)이므로
    - hover 시 한 item의 width를 늘린다면, 다른 item들은 알아서 shrink
      - 이는 flex-wrap: nowrap 기본값의 영향도 있음
  - 추가 참고 자료
    - [MDN - CSS Flexible Box Layout \> flexbox의 기본 개념](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
    - [기타 블로그 - CSS flexbox: flex-item의 크기 조절](https://seukjjang.tistory.com/6)
    - [기타 블로그 - \[CSS\] Flexbox 크기 제어 전략: flex-basis, flex-grow, flex-shrink, width, max-width, min-width](https://dev-chim.tistory.com/entry/CSS-Flexbox-flex-basis-width)
    - [기타 블로그 - ](https://choar816.tistory.com/119)
      - Item의 content를 변화시키지 않을 때까지만 줄어든다고 함(디폴트로 min-width: auto, min-height: auto)
        - content까지 무시하고 줄어들게 하려면 overflow를 적절히 설정
    - flex-shirink의 자세한 계산 참고 - container의 렌더링 가능한 부분을 넘어선 크기가 기준
      - [기타 블로그 - CSS 플렉스박스(flex) flex-grow와 flex-shrink 속성](https://velog.io/@dlwoxhd/CSS-플렉스박스flex-flex-grow와-flex-shrink-속성)
      - [MDN - Controlling ratios of flex items along the main axis](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)

### Flex UI \#2 - 유연한 검색창
- 검색창의 경우 `<input>`의 type="search"로 작성하는 것이 좋음
  - type="text"와 외관은 비슷한데, 모바일 기기의 가상 키보드에서 검색 버튼 등이 활성화됨
    - cf. 유사하게 email을 입력하는 `<input>` 태그는 type="email"로 작성
- CSS의 attribute selector
  - class가 없으나 attribute가 있는 요소를 선택할 때 사용 가능
  - [MDN - Attribute selectors 참고](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- `<input>`의 font-size는 기본적으로 rem과 다름 - Chrome, Edge의 경우 13.3333px
  - cf. type="text"든 "search"든 "submit"이든 마찬가지
  - 기본적으로 fz: inherit이 아니라고 보면 됨
  - 다른 요소와 font-size를 맞추려면 font-size: 1rem; 과 같은 방식으로 맞춰야 함
  - 이 때 `<input>` fz를 키우면 height도 맞춰서 커짐
    - 스타일 줄 때 유의해야 함
- flex container의 align-items: stretch를 이용해 flex item의 heigth 조절하기
  - 직접 height, padding을 줄 수도 있지만
  - flex container의 align-items의 기본값이 stretch인 점을 이용하여
    - flex container의 height를 조절하는 것만으로 flex item의 height까지 조절할 수 있음

### Flex UI \#3 - 불릿 리스트
- cf. BEM(Block Element Modifier) - 클래스 이름을 짓는 CSS 방법론 중 하나
  - xxx__xxx--xxx와 같은 형식이 됨
  - 이 강의에서는 사용하지 않고 단순히 -로 연결함
- `<li>`의 bullet을 가상 요소 ::before로 넣기
  - reset css 등으로 초기화된 `<li>`의 bullet을 표현할 때 가상 요소 ::before를 사용할 수 있음
  - [MDN - Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- `<li>`의 텍스트에 들여쓰기 효과 주기
  - `<li>`를 flex container로 만들면
  - ::before로 넣은 가상 요소와 `<li>` 내부의 text가 각각 flex item이 되어 고유한 영역을 가짐
    - 이에 따라 들여쓰기 효과가 발생함
- cf. <https://copychar.cc> - 특수문자 복사해서 사용할 수 있는 사이트

### Flex UI \#4 - 메시지 리스트
- (목적) 이미지 쪽 덩어리와 메시지 쪽 덩어리를 구분하여 사진 쪽 덩어리의 너비 고정시키기
- `<img>`가 `<figure>`의 background로 이미지 넣기 → 간편하게 이미지의 위치 처리하기
  - (이유) 크기 비율이 각기 다른 이미지를 `<img>`로 직접 처리하면 위치 등을 조정하기 까다로운 경우가 많음
    - `<figure>`의 background로 이미지를 처리하면 상대적으로 간단해질 때가 있음
  - `<figure>`의 inline style로 background-image를 넣기
    - 이런 경우 이미지를 서버 등을 통해 동적으로 받아오는 경우가 많은데
      - 이 때 inline style로 background-image를 넣으면 편리
    - ex. `<figure style="background-image: url(...);">`
    - 다만 이 경우에도 이미지의 position, 크기 등 스타일은 inline이 아닌 css 파일 등으로 지정
- background-image를 넣은 `<figure>`을 flex item으로 만들었을 때 찌그러지는 현상 해결
  - `<figure>`가 flex-shrink: 0; 부여
- cf. rem을 사용할 때와 em을 사용할 때를 구분하여 의도를 갖고 사용할 것

### Flex UI \#5 - 유저 리스트
- 창이 줄어들었을 때 텍스트 말줄임 처리하기(위 메시지 리스트처럼 여러 줄로 넘어가는 방식을 허용하면 안 되는 경우)
  - 다음이 세트로 묶여 다님
    - overflow: hidden; → 이 부분이 없으면 좌우 스크롤이 생김
    - text-overflow: ellipsis; → 이 부분이 없으면 ... 처리가 안 됨
    - white-space: nowrap; → 이 부분이 없으면 <p>가 차지하는 영역의 height가 증가하는 것을 막을 수 없음

### Flex UI \#6 - 모달
- 뷰포트 크기에 상관 없이 한 가운데에 있는 모달 만들기
  - modal의 position은 fixed 또는 absolute, 여기서는 fixed를 사용함
  - 여기서는 fixed를 사용함
    - left: 0; right: 0; top: 0; bottom: 0;
  - modal의 display를 flex로 하고 jcc(justify-content: center;), aic(align-items: center;)

### Flex UI \#7 - 카드 리스트
- 여기서도 이미지를 삽입할 때 `<img>` 대신 `<figure>`의 background를 사용
  - 이미지의 너비, 비율 등 형태에 상관 없이 쉽게 컨트롤하기 위함
  - cf. 위 메시지 리스트에서의 작업과 마찬가지로 서버에서 불러오는 작업을 편리하게 하기 위해
    - 이미지의 url만은 inline css로 삽입
  - `<figure>`의 background-image에 처음으로 값을 주게 되면
    - 기본적으로 `<figure>`는 display: block;이고,
    - background-repeat의 기본값은 repeat이므로
      - cf. [MDN - background-reapeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat#formal_definition)
    - 뷰포트의 길이만큼 이미지가 반복
  - 가로 세로 비율을 유지해주는 반응형 박스를 만들기 위해 padding-bottom을 사용하여 박스 모델에 height 값을 부여
    - ex. height: 0; padding-bottom: 60%;
      - 이렇게 작성한 경우, 박스 모델의 content의 height는 0으로 주고,
      - 단지 박스를 감싼 요소의 width에 따라서 박스 모델의 padding을 포함한 height가 결정되도록 한 것
    - \(동작 설명\) padding: 100%는 안의 box-model의 content가 최대한 늘어날 수 있는 width을 의미
      - padding을 % 값으로 줄 경우, 세로 padding이든 가로 padding이든 상관 없이 width를 기준으로 계산됨
      - cf. [MDN - padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top#formal_definition)
        - "Formal definition → Percentages refer to the width of the containing block"
  - background-image의 크기 및 반복 설정
    - background-repeat: no-repeat; background-position: center; background-size: cover;
    - background-size: cover; 덕분에 원본 이미지의 너비, 비율에 상관 없이 박스를 보기 좋게 채움
- 뷰포트 너비에 따라 1단, 2단, 3단 카드 리스트가 되도록 반응형 작업
  - 1단 작업부터 시작하면 우선 flex는 고려하지 않아도 됨
  - 600px부터 2단으로 보이게 하기 → 여기부터 flex 필요
    - 1단 작업부터 시작했으므로 @media (min-width: ...) 사용
    - 우선 container인 .card-list에 display: flex; 부여
    - 2단이 되도록 하기 위해
      - container에 flex-wrap: wrap; 설정으로 공간이 모자라면 다음 행으로 떨어지도록 처리하고
      - item들의 width를 container width의 절반으로 설정 및 좌우 padding 설정 → width: 50% padding: 0 1rem;
        - cf. item들의 width를 container width의 절반 값보다 작게하고(ex. width: 46%)
          - justify-content: space-between;으로 한 행의 item끼리 살짝 떨어지도록 할 경우
          - 2단일 때는 괜찮아보이지만 3단일 때 가운데가 비는 문제가 생김
      - 마지막으로 container 전체의 좌우 margin이 item의 좌우 padding과 크기가 같은 음수값이 계산되도록 하여
        - 각 행이 container를 꽉 채운 모습이 되게 만듦
- 각 행 내의 card-item의 설명 부분의 높이는 같고, 서로 다른 행의 설명 부분의 높이는 다를 수 있게 만들기
  - 알아서 늘어나게? → flex-grow 사용
  - 각 .card-item 요소들의 박스 모델의 height는 각 행에서 가장 큰 박스의 height로 맞춰짐을 활용
    - .card-item 자체를 flex container로 사용
- 음수 margin을 사용했을 때 발생하는 가로 스크롤 해결
  - html container 역할 요소로 감싼 후 overflow-x: hidden; 부여

## Flex로 반응형 페이지 만들기
- 이미 만들어놓은 UI를 조합하여 반응형 페이지 만들기

### Flex 반응형 페이지 Step 1 - 레이아웃 고려 마크업
- 레이아웃 영역 구분하여 미리 생각하기 - 헤더, 메뉴, 왼쪽 오른쪽 사이드바, 메인 컨텐츠 영역, 푸터 등
- 만들어 놓은 요소들을 기반으로 마크업 진행

### Flex 반응형 페이지 Step 2 - 1단 스타일 작업
- 검색바의 input의 width를 조정할 때
  - input은 이미 flex item이고 flex container의 width에 따라 item의 width로 바뀔 수 있으므로
  - item인 input의 width를 직접 조정하기보다는 container인 form의 width를 조정하여 간접적으로 input의 width를 조정
- 보통 요소 간 세로 간격을 줄 때는 margin-bottom을 주는 게 더 보기 좋을 때가 많음

### Flex 반응형 페이지 Step 3 - CSS로 모달 열고 닫기 구현
- 모달 열고 닫기를 CSS로 구현
  - `<input>`의 id와 `<label>`의 for를 같게 맞추면
    - label을 클릭해도 input이 동작하는 것을 활용
  - 형제 결합자 ~ 이용(cf. +는 인접 형제 결합자로 바로 다음 형제 요소만 선택)
  - ex. #modal-switch:checked~.modal
  - 참고
    - [MDN - Subsequent-sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator)
    - [MDN - Next-sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Next-sibling_combinator)

## Grid 핵심 정리

## Grid로 반응형 페이지 만들기

## Grid에 품은 창의력

## 인터넷 익스플로러에서 Grid 사용하기
