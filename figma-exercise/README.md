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

## 섹션 3. 기본 기능 이해와 활용

### 단축키 쓰고 빠른 작업에 익숙해지기
-  (cf.) Figma 메뉴 이름 옆에 각각의 단축키 표시되어 있음
  - 강의 영상 하단에도 표출해둠
  - 대체로 Mac의 command, option은 각각 Ctrl, Alt에 대응됨
- Keyboard Shortcuts에서 여러 단축키를 확인할 수도 있음
  - Figma 메뉴 → Help and account → Keyboard shortcuts\(단축키 ctrl + shift + / 혹은 ctrl + ?\)

### 그리기: 프레임 다루기
- frame: 작업 영역을 의미 → Figma에서 UI로 인식되는 요소
  - 단축키 f
  - 드래그(혹은 클릭)으로 그리거나
  - frame 도구 선택 후 오른쪽 패널에서 디바이스별로 미리 설정된 사이즈를 선택하여 생성 가능
    - (cf.) 어떤 해상도로 작업할 지 팀에서 미리 기준 해상도를 논의하고, 이에 맞는 프레임을 선택해서 작업
      - 작은 해상도로 작업한 후 Auto layout, constraints 기능 등을 활용하여 화면을 키울 수도 있음
- element 위에 mouse over하면 canvas와 layers panel에서 파란색 테두리로 표시
  - 클릭해서 선택하면 드래그로 element 사이즈를 조절할 수 있는 bounding box가 표시
  - element의 이름을 더블 클릭하면 이름 변경 가능
- element 복제
  - (방법 1) alt + 드래그
    - 드래그 시 정렬을 도와주는 붉은색 보조 그리드 표시
  - (방법 2) ctrl + d → 이전 복제 작업이 없는 경우 기본 설정인 40px 간격으로 복제됨
    - 이전 복제 작업이 있는 경우 이전 작업에서 사용한 간격대로 맞춰서 복제
- 여러 element 선택
  - shift 누른 상태로 element 클릭
    - (cf.) element와 겹쳐져 있는 다른 element(ex. 하위 element)가 있는 경우 다른 element가 선택될 수 있으므로, element 이름을 클릭하는 것이 안전
- 여러 element 선택한 상태에서 표시되는 붉은 bar와 circle
  - element 사이에 있는 붉은 bar: mouse over하면 element 간 간격 확인 가능
    - 드래그해서 간격 조절 가능
    - 오른쪽 design panel에서도 조절 가능 \(\]|\[ 이렇게 생긴 부분\) - 숫자를 입력할 수도 있고, 드래그로 조절도 가능
      - (cf.) 숫자들은 모두 계산 가능해서 70 - 30과 같은 표현식을 입력할 수도 있음
  - element 안의 붉은 line circle: 드래그해서 element 간 간격을 유지한 채로 순서 변경 가능
- element를 frame의 하위 요소로 만들기
  - element를 frame 안 쪽 영억으로 드래그하면 frame에 파란 테두리 표시 → 이 때 드롭하면 드롭한 element가 해당 frame의 하위 요소가 됨
    - 물론 layers panel에서 드래그해서 하위 요소로 만들 수도 있음
    - (cf.) rectangle 같은 요소의 하위 요소로 다른 element를 넣을 수는 없음 - 하위 요소를 가질 수 있는 element는 section, frame, group 뿐

### 그리기: 툴바로 쉐입 그리고 캔버스에서 속성 바꿔보기 → shape tools

#### **rectangle, ellipse**
- rectangle, ellipse shape 그리기
  - 툴을 선택하거나 단축키를 누른 상태로 canvas를 클릭하면 기본적으로 100×100의 shape가 만들어짐
  - alt를 누른 상태로 드래그하면 드래그를 시작한 지점을 중심으로 두고 사이즈 조절 가능
    - alt를 누르지 않고 드래그 하면 드래그를 시작한 지점은 왼쪽 상단의 bounding box가 됨
  - shift를 누른 상태로 드래그하면 width와 height 길이가 같은 shape를 만들 수 있음
  - alt, shift를 동시에 누른 상태로 드래그하면 당연하게도 드래그 시작 지점을 중심으로 하는 width, height가 같은 shape를 만들게 됨
