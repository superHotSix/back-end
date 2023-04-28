# **superHotSix**

---

# **진행 기간 - 2023. 04. 17. ~ 2023. 04. 28.**

> ## **Introdution**

- `Elice Bootcamp: SW Engineer Track`에서 만들어진 프로젝트 그룹
- 6조만의 식지 않는 열기를 핫식스 음료에 비유해 짓게된 이름, `superHotSix`

> ## **진행 방식**

1. 4월 17일부터 28일까지, 약 2주간 진행되는 프로젝트
2. 각 팀원들은 매일 오전 11시, 오후 9시에 모여 프로젝트 진행상황을 공유한다.
3. 즉각적인 피드백 및 소통을 위해 디스코드 알림을 항시 허용한다.
4. 다같이 성장하는 기회로 삼고 최선을 다한다.

> ## **팀원 구성**

- [김종운](https://velog.io/@dev_cdd)
- [김대현](#)
- [박세원](#)
- [오종혁](#)
- [윤혜진](#)
- [이윤지](#)
- [최원희](#)

---

# **페이지 구성, 기능**

## **회원가입 페이지**

## **[로그인 페이지](https://signinssl.gmarket.co.kr/LogIn/LogIn?URL=http://myg.gmarket.co.kr/ContractList/ContractList)**

- 관리자
- 회원
- 비회원(주문조회)

## **관리자 페이지**

## **메인 페이지**

### **카테고리**

구현 안해도 되고, 해도 되는데 간단한 심리 검사를 통해서 상위 카테고리의 분위기를 정말 간단한 로직으로 구현해서 해당 카테고리를 추천하는 페이지가 있었으면 좋겠다

- WARM & COOL || Vintage & Modern || Calm & Excite
  - 스티커
  - 인형
  - 피규어
  - 키링
  - 패션
  - 편지지(메모지)
  - 마스킹 테이프

## **마이 페이지**

## **장바구니**

## **제품 상세 페이지**

- 제품 수량

## **주문 (개인정보 입력: 배송지 정보, 결제 카드 정보 등등) 상세 페이지**

---

## **Flow Chart**

- `Repository` 안에 있는 `flowChart.png`를 참고하세요 🙏
- `메인 페이지 -> 제품 상세 페이지 -> 로그인이 되어 있으면 바로 주문 상세 페이지로 -> ...`

## **개발 순서**

`메인 페이지 -> 제품 상세 페이지 -> 주문 상세 페이지`

## **스키마 - 유저(회원, 비회원), 제품**

### 회원

- id
- password
- 기본배송지
- 이전에 사용했던 배송지
- 이름
- 전화번호
- 프로필 이미지
- 등급

### 비회원

- 기본배송지
- 이전에 사용했던 배송지
- 이름
- 전화번호
- 프로필 이미지
- 주문 비밀번호

### 제품

- 제품 사진
- 제품명
- 제품 가격
- 후기, Q & A
- 카테고리

---

## **Commit Rule**

```bash
commit -m "FEAT: product detail page add"
```

- FEAT : 새로운 기능의 추가
- FIX: 버그 수정
- DOCS: 문서 수정
- STYLE: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
- REFACTOR: 코드 리펙토링
- TEST: 테스트 코트, 리펙토링 테스트 코드 추가
- CHORE: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)

## **변수 네이밍**

### 회원 단위

`userId, userPassword, userAddress`

### 비회원

`nonMemberName, nonMemberPhone`

### 제품 단위

`productName, productPrice`

---

## **Skills**

<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&labelColor=000000&logo=HTML5"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&labelColor=000000&logo=CSS3&logoColor=1572B6"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&labelColor=000000&logo=JavaScript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&labelColor=000000&logo=TypeScript&logoColor=3178C6"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&labelColor=000000&logo=node.js&logoColor=339933"/>
