# Figma 연습

- inflearn 강의 \[2024 업데이트\] UX/UI 시작하기 : Figma 입문 (Inflearn Original) 참고

## 섹션 1. 피그마 시작하기

- **강의소개**
  - 강의 목차 소개\(섹션 1부터 섹션 8까지\)
  - 강의 예제 실습 파일은 Figma community의 @inflearn 참고
    - 강의 슬라이드용 파일, 예제실습파일, 컴포넌트 라이브러리로 구성
- **툴 소개**
  - Figma
    - 디자인 툴에서 실시간 협업 툴로 진화 중
      - 코멘트, 음성 대화 등
    - 2024년 쯤 크게 업데이트
  - (주의사항) 네트워크 장애 주의 - 필요 시 파일로 저장하여 백업
- **피그마 - 가입부터 파일 생성까지**
  - email 계정으로 가입, 구글 소셜 계정 가능
    - 이름, 업무, 결제 plan 등 선택
  - 가입 후 나오는 튜토리얼 Figma basics 확인 후 따라가며 첫 파일 생성 가능
- **피그마와 피그잼의 차이**
  - 두 종류의 피그마 파일 - Design file, FigJam board + 현재(2024년 7월 기준)는 Slide deck까지 포함하여 세 종류
    - 홈 화면 우측 상단의 Create new 클릭하여 생성할 파일 종류 선택
  - Design file
    - UI 설계, 프로토타이핑 용도, 와이어프레임도 가능
    - 해상도를 선택하여 화면을 그리고, 개발자에게 가이드 전달
    - 주로 디자이너들이 사용, 개발자와 협업 시에도 사용
  - FigJam board
    - 아이디에이션, 브레인스토밍, 유저 플로우 그리기, 낙서, 대화, 스케치, 디자인 전 단계 간단한 그림, 중간 중간 협의가 필요한 경우 등 사용
    - 협업에 더 중점을 둔 파일, 다양한 사람들, 협업 구성원들을 이어주는 도구
      - 프로덕트를 만들 때 피그잼에서 프로덕트의 방향을 논의, 기능 정의 등 구성원간 의사결정 진행
    - 강의에서는 섹션 7 협업하기 부분에서 약간 살펴볼 것
- **팀 \> 프로젝트 \> 파일, 실제 팀에서 하는 일과 동일한 상하위 개념** → 작업 환경 간의 상하위 개념
  - 팀 안에서 프로젝트를 관리하고, 프로젝트 안에서 파일을 관리
  - 현재(2024년 7월 기준) Drafts도 팀 안에서 관리
    - 팀 내에서 프로젝트와 같은 계층이라고 보면 될 것
    - Drafts 안에서 디자인 파일과 피그잼 보드 등 파일들을 관리
  - 결제 플랜이 starter이면 하나의 팀에 하나의 프로젝트만 관리 가능
  - 팀 화면에서 프로젝트에 대해 할 수 있는 일들
    - 프로젝트 추가, 제거, 이름 변경, 다른 팀으로 이동, 링크 복사 등
    - 공유(share) → 팀원 초대하고 권한 설정하기 부분에서 설명
    - 즐겨찾기로 추가
      - 메인 메뉴 왼쪽 사이드바 Starred 부분에서 팀 내 즐겨찾기 추가된 프로젝트(폴더 모양 아이콘) 및 파일(파일 종류에 따른 아이콘) 확인 가능
        - cf. 다른 팀에 있는 즐겨찾기 프로젝트는 확인 불가능
  - 프로젝트 화면에서 파일에 대해 할 수 있는 일들
    - 파일 생성, 파일 열기, 새 브랜치 만들기, 링크 복사, 파일 복제, 이름 변경, 파일 이동, 파일 삭제 등
    - 공유(share) → 팀원 초대하고 권한 설정하기 부분에서 설명
    - 즐겨찾기로 추가 및 제거
      - 메인 메뉴 왼쪽 사이드바 Starred 부분에서 팀 내 즐겨찾기 추가된 프로젝트(폴더 모양 아이콘) 및 파일(파일 종류에 따른 아이콘) 확인 가능
        - cf. 다른 팀에 있는 즐겨찾기 프로젝트는 확인 불가능
  - cf. starter 결제 plan 팀은 프로젝트는 1개, 디자인 파일 3개, 피그잼 보드 3개까지 생성 가능