- rectangle → 단축키 r
  - canvas 위에서 rectangle shape r값(corner radius) 조절
    - 그려진 rectangle을 클릭해서 선택 후 bounding box 안 쪽에 mouse over하면 파란 line circle 표시
      - (cf.) 적당히 확대된 상태여야 파란 line circle이 표시 됨
    - 이 line circle을 움직여 rectangle의 r값 조절 가능
  - canvas 위에서 rectangle shape rotation 조절
    - 그려진 rectangle을 클릭해서 선택 후 bounding box 대각선 바깥 쪽에 mouse over하면 mouse pointer가 회전을 나타내는 표시로 바뀜
    - 이 상태에서 드래그하여 rectangle의 rotation 값 조절 가능
    - shift를 누르고 드래그 하면 15 degree 단위로 회전
- ellipse → 단축키 o
  - canvas 위에서 arc 형태 만들기
    - 그려진 ellipse를 클릭해서 선택하면 shape의 오른쪽에 파란 line circle 표시
      - (cf.) 적당히 확대된 상태여야 파란 line circle이 표시 됨
    - 이 line circle을 드래그해서 ellipse를 arc 형태로 만들 수 있음 → 원형 그래프, 도넛 그래프 등을 표시할 때 사용
      - 일단 arc 형태가 되면 line circle이 3개로 늘어남
      - arc의 각도(sweep)을 조절하는 line circle 하나
      - 도넛 모양처럼 만들 수 있는 ratio를 조절하는 line circle 하나
      - arc가 시작되는 지점(start)을 조절하는 line circle 하나

#### **line, arrow**
- line → 단축키 l
  - line 그리기
    - 툴을 선택하거나 단축키를 누른 상태로 canvas에서 드래그
      - 드래그 시작 지점이 start 위치, 드롭 지점이 end 위치가 됨
      - (cf.) line의 경우 클릭만으로는 shape을 만들어주지 않음
    - alt 누른 상태로 드래그하면 드래그 시작 지점이 line의 중간이 되고
    - shift 누른 상태로 드래그하면 line의 canvas 위에서의 각도(rotation)를 45 degree 단위로 조절 가능
    - 그려진 뒤 line의 bounding box를 드래그하여 width와 rotation 조절 가능
- arrow → 단축키 shift + l
  - line과 그리는 방법이 같음
    - (cf.) arrow는 툴 선택 후 클릭 시 기본적으로 100×0인 shape를 생성해줌
  - 다 그린 뒤에 end 기본적으로 end 위치에 화살표 모양이 생김
- (cf.) line에는 height를 갖고 있지 않고 height 값은 0으로 고정
  - arrow는 height를 갖고 있으나 기본적으로 0으로 시작되고, height 값이 있더라도 겉으로 큰 변화가 없음

#### **polygon**
- 단축키 없음
- polygon 그리기
  - 툴 선택 시 기본적으로 삼각형을 그림
    - 툴 선택 후 클릭 시 기본적으로 100×100 크기의 삼각형을 생성
    - alt 누른 상태로 드래그하면 드래그 시작 지점을 중심으로 한 삼각형을 그림
    - shift 누른 상태로 드래그하면 정삼각형을 그림
- polygon의 r값(corner radius)과 count
  - polygon을 선택하고 영역 안 쪽에 mouse over하면 shape 안 쪽에 두 개의 line circle이 표시
  - shape 안 쪽에 있는 line circle을 드래그하면 r값 조절 가능
  - shape 모서리에 있는 line circle을 드래그하면 count(꼭지점 개수) 조절 가능
    - 최소 3, 최대 60

#### **star**
- 단축키 없음
- star 그리기
  - 다른 shape와 유사함
  - 툴을 선택하고 클릭할 경우 기본적으로 100×100 크기의 r값 0, ratio 38.2%, count 5인 star shape를 생성
- star의 r값, count, ratio
  - star를 선택하고 영역 안 쪽에 mouser over하면 shape 안 쪽에 세 개의 line circle이 표시
  - shape 안 쪽에 r값을 line circle 하나
  - shape의 들어간 모서리에 있는 ratio를 조절하는 line circle 하나
    - 최소 0.1%, 최대 100%
  - shape의 나온 모서리에 있는 count를 조절하는 line circle 하나
    - 최소 3, 최대 60

