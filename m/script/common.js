
// 상단 헤더 토글버튼 기능

// 1. 변수 선언
  const toggleBtn = document.querySelector('.toggle'); // 토글 버튼 변수
  const spans = document.querySelectorAll('.toggle span'); // 토글 라인
  const gnb = document.querySelector('.gnb');
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
      gnb.style.transform='translateY(0px)';
      

    } else { // 그렇지 않다면
      // act클래스를 뺸다.
      spans[0].classList.remove('act_rotate01');
      spans[1].classList.remove('act_none');
      spans[2].classList.remove('act_rotate02');
      gnb.style.opacity='0';
      gnb.style.transform='translateY(-20px)';
    }
  });

  // 메인메뉴 나오고 / 숨기기
  // 토글 버튼 클릭시 조건문을 작성하여 0, 1값을 판단하여 0일경우 메인메뉴 나오구, 1일 경우 메인메뉴가 숨겨지도록 합니다

  // 메인메뉴 나올때 도클버튼 모양이 'x'

  // 메인메뉴 숨겨질때 토글 버튼 모양이 다시 원래대로 변경됩니다.