- **꼭 project 안에서 작업을 해야하는 걸까? draft 알아보기**
  - 강의 녹화 당시와 피그마 작업 환경이 변경되었음
  - 현재(2024년 7월 기준) Drafts도 팀 안에서 관리
- **팀원 초대하고 권한 설정하기**
  - 접근 범위 설정
    - 팀/프로젝트/파일 각각의 공간을 기준으로 구성원 초대 가능
    - 상위 작업 환경 구성원은 하위 작업 환경에 접근 가능
  - 접근 권한 네 가지(어떤 작업을 할 수 있는지)
    - (owner) 팀의 소유자
    - (admin) owner와 거의 같음, 하지만 admin이 owner의 권한을 수정할 순 없음
    - (editor) 팀과 프로젝트 안의 파일 편집할 수 있는 권한
      - cf. (starter plan 이용 시 주의) 팀의 과금 기준 인원은 editor를 기준으로 봄
    - (viewer) 편집 불가, 보는 것만 가능
  - 팀원 초대 방법
    - 각 메인 화면 우측 상단의 share 버튼 클릭
    - 초대 방식은 두 가지
      - (1) 링크 공유 → editor, viewer 권한만 가능
      - (2) email로 초대 → admin 권한도 가능
- **Figma desktop app 설치하기**
  - 피그마는 기본적으로는 브라우저 기반 툴(JS, Electron framework 사용)
  - 하지만 desktop app도 사용 가능
- **피그마에서 작업하면서 웹과 스마트폰으로 미러링하기**
  - (미러링) 설계한 화면이 실제 사이즈 디바이스에서 어떻게 출력되는지 확인하며 작업 가능
    - 작업한 화면을 거울에 비춰보듯이 피그마에서 작업하는 모습을 웹, 스마트폰에서 실시간 확인 가능
  - 방법 세 가지
    - (1) 브라우저 미러링 - https://figma.com/mirror
    - (2) 피그마 모바일 앱 미러링 - 하단 메뉴에서 Mirror 선택
    - (3) 피그마 앱 내에서 피그마 프리뷰 - 우측 상단 ▷ 버튼 옆 화살표 클릭 → Preview 클릭(혹은 단축키 shift + space bar)
- **피그마 작업을 도와주는 커뮤니티 활용하기**
  - 피그마 홈 화면 좌측 하단 Explore Community 클릭
  - 다른 사람들이 작성한 피그마 파일을 검색하여 찾아보고 Drafts로 불러와서 사용 가능
  - 플러그인, 위젯 등 받아서 사용 가능
- **피그마에 다른 파일을 불러오기(sketch, fig, image, vector path, svg code)**
  - 불러올 리소스를 파일로서 사용할지 오브젝트로서 사용할지, 그 종류에 따라 방법이 다름
  - 파일 불러오기(.fig, .sketch, .pdf, 이미지 파일)
    - (방법) Drafts 화면 혹은 팀 화면 우측 상단의 Create new 클릭 → Import 클릭
    - 불러오기 가능한 파일 종류 - .fig, .sketch, .pdf, 이미지 파일 등
      - cf. pdf 파일은 디자인 파일이 아닌 피그잼 보드 형식으로 불러와짐
    - cf. 설치된 폰트가 없는 경우 어떤 폰트로 대체할지 확인창 뜸
  - 오브젝트 불러오기(비트맵 이미지, 벡터 이미지, 동영상)
    - 방법
      - (복사 붙이기) 일러스트 등 다른 프로그램에서 작업하던 벡터 이미지, 비트맵 이미지를 ctrl+c, ctrl+v로 복사 붙이기 가능
      - (Place image/video) 피그마 파일 화면 Shape tools(기본 Rectangle) 클릭 → Place image/video 클릭(단축키 ctrl+shift+k) 후 파일 불러오기
    - 불러오기 가능한 파일 종류
      - 비트맵 이미지 - .png, .jpg, .gif, ...
      - 벡터 이미지 - .svg(주로 아이콘), .path(주로 포토샵, 일러스트 파일), ...
      - 동영상 - .mp4, .mov, .webm, ...