#### **도구 선택, 그리기, 속성 설정의 공통 사항**
- shift를 누른 상태로 드래그하면 shape와 frame은 정다각형 요소로 그려짐
- alt를 누른 상태로 드래그하면 드래그 시작 지점이 element의 중심이 됨
- 세부 수정 모드
  - shape를 더블 클릭하거나, shape를 선택한 상태에서 enter 입력
    - (cf.) frame의 경우 frame을 선택한 상태로 enter을 입력하면 모든 하위요소를 선택함
  - 세부 수정 모드에서 빠져나오려면
    - esc 누르기
    - shift + enter 누르기
    - enter 누르기
    - shape 바깥 쪽을 더블 클릭
    - 상단 툴바의 Done 버튼 클릭
  - 변 중간에 point 만들기("디자인 패널에서 정렬, 좌표, 사이즈, R값 상세 설정 해보기" 강의 중 내용)
    - 모든 shape들은 세부 수정 모드에서 변 중간에 point를 찍을 수 있음
      - 해당 point에 대한 r값은 Design panel에서 조절 가능
  - 곡선 만들기 - ctrl(bend tool)과 alt를 활용("디자인 패널에서 정렬, 좌표, 사이즈, R값 상세 설정 해보기" 강의 중 내용)
    - point를 선택한 상태에서 Bend 툴(단축키 ctrl)을 선택하면 해당 point의 양 쪽을 곡선으로 만들 수 있음
    - 곡선 중간 point를 선택한 상태에서 alt를 누르고 곡률 point를 드래그하면 한 쪽의 곡률만 조절할 수 있음
- deep select: frame 안의 element 선택하기
  - Figma에서 mouse over했을 때 바로 선택할 수 있는 element는 최상위 frame의 바로 하위 element 뿐임
    - (cf.) 최상위 frame도 단순히 mouse over로 선택할 수 없음
      - 최상위 frame의 이름 쪽에 mouse over해야 파란 테두리가 활성화되는 것을 볼 수 있음
    - (cf.) 다른 frame에 감싸져있지 않고, 최상위 frame 바로 하위에 있는 shape의 경우 바로 선택할 수 있음
  - frame 안의 element 혹은 최상위 frame을 바로 선택하려면
    - **ctrl을 누른 상태로 element에 mouse over**하면 파란 테두리가 활성화되는 것을 볼 수 있고
    - 이 때 클릭하면 해당 element를 선택할 수 있음

### 속성 설정: Design panel에서 정렬, 좌표, 사이즈, R값 상세 설정 해보기
- layer의 property를 canvas가 아니라 design panel에서 설정하기

#### **Rectangle**\(다른 shape에서도 공통으로 사용할 수 있는 부분도 함께 설명\)
- (cf.) design panel의 모든 수치들은 속성 이름 위에서 위에서 드래그해서 변경할 수도 있음
- alignment 옵션
  - 하나의 element를 선택했을 때의 alignment
    - 해당 element(layer)를 감싸고 있는 부모 element를 기준으로 했을 때의 정렬을 의미
    - 처음 세 가지는 가로 정렬
      - align left(단축키 alt + a), align horizontal centers(단축키 alt + h), align right(alt + d)
    - 그 다음 세 가지는 세로 정렬
      - align top(단축키 alt + w), align vertical centers(단축키 alt + v), align bottom(alt + s)
    - (cf.) left, right, top, bottom 정렬은 a, d, w, s로 기억하면 됨
    - 마지막 버튼은 하나의 element만 선택했을 때는 비활성화
  - 둘 이상의 element를 선택했을 때의 alignment
    - 처음 여섯 가지 버튼이 부모 element에 대한 정렬이 아닌 선택된 elements들을 감싸고 있는 bounding box 테두리에 대한 정렬을 의미하게 됨
      - 하나의 element를 클릭했을 때처럼 부모 element에 대해 정렬하기 위해선
        - shift 혹은 alt를 누른 상태에서 각 정렬 버튼을 클릭
        - 이 때 여러 element를 감싸는 bounding box 전체와 부모 element 간의 정렬이 됨
    - 마지막 버튼은 선택된 elements의 간격에 대한 것
      - tidy up(단축키 ctrl + alt + shift + t)은 셋 이상의 elements가 선택됐을 때만 활성화
        - 적당히 알아서 정돈해줌
        - bounding box 오른쪽 하단에 있는 ||| 이렇게 생긴 아이콘으로 canvas 화면에서도 tidy up은 가능
      - distribute vertical spacing(단축키 alt + shift + v): 수직 간격을 동일하게 맞춤
      - distribute horizontal spacing(alt + shift + h): 수평 간격을 동일하게 맞춤
