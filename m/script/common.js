
// 상단 헤더 토글버튼 기능

// 1. 변수 선언
  const toggleBtn = document.querySelector('.toggle'); // 토글 버튼 변수
  const spans = document.querySelectorAll('.toggle span'); // 토글 라인
  const gnb = document.querySelector('.gnb'); 
  let mnu = document.querySelectorAll('.gnb > ul > li > a'); //메인 메뉴
// 2. 클릭이벤트
  toggleBtn.addEventListener('click', function() {
    // 토글버튼 자체에 클래스를 토글
    this.classList.toggle('active');

    if (this.classList.contains('active')) { //만약 act클래스가 존재하지 않는다면 
      // act클래스를 적용하고
      spans[0].classList.add('act_rotate01');
      spans[1].classList.add('act_none');
      spans[2].classList.add('act_rotate02');
      gnb.style.opacity='1';
      

    } else { // 그렇지 않다면
      // act클래스를 뺸다.
      spans[0].classList.remove('act_rotate01');
      spans[1].classList.remove('act_none');
      spans[2].classList.remove('act_rotate02');
      gnb.style.opacity='0';
    }
  });

// 3. 메인메뉴 클릭시 해당 서브메뉴만 나오게 하기

mnu.forEach(function(item) {
  item.addEventListener('click', (event) => {

    const sub = item.nextElementSibling;

    if (sub && sub.classList.contains('sub')) {
      event.preventDefault();

      // 다른 서브메뉴 모두 닫기
      mnu.forEach(function(otherItem) {
        if (otherItem !== item) {
          const otherSub = otherItem.nextElementSibling;

          if (otherSub && otherSub.classList.contains('sub')) {
            otherSub.classList.remove('act');
          }

          const otherIcon = otherItem.querySelector('.fa-angle-down');

          if (otherIcon) {
            otherIcon.classList.remove('rotate');
          }
        }
      });

      // 현재 서브메뉴 열고 닫기
      sub.classList.toggle('act');

      // 현재 아이콘 회전
      const icon = item.querySelector('.fa-angle-down');

      if (icon) {
        icon.classList.toggle('rotate');
      }
    }
  });
});