## 섹션 2. 인터페이스 살펴보기

- **Figma Web vs Figma desktop app의 화면 차이**
  - 홈으로 가기
    - (web) 피그마 로고 버튼 하위 메뉴
    - (app) 최상단에 별도 버튼
  - community 버튼
    - (web) 홈에서 브라우저 왼쪽 하단에만
    - (app) (이미 한 번 community를 연 경우) 최상단 홈 버튼 오른쪽에 community 버튼
  - 상단 탭 차이
    - (web) 웹 브라우저이므로 탭은 브라우저의 탭
    - (app) 피그마 파일들의 탭
  - 뒤로 가기 버튼의 역할
    - (web) 웹 브라우저이므로 웹 브라우저의 뒤로 가기 기능
    - (app) 피그마 내의 페이지 간 이동
  - 다른 레퍼런스, 기획, 노션 등을 함께 볼 때는 web에서, 피그마에만 집중할 때는 app을 활용하는 방식으로 이용하면 좋을 것

### 피그마 요소 하이어라키

- **피그마 요소의 하이어라키 : 파일 \> 페이지 \> 캔버스 \> 섹션 \> 프레임 \> 엘리먼트** → 피그마 디자인 요소의 상하위 개념
  - (cf.) 피그마 design file의 화면 기본 인터페이스
    - 왼쪽: 레이어 오른쪽: 속성, 상단: 툴바, 가운데: 캔버스
    - 캔버스에서 실제로 디자인 작업하는 요소들 간의 하이어라키를 보는 것
  - (파일) 하나의 파일에는 여러 페이지를 둘 수 있음
  - (페이지) 하나의 페이지 안에 하나의 캔버스가 생김
  - **_(캔버스) 디자인 작업을 하는 화면_**
  - (섹션) 프레임이 여러 개 있을 때, 같은 플로우를 갖는 것들 혹은 같은 성격인 것들을 묶은 것
    - 섹션을 다시 섹션으로 묶을 수 있음
  - **_(프레임) 디자인할 수 있는 영역_**
    - 캔버스에 직접 작업을 하는 게 아니라 프레임 안에 내용을 넣어서 작업을 한다 정도로 이해
      - 실제 화면을 만드는 부분은 프레임부터
    - 프레임 안에는 엘리먼트들과 다른 프레임들을 넣을 수 있음
  - (엘리먼트) 프레임 안에 들어가는 여러 요소들

### 피그마 작업 기본 순서

- **피그마에서 작업하는 기본 순서: 도구 선택 → 그리기 → 속성 설정**
  - 피그마 인터페이스 이해와 연관
- 기본 순서 상세 → 속성 설정 작업이 가장 까다로운 작업
  - 1\. 도구 선택(상단) - 상단 툴바 이용 (비유 - 펜으로 그릴 거냐, 연필로 그릴 거냐 선택)
  - 2\. 그리기(왼쪽) - 캔버스에서 작업, 캔버스에서 그린 요소들은 레이어에도 반영됨 (비유 - 그림을 그림)
  - 3\. 속성 설정(오른쪽) - 오른쪽 디자인 패널에서 속성 작업 (비유 - 그림 수정, 색칠 등등)

### 피그마 상단 인터페이스 - 도구 선택

#### 툴바 \> 상단 왼쪽 - Tools → 직접 도구를 선택하는 부분

