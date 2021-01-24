# B2GETHER


-	GitHub 주소 : https://github.com/sanghyupjung/b2gether
-	B2GETHER 는 프론트엔드를 React.js 로, 백엔드를 Django 로 구축하여 만들고 있는 저만의 블로그 웹사이트입니다.
-	사용자들이 게시물을 작성하여 작성된 게시물들을 볼 수 있고 달력에 사용자가 해야 할 일들을 작성하여 사용자의 투두리스트를 만들 수 있는 웹사이트입니다.
-	그리고 검색을 통하여 원하는 게시물을 찾아볼 수 있게 하고 검색창에는 게시물의 해시태그를 입력하여 검색할 수 있습니다.
-	JWT-Token 을 이용하여 로그인이 완료될 수 있게 하였습니다.
-	기본적으로 Bootstrap 을 통해 CSS 를 개발하고 있습니다.
-	지금도 B2GETHER 프로젝트를 진행하고 있고 2021년 1월 19일에 완성되어 배포될 것으로 예상하고 있습니다.
-	현재 게시물 작성 기능과 투두리스트 기능을 만들고 있습니다.


1. 메인 페이지(로그인 전)
![1](https://user-images.githubusercontent.com/54101618/104117894-22c56c80-5368-11eb-9866-2770a522ccfa.JPG)
-	로그인 하기 전 메인 페이지입니다.
-	http://localhost:3000/
-	현재 날짜와 시간을 실시간으로 확인할 수 있습니다.
-	Login 을 클릭하면 로그인 페이지로 넘어가고 Sign In 을 클릭하면 회원가입 페이지로 넘어갑니다.
-	메인 페이지에서 밑으로 스크롤을 내리면서 사용자들이 작성한 게시물들을 볼 수 있게 할 것입니다.
-	로그인 여부와 상관없이 사용자들의 게시물들을 볼 수 있지만 게시물을 작성하려면 로그인해야 합니다.


2. 로그인 페이지
![2](https://user-images.githubusercontent.com/54101618/104117934-64eeae00-5368-11eb-98d2-811ee9c22d90.JPG)
-	로그인 페이지입니다.
-	http://localhost:3000/login
-	로그인을 하려면 ID 와 PASSWORD 칸에 각각 알맞은 ID 와 비밀번호를 입력하고 Login 버튼을 클릭하면 됩니다.
-	Sign In 버튼을 클릭하면 회원가입 페이지로 넘어갑니다.
-	Find ID 버튼을 클릭하면 ID 찾기 페이지로 넘어갑니다.
-	Change Password 버튼을 클릭하면 비밀번호 변경 페이지로 넘어갑니다.
![12](https://user-images.githubusercontent.com/54101618/104118006-fa8a3d80-5368-11eb-8c64-f3f4899de449.JPG)
-	정보들을 입력하고 Login 버튼을 클릭하면 로그인이 완료되었다는 팝업창이 뜹니다.


3. 회원가입 페이지
![3](https://user-images.githubusercontent.com/54101618/104117957-96677980-5368-11eb-8fe5-1eae82c4e447.JPG)
-	회원가입 페이지입니다.
-	http://localhost:3000/signin
-	회원가입을 하려면 ID, PASSWORD, PHONE NUMBER, E-MAIL 칸에 각각 알맞은 ID, 비밀번호, 전화번호, 이메일을 입력하고 Create Account 버튼을 클릭하면 됩니다.
![4](https://user-images.githubusercontent.com/54101618/104117963-a5e6c280-5368-11eb-8bf9-efa804e95b7c.JPG)
-	정보들을 입력하고 Create Account 버튼을 클릭하면 회원가입이 완료되었다는 팝업창이 뜹니다.


4. ID 찾기 페이지
![5](https://user-images.githubusercontent.com/54101618/104117968-b1d28480-5368-11eb-8496-b73335ebc1b3.JPG)
-	ID 찾기 페이지입니다.
-	http://localhost:3000/findId
-	해당 계정의 ID 를 찾으려면 PHONE NUMBER 와 E-MAIL 칸에 각각 알맞은 전화번호와 이메일을 입력하고 Check 버튼을 클릭하면 됩니다.
![6](https://user-images.githubusercontent.com/54101618/104117971-bac35600-5368-11eb-86ae-e71e7252a254.JPG)
-	정보들을 입력하고 Check 버튼을 클릭하면 해당 계정의 ID 를 알려주는 팝업창이 뜹니다.


5. 비밀번호 변경 페이지
![7](https://user-images.githubusercontent.com/54101618/104117979-c747ae80-5368-11eb-9616-f69c9000c384.JPG)
-	비밀번호 변경 페이지입니다.
-	http://localhost:3000/changePassword
-	해당 계정의 비밀번호를 찾으려면 ID, PHONE NUMBER, E-MAIL 칸에 각각 알맞은 ID, 전화번호, 이메일을 입력하고 Check 버튼을 클릭하면 됩니다.
![8](https://user-images.githubusercontent.com/54101618/104117985-d2024380-5368-11eb-88cf-6267fd2d4ada.JPG)
-	정보들을 입력하고 Check 버튼을 클릭하면 인증코드를 입력하는 팝업창이 뜹니다.
-	인증코드는 해당 계정의 이메일로 발송되고 이메일에서 인증코드를 확인하면 됩니다.
-	팝업창에 알맞은 인증코드를 입력하면 비밀번호를 변경하는 페이지로 넘어갑니다.
![9](https://user-images.githubusercontent.com/54101618/104117990-ddee0580-5368-11eb-9dec-416be2935c5b.JPG)
-	http://localhost:3000/resetPassword
-	PASSWORD 칸에 알맞은 비밀번호를 입력하고 Check 버튼을 클릭하면 비밀번호가 변경됩니다.
![10](https://user-images.githubusercontent.com/54101618/104117993-e5151380-5368-11eb-9548-fe295661febc.JPG)
-	비밀번호를 입력하고 Check 버튼을 클릭하면 해당 계정의 비밀번호가 변경되었다는 팝업창이 뜹니다.
![11](https://user-images.githubusercontent.com/54101618/104117998-ee9e7b80-5368-11eb-823e-bf9a5a83e94f.JPG)
-	인증코드를 입력하여 인증되지 않고 http://localhost:3000/resetPassword 로 바로 접근하면 메인 페이지로 돌아가야 한다는 에러 팝업창이 뜹니다.


6. 메인 페이지(로그인 후)
![13](https://user-images.githubusercontent.com/54101618/104118035-391ff800-5369-11eb-857a-09e7e6f0f31f.JPG)
-	로그인 한 후 메인 페이지입니다.
-	http://localhost:3000/
-	Logout 을 클릭하면 해당 계정이 로그아웃 됩니다.
-	My Stories 를 클릭하면 게시물 페이지로 넘어가고 My Calendar 를 클릭하면 달력 페이지로 넘어갑니다.


7. 게시물 페이지
![14](https://user-images.githubusercontent.com/54101618/104118039-43da8d00-5369-11eb-95e3-2eb486a49b61.JPG)
-	게시물 페이지입니다.
-	http://localhost:3000/(해당_계정_ID)/mystories
-	My Calendar 를 클릭하면 달력 페이지로 넘어갑니다.
-	Write your story 버튼을 클릭하면 게시물 작성 페이지로 넘어갑니다.
-	게시물을 작성할 때 마다 이 페이지에서 해당 계정의 게시물들이 올려질 수 있게 할 것입니다.


8. 게시물 작성 페이지
![15](https://user-images.githubusercontent.com/54101618/104118041-4b019b00-5369-11eb-82df-263eba60da82.JPG)
-	게시물 작성 페이지입니다.
-	http://localhost:3000/(해당_계정_ID)/writeStory
-	My Calendar 를 클릭하면 달력 페이지로 넘어갑니다.
-	Story 부분에 제목과 내용을 입력할 수 있게 할 것입니다.
-	Hash Tag 부분에 알맞은 해시태그들을 추가할 수 있게 할 것입니다.
-	Create your story 버튼을 클릭하면 게시물 작성이 완료되게 할 것입니다.


9. 달력 페이지
![16](https://user-images.githubusercontent.com/54101618/104118046-5654c680-5369-11eb-94b7-fa5e4b38026f.JPG)
![17](https://user-images.githubusercontent.com/54101618/104118049-5ce33e00-5369-11eb-92f5-0439959521db.JPG)
-	달력 페이지입니다.
-	http://localhost:3000/(해당_계정_ID)/mycalendar
-	My Stories 를 클릭하면 게시물 페이지로 넘어갑니다.
-	달력에 투두리스트를 작성할 수 있게 할 것입니다.


10. 투두리스트 작성 페이지
![18](https://user-images.githubusercontent.com/54101618/104118643-ed238200-536d-11eb-929e-69928c44cc76.JPG)
- 투두리스트 작성 페이지입니다.
- http://localhost:3000/makeTodolist/(해당_날짜)
-	My Stories 를 클릭하면 게시물 페이지로 넘어갑니다.
-	Todolist 부분에 알맞은 투두리스트들을 추가할 수 있습니다.
![19](https://user-images.githubusercontent.com/54101618/104118748-89e61f80-536e-11eb-9fcb-4f46a1e60442.JPG)
-	Upload Your Job 버튼을 클릭하면 게시물 작성이 완료되게 할 것입니다.


