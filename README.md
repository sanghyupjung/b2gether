# B2GETHER


-	GitHub 주소 : https://github.com/sanghyupjung/b2gether
-	B2GETHER 는 프론트엔드를 React.js 로, 백엔드를 Django 로 구축하여 만들고 있는 저만의 블로그 웹 사이트입니다.
-	사용자들이 게시물을 작성하여 작성된 게시물들을 볼 수 있고 달력에 사용자가 해야 할 일들을 작성하여 사용자의 투두리스트를 만들 수 있는 웹 사이트입니다.
-	그리고 검색을 통하여 원하는 게시물을 찾아볼 수 있게 하고 검색창에는 게시물의 해시태그를 입력하여 검색할 수 있는 기능을 추가할 것입니다.
-	JWT-Token 을 이용하여 로그인이 완료될 수 있게 하였습니다.
-	기본적으로 Bootstrap 을 통해 CSS 를 개발하고 있습니다.
-	2021년 1월 24일에 B2GETHER 사이트 배포를 완료했습니다.
- 현재 B2GETHER 사이트 IP 주소 : http://3.36.24.56/
- 배포를 완료하였지만 현재 B2GETHER 사이트의 프론트엔드와 백엔드 간의 API 연결에 문제가 있어 추후에 해결할 것입니다.
- 로컬 컴퓨터에서 실행된 웹 페이지로 B2GETHER 웹 사이트를 설명하겠습니다.


