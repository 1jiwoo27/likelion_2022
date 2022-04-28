//1. 변수 이름은 카멜케이스 방법으로 작성한다.
let userName = "sucoding"; //(o)
let user_name = "sucoding"; //(x)

//2. 변수 이름은 _, $, 문자로만 시작한다.
let 12day = "월요일"; //(x) 숫자로 시작
let @day12 = "월요일"; //(x) _,$ 이외의 특수문자로 시작

let day12 = "월요일"; //(o) 문자로 시작
let _day12 = "월요일"; //(o) _로 시작
let $day12 = "월요일"; //(o) $로 시작

//3. 상수나 축약어는 대문자와 스네이크케이스 방식으로 작성한다.
const HTML = "Hyper Text Markup Language";
const MAX_LEVEL = "99";

//4. 예약어는 사용할 수 없다. ex) var, let, const, typeof 등등..
const var = 10; //(x) var는 변수 선언 키워드로 변수 이름으로 지을 수 없다.