- 상단 인터페이스인 툴바 중 왼쪽 부분인 Tools 부분
- 각 부분들
  - 피그마 로고 버튼: 피그마 전체 메뉴
    - (cf.) 메뉴 중 Quick actions(단축키 ctrl + /)를 이용해 도움말들을 확인할 수 있음
    - 피그마 로고 버튼 오른쪽으로 있는 버튼들은 모두 피그마 요소를 작업하기 위한 버튼들
  - move and scale tools
    - move - 단축키 v: 요소를 이동시킴
      - 요소의 크기 조절을 할 수도 있음
      - 하지만 move tool로 프레임의 크기 조절을 할 때, 해당 프레임의 하위 요소의 크기는 변경되지 않음
        - 크기 조절 대상 프레임 하위 요소까지 조절하려면 move tool이 아닌 scale tool을 사용해야 함
    - scale - 단축키 k: 프레임 하위의 요소까지 함께 scaling하기 위해 사용
  - frame and slice tools
    - frame - 단축키 f: 가장 많이 사용할 피그마의 작업 영역
    - section - 단축키 shift + s: 프레임 혹은 섹션 여러 개를 묶어주는 단위
    - slice - 단축키 s: 슬라이스를 사용한 곳만 잘라서 이미지로 배포 가능
  - shape tools → 섹션 2에서 사용해볼 것, 클릭해서 모양을 만듦
    - rectangle - 단축키 r
    - line - 단축키 l
    - arrow - 단축키 shift + l
    - ellipse - 단축키 o
    - polygon
    - star
    - place image/video - 단축키 ctrl + shift + k
  - creation tools → 그림을 그리는 것처럼 사용하므로 shape tools와는 구분됨
    - pen - 단축키 p
    - pencil - 단축키 shift + p
  - text tool → 섹션 2에서 사용해볼 것, text 자체에 고유한 옵션들이 있기에 shape tools, creation tools와는 구분됨
    - text - 단축키 t
  - resources modal - 단축키 shift + i → 섹션 3에서 사용해볼 것
    - 플러그인, 위젯을 사용할 때 이용
    - 디자인에서 반복되는 요소들을 컴포넌트로 만들어, 이들을 끌어다 쓸 때 이용
  - hand tool - 단축키 h
    - 화면을 이동할 때에 사용
  - comment tool - 단축키 c
    - 주석을 남길 수 있음
    - 협업 구성원끼리 커뮤니케이션 가능

#### 툴바 \> 상단 가운데 - Contextual Tool Bar

- 가운데 canvas 혹은 왼쪽 layers에서 선택한 요소에 따라 다른 tool들을 보여주는 툴바

##### 아무 요소도 선택하지 않은 상태

- 파일 위치, 제목을 보여줌
- 더블 클릭해서 파일 제목 변경 가능
- 오른쪽 ∨을 클릭하면 파일 관련 메뉴 확인 가능
  - Show version history: 파일 수정 이력들을 날짜, 시간대 별로 보여줌
    - 특정 수정 버전 마우스 우클릭 → Restore this version을 클릭하면 해당 버전으로 되돌아갈 수 있음
    - 특정 수정 버전 마우스 우클릭 → Duplicate를 클릭하면 해당 버전 복제 후 필요한 부분만 가져올 수 있음
    - 작업이 끝난 뒤에는 esc 혹은 왼쪽 상단 Done 버튼을 클릭하여 작업 환경으로 되돌아갈 수 있음
  - Publish library: 해당 파일을 라이브러리로 사용 → 섹션 3에서 살펴볼 것
  - Export: 팝업 창에서 파일 내의 프레임을 선택하여 특정 리소스 형태로 내보내기 가능 - 단축키 ctrl + shift + e
  - Create branch: git의 branch 같은 느낌 - 유료 버전만 가능
  - File color profile: 컬러 프로파일 설정
  - File color profile 아래의 메뉴들은 파일 및 프로젝트 관련 작업

##### 특정 요소를 선택한 경우

- (cf.) 어떤 요소를 선택했는지에 따라 보이는 툴들이 달라지지만 결국 볼 수 있는 것은 12개의 툴
  - (1) Use as mask - 단축키 ctrl + alt + m
  - (2) Boolean groups
  - (3) Edit object
  - (4) Wrap in new section - 단축키 ctrl + s
  - (5) Crop image
  - (6) Create link - 단축키 ctrl + k
  - (7) Select matching layers - 단축키 ctrl + alt + a
  - (8) Multi-edit text - 단축키 (여러 text 요소 선택한 상태에서) enter
  - (9) Mark as ready for dev
  - (10) Create component - 단축키 ctrl + alt + k
  - (11) Add variant
  - (12) Multi-edit variants - 단축키 (여러 variant 선택한 상태에서) q
  - (13) Reset all changes