- X, Y: 해당 element를 감싸고 있는 부모 element 기준 좌표
- W, H: 해당 element의 너비, 높이
  - W, H 옆의 사슬 모양(Constrain proportions)이 활성화되어 있으면
    - design panel 위에서 드래그했을 때 W, H 비율이 유지됨
    - design panel의 수치를 입력했을 때도 W, H 비율이 유지됨
    - 단 canvas에서 드래그해서 W, H 사이즈를 조절할 때는 비율이 유지되지 않음
      - 이 때는 shift를 누르고 드래그해야 사이즈 비율을 유지시킴
      - (cf.) 사이즈 뿐만 아니라 radius 등 여러 속성을 함께 맞춰 조절하려면
        - Move(단축키 k) 툴이 아니라 Scale(단축키 k) 툴로 사이즈를 조절
- 각도 모양(Rotation): element의 회전
  - 음수값이 시계 방향 회전, 양수값이 반시계 방향 회전
- 둥근 모서리 모양(corner radius): element의 모서리 둥근 정도 r값
  - (cf.) corner radius property가 없는 shape도 있음
  - 둥근 모서리 모양 오른쪽의 둥근 모서리 네 개 모양 버튼(Independent corners)
    - rectangle의 경우 각 모서리 별로 radius를 다르게 줄 수 있음
    - corner smoothing: 조금 더 부드러운 테두리 설정
- Constraints → 추후 별도로 설명
- Layer: layer의 blend 모드에 대한 설정 / 투명도 설정 / 가시성 설정
  - layer blend 모드 → 여러 layer가 겹쳐 있을 때 겹친 부분의 색 표현에 대한 설정
- Fill: element 안의 색을 설정
  - 기본적으로 Hex를 사용
    - 색을 클릭했을 때 나오는 color palette에서는 Hex 뿐만 아니라
    - RGB, CSS, HSL, HSB 등 다양한 방식으로 색 설정 가능
  - color palette에서 색 설정 시 네 가지 옵션
    - Solid(단색), Gradient(그라디언트), Image(이미지), Video(영상)
  - 하나의 element에 여러 color를 추가할 수 있음, 이 때는 순서 상 가장 위에 있는 색을 먼저 보여줌
- Stroke: element의 테두리 색 설정
  - 색을 설정하는 방법은 fill과 유사
  - Inside, Center, Outside 옵션: shape 테두리의 어떤 부분에 색을 주는지 설정
  - 테두리 두께 설정 가능
  - rectangle의 경우 각 변마다의 테두리 설정 가능
  - 추가 옵션 … 버튼(Advanced stroke)
    - Stroke style: Solid, Dash, Custom
      - dash인 경우 점선 크기(Dash), 점선 간격(Gap), 점선 끝 모양(Dash cap), 꺾인 부분에서 모양 처리(Join) 등 가능
- Effect
  - Inner shadow: object 안 쪽으로 그림자 넣기
    - 왼쪽 해 모양 아이콘(Effect settings)에서 여러 값 조정 가능
      - 그림자 위치, blur 값, 두꺼운 정도, 그림자 색 등
  - Drop shadow(기본 설정): object 아래로 그림자 넣기
    - Effect settings에서 여러 값 조정 가능
      - 그림자 위치, blur 값, 두꺼운 정도, 그림자 색 등
  - Layer blur: layer 자체를 blur 처리
    - Effect settings에서 여러 값 조정 가능 blur 값 조정 가능
  - Background blur: 해당 object에 투명도가 있는 경우 background로 아래에 깔린 object를 blur 처리
    - Effect settings에서 여러 값 조정 가능 blur 값 조정 가능
- Export
  - 선택된 object를 여러 형태로 내보내기
  - 배수, 파일 확장자 설정, 미리보기 가능

#### **Ellipse**
- ellipse가 arc가 됐을 때 start, sweep, ratio 조절 가능

#### **Line, Arrow**
- Start point와 End point 모양 설정 가능
  - Start point는 드래그를 시작한 지점, End point는 드래그가 끝난 지점

#### **Polygon**
- count 조절 가능

#### **Start**
- count, ratio 조절 가능

#### **세부 수정 모드**
- 변 중간에 만들어진 point에 대해 r값 조정 가능

### 속성 설정: 오브젝트 복붙 vs. 속성 복붙
- object 자체를 복사
  - ctrl + c, ctrl + v(원본 object 위치에 그대로 복사)
  - alt + 드래그
  - ctrl + shift + v(선택된 element 위에 복사)
    - 선택된 layer와 같은 층위로 선택된 layer의 시작 X, Y 위치에 복사됨
    - 선택된 layer가 없는 경우 최상위 계층으로 page에 복사
  - (cf.) 레이어 복제 단축키 ctrl + d(위 그리기: 프레임 다루기 부분 참고)
