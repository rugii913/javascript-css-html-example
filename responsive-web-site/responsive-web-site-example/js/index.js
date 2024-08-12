/* 헤더 아이콘 기능 - 공유하기 관련 스크립트 */
/*
각 사이트 별로 약간 다르지만 기본 원리는 비슷함
- https://www.facebook.com/sharer.php?u={페이지 링크}&t={페이지 제목}
- https://twitter.com/intent/tweet?text={페이지 제목}&url={페이지 링크}
- https://share.naver.com/web/shareView.nhn?url={페이지 링크}&title={페이지 제목}
- https://plus.google.com/share?url={페이지 링크}&t={페이지 제목}
*/
/* 
(cf.) 페이스북, 트위터 사이트 공유하기 디버깅 시 사용할 곳
- (페이스북) https://developers.facebook.com/tools/debug
- (트위터) https://cards-dev.twitter.com/validator
*/
/* 
(cf.) "url 띄어쓰기" 구글링 → url 인코딩
- (참고) Google Maps Platform > 문서 > URL 인코딩 - https://developers.google.com/maps/url-encoding?hl=ko
*/
document.querySelector(".facebook-share-element").addEventListener("click", function (e) {
  e.preventDefault();
  window.open(
    `https://www.facebook.com/sharer.php?u=http://localhost:5500/responsive-web-site/header-and-menu/index.html&t=responsive%20web%20site%20example`,
    "facebooksharedialog",
    "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width= 600",
  );
});
document.querySelector(".twitter-share-element").addEventListener("click", function (e) {
  e.preventDefault();
  window.open(
    `https://twitter.com/intent/tweet?text=responsive%20web%20site%20example&url=http://localhost:5500/responsive-web-site/header-and-menu/index.html`,
    "twittersharedialog",
    "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width= 600",
  );
});
