## layout1
- layout을 잡을 때는 항상 width, height 값을 줘서 영역부터 확인
- block 간의 구조를 정렬할 때는 float: left를 사용
  - 그런데 float: left를 사용하면 마치 height가 0인 듯이 다음 block과 겹치는 현상이 발생함
    - 이를 해결하려면 clear: both를 사용
- block 자체를 화면에서 가운데 정렬하려면 margin: 0 auto
- HTML5부터 등장한 symantic tag
  - class 이름에 symantic을 넣지 않고, tag 자체에 symantic을 부여함
  - tag의 이름 자체에 의미가 있는 div를 만든 것
