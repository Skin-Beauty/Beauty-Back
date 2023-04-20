const acneSkinCare = [
  { id: 1, name: "다이브인 저분자 히알루론산 토너", company: "토리든" },
  { id: 2, name: "아쿠아 오아시스 토너", company: "에스네이처" },
  { id: 3, name: "다이브인 저분자 히알루론산 수딩 크림", company: "토리든" },
  { id: 4, name: "다이브인 저분자 히알루론산 세럼", company: "토리든" },
  { id: 5, name: "아토베리어 365 크림", company: "에스트라" },
  { id: 6, name: "1025 독도 토너", company: "라운드랩" },
  { id: 7, name: "다이브인 저분자 히알루론산 크림", company: "리얼베리어" },
  {
    id: 8,
    name: "아쿠아 콜라겐 펩타이드 트리플 젤 에센스",
    company: "에스네이처",
  },
];

const acneMask = [
  { id: 1, name: "캐롯 카로틴 카밍 워터 패드", company: "스킨푸드" },
  { id: 2, name: "다이브인 저분자 히알루론산 마스크팩", company: "토리든" },
  { id: 3, name: "파워10 감초줄렌 젤리패드", company: "잇츠스킨" },
  { id: 4, name: "마스크팩", company: "다자연" },
  { id: 5, name: "모이스처 밸런싱 마스크", company: "백아율" },
];

const drySkinCare = [
  { id: 1, name: "아토베리어 365 크림", company: "에스트라" },
  { id: 2, name: "화이트 트러플 퍼스트 스프레이 세럼", company: "달바" },
  { id: 3, name: "1025 독도 토너", company: "라운드랩" },
  { id: 4, name: "세라마이드 아토 로션", company: "일리윤" },
  { id: 5, name: "아쿠아 스쿠알란 수분크림", company: "에스네이처" },
  { id: 6, name: "레드 블레미쉬 클리어 수딩 크림", company: "닥터지" },
  { id: 7, name: "익스트림 크림", company: "리얼베리어" },
  { id: 8, name: "화이트 트러플 더블 세럼 앤 크림", company: "달바" },
];

const dryMask = [
  { id: 1, name: "다이브인 저분자 히알루론산 마스크팩", company: "토리든" },
  { id: 2, name: "캐롯 카로틴 카밍 워터 패드", company: "스킨푸드" },
  { id: 3, name: "파워10 감초줄렌 젤리패드", company: "잇츠스킨" },
  { id: 4, name: "모델링마스크 컵팩", company: "린제이" },
  { id: 5, name: "마스크팩", company: "다자연" },
];

const oilySkinCare = [
  { id: 1, name: "1025 독도 토너", company: "라운드랩" },
  { id: 2, name: "레드 블레미쉬 클리어 수딩 크림", company: "닥터지" },
  { id: 3, name: "다이브인 저분자 히알루론산 세럼", company: "토리든" },
  { id: 4, name: "다이브인 저분자 히알루론산 토너", company: "토리든" },
  { id: 5, name: "다이브인 저분자 히알루론산 수딩크림", company: "토리든" },
  { id: 6, name: "다이브인 저분자 히알루론산 크림", company: "토리든" },
  { id: 7, name: "아쿠아 스쿠알란 수분크림", company: "에스네이처" },
  { id: 8, name: "아쿠아 오아시스 토너", company: "에스네이처" },
];

const oilyMask = [
  { id: 1, name: "다이브인 저분자 히알루론산 마스크팩", company: "토리든" },
  { id: 2, name: "캐롯 카로틴 카밍 워터 패드", company: "스킨푸드" },
  { id: 3, name: "파워10 감초줄렌 젤리패드", company: "잇츠스킨" },
  { id: 4, name: "티트리 트러블 패드", company: "메디힐" },
  { id: 5, name: "마스크팩", company: "다자연" },
];

const popularCosmetic = [
  { id: 1, name: "다이브인 저분자 히알루론산 마스크팩", company: "토리든" },
  { id: 2, name: "세라마이드 아토 로션", company: "일리윤" },
  { id: 3, name: "다이브인 저분자 히알루론산 토너", company: "토리든" },
  { id: 4, name: "센시비오 H2O", company: "바이오더마" },
  { id: 5, name: "아토베리어 365 크림", company: "에스트라" },
  { id: 6, name: "녹두 밸런싱 토너", company: "비플레인" },
];

const category = document.querySelector("#category_wrapper");

const template = `
<div class="wrapper">
    <div class="image"></div>
    <div class="info">
        <div class="company"></div>
        <div class="name"></div>
    </div>
</div>
`;

category.addEventListener("click", (e) => {
  if (e.target.closest("figure") === null) return;
  allEvent(e.target.closest("figure"));
});

const allEvent = (target) => {
  if (!target.classList.contains("all")) return;
};