1. 메인 페이지(로그인 전)
![1](https://user-images.githubusercontent.com/54101618/105704309-f60d7980-5f51-11eb-87f4-30c0ab1d038a.JPG)
-	로그인 하기 전 메인 페이지입니다.
-	http://localhost:3000/
-	현재 날짜와 시간을 실시간으로 확인할 수 있습니다.
-	Login 을 클릭하면 로그인 페이지로 넘어가고 Sign In 을 클릭하면 회원가입 페이지로 넘어갑니다.
-	메인 페이지에서 밑으로 스크롤을 내리면서 사용자들이 작성한 게시물들을 볼 수 있습니다.
-	로그인 여부와 상관없이 사용자들의 게시물들을 볼 수 있지만 게시물을 작성하려면 로그인해야 합니다.


2. 로그인 페이지
![2](https://user-images.githubusercontent.com/54101618/105704331-002f7800-5f52-11eb-9cbd-d32fcc87c2c3.JPG)
-	로그인 페이지입니다.
-	http://localhost:3000/login
-	로그인을 하려면 ID 와 PASSWORD 칸에 각각 알맞은 ID 와 비밀번호를 입력하고 Login 버튼을 클릭하면 됩니다.
-	Sign In 버튼을 클릭하면 회원가입 페이지로 넘어갑니다.
-	Find ID 버튼을 클릭하면 ID 찾기 페이지로 넘어갑니다.
-	Change Password 버튼을 클릭하면 비밀번호 변경 페이지로 넘어갑니다.
![3](https://user-images.githubusercontent.com/54101618/105704350-0887b300-5f52-11eb-9327-93d0ed3dc722.JPG)
-	정보들을 입력하고 Login 버튼을 클릭하면 로그인이 완료되었다는 팝업창이 뜹니다.


3. 회원가입 페이지
![4](https://user-images.githubusercontent.com/54101618/105704380-12a9b180-5f52-11eb-96d5-ee5a9d202b13.JPG)
-	회원가입 페이지입니다.
-	http://localhost:3000/signin
-	회원가입을 하려면 ID, PASSWORD, PHONE NUMBER, E-MAIL 칸에 각각 알맞은 ID, 비밀번호, 전화번호, 이메일을 입력하고 Create Account 버튼을 클릭하면 됩니다.
![5](https://user-images.githubusercontent.com/54101618/105704421-1f2e0a00-5f52-11eb-8f16-699f6627812b.JPG)
-	정보들을 입력하고 Create Account 버튼을 클릭하면 회원가입이 완료되었다는 팝업창이 뜹니다.


4. ID 찾기 페이지
![6](https://user-images.githubusercontent.com/54101618/105704453-2b19cc00-5f52-11eb-83bd-fd68d0c91839.JPG)
-	ID 찾기 페이지입니다.
-	http://localhost:3000/findId
-	해당 계정의 ID 를 찾으려면 PHONE NUMBER 와 E-MAIL 칸에 각각 알맞은 전화번호와 이메일을 입력하고 Check 버튼을 클릭하면 됩니다.
![7](https://user-images.githubusercontent.com/54101618/105704470-31a84380-5f52-11eb-8bf7-5a8ff8351552.JPG)
-	정보들을 입력하고 Check 버튼을 클릭하면 해당 계정의 ID 를 알려주는 팝업창이 뜹니다.


5. 비밀번호 변경 페이지
![8](https://user-images.githubusercontent.com/54101618/105704481-379e2480-5f52-11eb-99ea-aad5f51c9a81.JPG)
-	비밀번호 변경 페이지입니다.
-	http://localhost:3000/changePassword
-	해당 계정의 비밀번호를 찾으려면 ID, PHONE NUMBER, E-MAIL 칸에 각각 알맞은 ID, 전화번호, 이메일을 입력하고 Check 버튼을 클릭하면 됩니다.
![9](https://user-images.githubusercontent.com/54101618/105704497-3ec53280-5f52-11eb-862c-890bdab6a838.JPG)
-	정보들을 입력하고 Check 버튼을 클릭하면 인증코드를 입력하는 팝업창이 뜹니다.
-	인증코드는 해당 계정의 이메일로 발송되고 이메일에서 인증코드를 확인하면 됩니다.
-	팝업창에 알맞은 인증코드를 입력하면 비밀번호를 변경하는 페이지로 넘어갑니다.
![10](https://user-images.githubusercontent.com/54101618/105704517-4684d700-5f52-11eb-9b1e-7941d21ded4d.JPG)
-	http://localhost:3000/resetPassword
-	PASSWORD 칸에 알맞은 비밀번호를 입력하고 Check 버튼을 클릭하면 비밀번호가 변경됩니다.
![11](https://user-images.githubusercontent.com/54101618/105704547-51d80280-5f52-11eb-9012-a31f20bb4cde.JPG)
-	비밀번호를 입력하고 Check 버튼을 클릭하면 해당 계정의 비밀번호가 변경되었다는 팝업창이 뜹니다.
![12](https://user-images.githubusercontent.com/54101618/105704569-5ac8d400-5f52-11eb-922f-585bf1f6d567.JPG)
-	인증코드를 입력하여 인증되지 않고 http://localhost:3000/resetPassword 로 바로 접근하면 메인 페이지로 돌아가야 한다는 에러 팝업창이 뜹니다.


6. 메인 페이지(로그인 후)
![13](https://user-images.githubusercontent.com/54101618/105704591-62887880-5f52-11eb-82fd-15e0c4f95278.JPG)
-	로그인 한 후 메인 페이지입니다.
-	http://localhost:3000/
-	Logout 을 클릭하면 해당 계정이 로그아웃 됩니다.
-	My Stories 를 클릭하면 게시물 페이지로 넘어가고 My Calendar 를 클릭하면 달력 페이지로 넘어갑니다.


7. 게시물 페이지
![14](https://user-images.githubusercontent.com/54101618/105784459-330e5600-5fbc-11eb-8a66-0cd26c6baeb1.JPG)
-	게시물 페이지입니다.
-	http://localhost:3000/(해당_계정_ID)/mystories
-	My Stories 를 클릭하면 게시물 페이지로 넘어가고 My Calendar 를 클릭하면 달력 페이지로 넘어갑니다.
-	Write your story 버튼을 클릭하면 게시물 작성 페이지로 넘어갑니다.
-	게시물을 작성하면 메인 페이지에서 해당 계정의 게시물이 업로드됩니다.
- 게시물 페이지에서도 해당 계정의 게시물들을 볼 수 있게 할 것입니다.


8. 게시물 작성 페이지
![15](https://user-images.githubusercontent.com/54101618/105784645-8bddee80-5fbc-11eb-8e01-ea56e04d9079.JPG)
-	게시물 작성 페이지입니다.
-	http://localhost:3000/writeStory
-	My Stories 를 클릭하면 게시물 페이지로 넘어가고 My Calendar 를 클릭하면 달력 페이지로 넘어갑니다.
-	Story 부분에서 Your Title 에 제목을, Your Story 에 내용을 입력합니다.
-	추후에 Hash Tag 를 넣는 기능을 추가할 것입니다.
![16](https://user-images.githubusercontent.com/54101618/105784660-9304fc80-5fbc-11eb-9dab-1489d430dcab.JPG)
-	Create your story 버튼을 클릭하면 게시물 작성이 완료됩니다.
![17](https://user-images.githubusercontent.com/54101618/105784678-9ac4a100-5fbc-11eb-8d98-1e1f430a515b.JPG)
- 메인 페이지로 가면 작성된 게시물가 업로드된 것을 볼 수 있습니다.


9. 달력 페이지
![18](https://user-images.githubusercontent.com/54101618/105785005-44a42d80-5fbd-11eb-9da4-b41082a21bf5.JPG)
![19](https://user-images.githubusercontent.com/54101618/105785025-4ec62c00-5fbd-11eb-9438-5f9044af2148.JPG)
-	달력 페이지입니다.
-	http://localhost:3000/(해당_계정_ID)/mycalendar
-	My Stories 를 클릭하면 게시물 페이지로 넘어가고 My Calendar 를 클릭하면 달력 페이지로 넘어갑니다.
- 달력에서 날짜를 클릭하면 해달 날짜의 투두리스트 작성 페이지로 넘어갑니다.


10. 투두리스트 작성 페이지
![20](https://user-images.githubusercontent.com/54101618/105786070-ad8ca500-5fbf-11eb-8f6d-275493b6d50a.JPG)
- 투두리스트 작성 페이지입니다.
- http://localhost:3000/makeTodolist/(해당_날짜)
-	My Stories 를 클릭하면 게시물 페이지로 넘어가고 My Calendar 를 클릭하면 달력 페이지로 넘어갑니다.
-	Upload Yout Todolist 부분에 알맞은 투두리스트들을 추가할 수 있습니다.
![21](https://user-images.githubusercontent.com/54101618/105786082-b41b1c80-5fbf-11eb-8f39-e2db0954f657.JPG)
- 칸에 투두리스트를 입력하고 ADD 버튼을 클릭하면 투두리스트가 추가되고 Upload Your Job 버튼을 클릭하면 해달 날짜에 투두리스트들이 업로드됩니다.
![22](https://user-images.githubusercontent.com/54101618/105786105-c1380b80-5fbf-11eb-8e28-839f3b01767d.JPG)
-	Your Todolist is... 부분에 해당 날짜의 투두리스트를 확인할 수 있습니다.