- layer의 속성만 복사
  - 속성을 복사할 layer 위에서 우클릭 → Copy/Paste as → Copy properties, 속성을 붙여넣을 layer 위에서 우클릭 → Copy/Paste as → Paste properties
  - 속성을 복사할 layer 선택 후 ctrl + alt + c, 속성을 붙여넣을 layer 선택 후 ctrl + alt + v
    - (cf.) 이미 속성을 복사한 상태라면 속성을 붙여넣을 layer 선택 후 ctrl + v로도 속성 붙여넣기 가능
  - (cf.) 서로 다른 shape이더라도 속성 복붙 시 공통된 layer property들이 복사됨

### 그리기: 레이어 다루기
- layer panel의 그림과 layer 이름으로 각 레이어를 식별 가능
- 레이어 선택
  - 방법
    - panel에서 mouse over 하면 파란 테두리 표시(canvas에서 대응되는 layer에 파란 테두리 표시됨)
    - 클릭해서 선택하면 선택된 layer가 panel에서 하늘색 면 표시(canvas에서 대응되는 layer 선택, ruler 쪽에도 크기와 위치 표시)
      - (cf.) layer를 선택한 상태에서 tab을 누르면 layer panel에서 같은 층위에 있는 다음 layer가 선택됨
- 레이어 이름 바꾸기
  - 방법
    - panel에서 layer 더블 클릭
    - 우클릭 메뉴 Rename
    - 단축키 ctrl + r
- 레이어 숨기기
  - 방법
    - 우클릭 메뉴 Show/Hide
    - 단축키 ctrl + shift + h
  - 하위 element가 있는 경우 함께 숨김
- 레이어 삭제하기
  - 방법
    - delete 키
- 레이어 잠그기
  - 방법
    - layer panel의 특정 layer에 mouser over 하면 나타나는 자물쇠 표시 클릭
    - 우클릭 메뉴 Lock/Unlock
    - 단축키 ctrl + shift + l
  - 하위 element가 있는 경우 함께 잠금
  - layer panel에서 선택할 수 있지만, canvas에서는 선택 및 편집할 수 없는 상태가 됨
- 레이어 순서 변경
  - 방법
    - layer panel의 특정 layer를 선택한 뒤 변경할 위치로 드래그
    - 우클릭 메뉴 Bring to front로 맨 앞으로 보내기, Bring to back으로 맨 뒤로 보내기
    - 단축키
      - \] 맨 앞으로 보내기
      - \[ 맨 뒤로 보내기
      - ctrl + \] 순서 하나만 앞으로 보내기
      - ctrl + \[ 순서 하나만 뒤로 보내기
  - 마우스 drop 예정 위치에 따른 layer가 위치할 순서에 굵은 검은선 표시됨
- 레이어를 프레임 안으로 집어 넣기
  - 방법
    - layer panel의 특정 layer를 선택한 뒤 변경할 위치로 드래그
      - 기본적으로 레이어 순서 변경과 방법이 같음
  - 드롭할 위치에 따라 어떤 계층으로 옮겨질지 달라짐
    - 여러 계층이 있는 프레임 계층의 경우 마우스 드롭 위치가 왼쪽이 될 수록 상위 계층, 오른쪽이 될 수록 하위 계층에 속하게 됨
  - 마우스 drop 예정 위치에 따른 layer가 속할 frame에 파란 테두리 표시됨
- 레이어 복제
  - 방법
    - layer panel에서 alt 누른 채로 드래그
      - 복제 후 속할 계층까지 정할 수 있음
      - 복제된 layer의 canvas상 위치는 원본 layer의 위치와 같음
    - 단축키 ctrl + d
  - 복붙과 비교
    - ctrl + d를 이용한 복제의 경우 같은 층위의 앞 순서에 복제된 레이어가 위치
      - canvas상에서는 원본 layer와 완전히 같은 위치
    - alt 드래그를 이용한 복제의 경우 layer panel에서 층위, 순서를 조정할 수 있음
      - 하지만 여전히 canvas상에서는 원본 layer와 완전히 같은 위치
    - 복붙의 경우
      - 다른 frame 안에서 붙여넣기 하면
      - canvas 상에서의 위치가 달라짐
        - 원본 layer의 위치값(X, Y)까지 알아서 보존된다고 보면 될 것
        - 원본 layer의 위치값이 보존되므로 canvas 상에서의 위치는 달라질 것
- 그 외 layer panel에서 layer 우클릭 메뉴는 차차 알아볼 것


