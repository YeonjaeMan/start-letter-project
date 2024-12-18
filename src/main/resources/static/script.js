// 페이지 콘텐츠를 변경하는 함수
function navigate(page) {
    const contentDiv = document.getElementById('content');

    if (page === 'home') {
        contentDiv.innerHTML = `
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">소중한 사람에게 카드를 전달해보세요!</h1>
                        <p class="lead text-body-secondary">원하는 템플릿을 고르고, 간단한 메시지를 적어 카카오톡으로 공유하세요.</p>
                        <p>
                            <a href="#" class="btn btn-primary my-2" id="createCardBtn">카드 작성하기!</a>
                            <a href="#" class="btn btn-secondary my-2">카드 템플릿 구경하기!</a>
                        </p>
                    </div>
                </div>
            </section>
            <div class="album py-5 bg-body-tertiary">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        ${generateCards()}
                    </div>
                </div>
            </div>
        `;

        document.getElementById('createCardBtn').addEventListener('click', function(event) {
            event.preventDefault();
            navigate('createCard');
        });
    } else if (page === 'createCard') {
        contentDiv.innerHTML = `
            <div class="container mt-4">
                <h3>카드 작성</h3>
                <form id="cardForm">
                    <div class="d-flex justify-content-between">
                        <div class="mb-3">
                            <label for="backgroundImage" class="form-label">배경 이미지 업로드</label>
                            <input type="file" class="form-control" id="backgroundImage" accept="image/*" required>
                        </div>
                        <div class="mb-3">
                            <label for="fontColor" class="form-label">글자 색상</label>
                            <input type="color" class="form-control" id="fontColor" value="#ffffff">
                        </div>
                        <div class="mb-3">
                            <label for="fontFamily" class="form-label">글꼴 선택</label>
                            <select class="form-select" id="fontFamily">
                                <option value="Arial">Arial</option>
                                <option value="Courier New">Courier New</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Verdana">Verdana</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="cardText" class="form-label">메세지</label>
                        <input type="text" class="form-control" id="cardTextInput" required>
                    </div>
                    <div id="cardPreview">
                        <div class="card text-bg-dark" style="background-color: transparent;">
                          <img src="" class="card-img" alt="Card background" id="cardBackground" style="display: none;">
                          <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text" id="cardText">여기에 메세지를 입력하세요.</p>
                          </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success">카드 작성 완료</button>
                    <button type="button" class="btn btn-secondary" id="backBtn">뒤로가기</button>
                </form>
            </div>
        `;

        // 배경 이미지 업로드 이벤트
            document.getElementById('backgroundImage').addEventListener('change', function(event) {
                const file = event.target.files[0];
                const reader = new FileReader();

                reader.onload = function(e) {
                    const cardBackground = document.getElementById('cardBackground');
                    cardBackground.src = e.target.result; // 이미지 소스 설정
                    cardBackground.style.display = 'block'; // 이미지 표시
                };

                reader.readAsDataURL(file);
            });

        // 카드 텍스트 업데이트
            document.getElementById('cardTextInput').addEventListener('input', function(event) {
                const cardText = document.getElementById('cardText');
                cardText.textContent = event.target.value; // 카드 텍스트 업데이트
            });

            // 글자 색상 변경 이벤트
            document.getElementById('fontColor').addEventListener('input', function(event) {
                const cardText = document.getElementById('cardText');
                cardText.style.color = event.target.value; // 글자 색상 변경
            });

            // 글꼴 변경 이벤트
            document.getElementById('fontFamily').addEventListener('change', function(event) {
                const cardText = document.getElementById('cardText');
                cardText.style.fontFamily = event.target.value; // 글꼴 변경
            });

        // 뒤로가기 버튼 클릭 이벤트 추가
        document.getElementById('backBtn').addEventListener('click', function() {
            navigate('home');
        });
    }

    // 해시 변경
    window.location.hash = page;
}

// 카드 생성 함수
function generateCards() {
    let cards = '';
    for (let i = 0; i < 3; i++) {
        cards += `
            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    return cards;
}

// 해시 변경 시 페이지 로드
window.onhashchange = function() {
    const page = window.location.hash.slice(1) || 'home';
    navigate(page);
};

// 기본 페이지 로드
window.onload = function() {
    navigate('home'); // 기본 페이지로 홈 설정
};