- 일반적인 object 요소를 선택한 경우
  - Edit object: 세부 수정 모드
  - Create component: 해당 object를 component로 만듦
  - Use as mask: 마스크 처리
  - object 요소를 **여러 개 선택한 경우** 추가되는 툴(cf. Edit object 툴 버튼은 보이지 않게 됨)
    - Create component 오른쪽 ∨ 메뉴 버튼 하위로 도구 추가
      - Create multiple components
      - Create component set
    - Boolean groups 및 오른쪽 ∨ 메뉴 버튼 하위 도구 추가
      (object가 겹쳐있을 때 겹친 부분을 다양한 방법으로 계산하여 결합하는 툴들 → 섹션 2에서 살펴볼 것)
      - Union selection
      - Subtract selection
      - Intersect selection
      - Exclude selection
      - Flatten selection
  - **frame 안에 있는 object 요소**를 선택한 경우 추가되는 툴
    - Select matching layers: 전체 프레임에서 일치하는 layer를 선택
      - 동시에 선택된 layer들을 multi edit 가능  
        → position, alignment, 기타 properties를 한 번에 수정할 수 있음
      - 어떤 layer들이 선택될지 미리 확인하려면, 대상 object를 선택한 상태에서 shift 누름
      - 참고 자료
        - [기업 블로그(위디엑스) - 피그마 신기능 출시 : Multi-Edit 멀티 에디트 \(2024년 3월 7일 추가 기능\)](https://www.wedesignx.com/knowledge/figma-news-multi-edit)
        - [공식 홈페이지 - Select layers and objects 중 Select matching objects](https://help.figma.com/hc/en-us/articles/360040449873-Select-layers-and-objects#h_01HR880DTR7BD91C5SJPGE1KW7)
- 이미지 요소를 선택한 경우 → 일반 object 선택했을 때 보이는 툴들 + Crop image 툴 버튼
  - Edit object
  - Create component
  - Use as mask
  - Crop image: 이미지 크롭 처리
- text 요소를 선택한 경우 → 일반 object 선택했을 때 보이는 툴들 + Create link 툴 버튼
  - Edit object
  - Create component
  - Use as mask
  - Create link: 텍스트에 링크 걸기
  - text 요소를 **여러 개 선택한 경우** 추가되는 툴(cf. Edit object, Create link 툴 버튼은 보이지 않게 됨)
    - Multi-edit text + 일반적인 object 여러 개 선택한 경우 추가되는 툴들
- component를 선택한 경우
  - Add variant: variant에 추가
    - 모양이나 성격이 비슷한 컴포넌트가 있을 때, 요소들을 variation으로 묶음
  - Use as mask
  - Mark as ready for dev: dev 모드 준비된 요소로 표시
- frame 요소를 선택한 경우
  - Create component
  - Use as mask
  - Mark as ready for dev
  - frame 요소를 **여러 개 선택한 경우** 추가되는 툴(cf. Edit object 툴 버튼은 보이지 않게 됨)
    - Wrap in new section: 프레임이 같은 성격일 경우 섹션으로 묶기
    - Create component 오른쪽 ∨ 메뉴 버튼 - 여러 요소들을 어떤 방식으로 컴포넌트로 만들지 결정
      - Create multiple components
      - Create component set
    - Boolean groups
- section을 선택한 경우
  - Mark as ready for dev

#### 툴바 \> 상단 오른쪽 - Share and View Settings

- 주로 협업 관련 부분
- (1) 현재 파일에 들어온 사용자를 보여주는 부분
  - 다른 사용자 아바타 클릭 시 해당 사용자를 따라다닐 수 있음
- (2) 자신을 가리키는 부분 + "∨" 버튼
  - Spotlight me로 모든 사용자에게 따라다니기 요청 가능
  - 따라다니는 중 헤드셋 아이콘(Start conversation) 클릭하여 음성 채팅 가능
  - 특정 사용자에게만 따라다니기 요청도 가능
- (3) Share 버튼 - 파일 작업자 초대
- (4) Dev mode 토글 버튼
  - 활성화 시 개발자에게 전달하는 화면으로 변경
- (5) ▷ 버튼 + "∨" 버튼
  - Present: 프레젠테이션 화면
  - Preview: 미러링
- (6) xx% + "∨" 버튼: view 세팅 버튼
  - Zoom 관련 부분
    - Zoom in(단축키 ctrl + +)
    - Zoom out(단축키 ctrl + -)
    - Zoom to fit(단축키 shift + 1)
    - Zoom to 100%(단축키 ctrl + 0)
  - Pixel preview(단축키 ctrl + shift + p): 픽셀로 봤을 때는 어떻게 보일지 확인 활성화/비활성화
  - Pixel grid(단축키 shift + '(작은 따옴표)): 1px 단위 가이드 활성화/비활성화
  - Snap to pixel grid(단축키 ctrl + shift + '(작은 따옴표)): 픽셀에 달라붙도록 설정 활성화/비활성화
  - Layout grids(단축키 shift + g): 레이아웃을 돕는 그리드 보이기 활성화/비활성화
    - 만들어둔 그리드가 없으면 보이는 그리드가 없음
  - Rulers(단축키 shift + r): 룰러 보이기 활성화/비활성화
  - Outliner(단축키 ctrl + shift + o): 색, 속성 등이 보이지 않고 뼈대만 보는 모드 활성화/비활성화
    - 겹쳐있는 요소, margin과 간격 구분 등을 위해 사용
  - Multiplayer cursors(단축키 ctrl + alt + \): 다수 사용자가 있는 경우 다른 사용자 위치 보이기 활성화/비활성화
  - Comments(단축키 shift + c): 주석 보이기 활성화/비활성화

### 피그마 좌측 인터페이스 - 그리기

#### **왼쪽 패널 살펴보기 - Page**
- page: 파일의 하위 개념
  - 스케치북에 비유하면 스케치북이 파일, 그림을 그릴 종이의 빈 공간을 canvas, 인식할 수 있는 종이 자체를 page에 비유할 수 있을 것
- 페이지 오른쪽의 ∨ 버튼을 누르면 모든 페이지를 펼쳐서 볼 수 있음
  - + 버튼을 누르면 페이지 추가 가능, 각 페이지마다 캔버스를 가짐
- 페이지를 우클릭하면
  - Copy link to page: 페이지 링크 공유
  - Rename page: 페이지 이름 변경 - 페이지 이름을 더블 클릭해도 변경 가능
  - Duplicate page: 페이지 복제
  - Delete page: 페이지 삭제
    - 삭제 확인 경고창 없으므로 신중하게 클릭
    - undo(ctrl + z)를 이용해서 페이지 삭제 취소는 가능

#### **왼쪽 패널 살펴보기 - Layers Panel**
- (cf.) 단축키 alt + 1
- layers panel: canvas에 있는 여러 element(Section, Frame, 기타 element 모두 포함)들을 계층별로 보여주는 공간
  - 각 element의 ∨ 버튼을 누르면 하위 element 확인 가능
- layer panel에서 각 layer는 layer의 타입을 알려주는 metaphor(아이콘 같은 것)와 layer의 이름으로 표시됨
  - canvas에서 element의 속성을 바꾸면(ex. component로 바꾸기) layer panel에서 metaphor로 보여주는 타입도 변경됨
  - canvas에서 element를 생성하면 layer panel에서 표시되듯, layer panel에서 element를 생성(ex. 해당 layer의 하위로 다른 element 붙여넣기)해도 canvas에 표시됨
- 최상위 layer는 이름이 볼드체로 표시

#### **왼쪽 패널 살펴보기 - Assets Panel\(개념정리\)**
- (cf.) 단축키 alt + 2
- asset: 디자인을 하기 위한 리소스
  - 버튼, 컬러, 아이콘 등 다양한 것들이 리소스가 될 수 있음
  - 여러 피그마 디자인 파일을 서로 연결해서 사용할 수 있고
    - 현재 작업 중인 파일(로컬 파일)에 있는 리소스는 기본으로 보여주고
    - 다른 디자인 파일과 연결이 되어있다면 다른 디자인 파일의 리소스도 함께 보여줌
- Assets panel의 우측 상단 책 모양 아이콘(Libraries)을 클릭하면 로컬 컴포넌트 배포 가능 → 다른 디자인 파일에서 동기화하여 사용 가능

### 피그마 우측 인터페이스 - 속성 설정

#### **오른쪽 패널 \> 디자인 모드 살펴보기 - Design / Prototype Panel**
- (cf.) Design panel 단축키 alt + 8 / Prototype panel 단축키 alt + 9
- Design panel
  - 피그마 작업 순서(도구 선택\(상단\) → 그리기\(왼쪽\) → 속성 설정\(오른쪽\)) 중 마지막인 속성 설정 단계와 관련
    - 상단 tool bar에서 tool을 선택해 canvas에 그리고 layer 혹은 canvas에서 element를 선택해서 Design panel에서 속성을 설정하는 것
  - 마치 상단 contextual tool bar가 그렇듯이 어떤 element를 선택하느냐에 따라 설정할 수 있는 속성이 달라짐
  - 아무 element도 선택하지 않은 canvas 상태의 Design panel만 간단히 살펴보면
    - Page: canvas 자체의 color 설정
    - Local variables, Local styles (cf. canvas 상태일 때만 보이는 속성)
      - 디자인 파일에서 사용 가능한 variable과 style
    - Export: canvas 전체를 하나의 통 이미지로 내보내기
      - + 버튼을 누르면 내보내기를 위한 상세 설정 가능
- Prototype panel
  - Prototype: 디자인된 화면을 실제로 동작하는 것처럼 화면을 연결하는 것
  - 연결할 때 여러 interaction 설정 가능
    - 연결하려면 화면들이 모두 frame이어야 함

### 기타 인터페이스

#### **에디터와 뷰어 권한에 따른 인터페이스 차이**
- 뷰어 구성원에게는 인터페이스에 차이가 있음에 유의
  - 편집 불가
    - 상단 툴바에 이동, 코멘트 기능만 있음
    - Layers panel에서 페이지 추가 불가, 레이어 이름 변경 및 구조 변경 불가
    - Assets panel 자체를 볼 수 없음
  - 속성 설정 불가
    - Design panel, Prototype 패널 없음
  - 다만 디자인 화면 구성 파악, 디자인 의도대로 속성 적용은 가능해야하므로
    - 오른쪽 패널에 Comment, Properties, Export 패널이 별도로 구성됨
- (cf.) dev 모드로 전환하면, editor가 화면을 더 이상 수정하지 않겠다고 한 것이므로 viewer와 editor 화면의 차이가 없음

#### **Dev 모드 살펴보기 - Inspect / Plugins**
- dev 모드: 완성된 디자인인지, 어느 부분이 수정됐는지 알 수 있게 함(↔ design 모드)
  - 활성화 방법: 오른쪽 상단 </> 스위치 버튼 켜기 → 개발할 수 있는 디자인 리소스가 완성됐음을 알림
  - dev 모드 전용 링크 공유 가능
- 활성화할 경우
  - 왼쪽 패널이 Layers panel, Assets panel에서
    - 디자인된 요소를 찾을 수 있는 패널로 변경
  - 오른쪽 패널이 Design panel, Prototype panel에서
    - Inspect와 Plugins panel로 변경됨
- Inspect panel
  - 요소를 선택했을 때 그 요소가 어떻게 구성되어 있는지 코드로 보여줌
  - 언어별로 선택하여 복사해서 사용 가능
- Plugin panel
  - 현재 해당 디자인 파일에서 사용한 플러그인을 보여줌
  - 개발할 때 필요한 플러그인도 검색 가능
- 개발 툴과 연동도 가능


