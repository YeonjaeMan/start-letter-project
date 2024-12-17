// 페이지 콘텐츠를 변경하는 함수
function navigate(page) {
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = `
          <section class="py-5 text-center container">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">소중한 사람에게 카드를 전달해보세요!</h1>
                <p class="lead text-body-secondary">원하는 템플릿을 고르고, 간단한 메시지를 적어 카카오톡으로 공유하세요.</p>
                <p>
                  <a href="#" class="btn btn-primary my-2">카드 작성하기!</a>
                  <a href="#" class="btn btn-secondary my-2">카드 템플릿 구경하기!</a>
                </p>
              </div>
            </div>
          </section>

          <div class="album py-5 bg-body-tertiary">
            <div class="container">

              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                  <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
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
                <div class="col">
                  <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
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
                <div class="col">
                  <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
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
              </div>
            </div>
          </div>
    `;

//    // 페이지에 따라 다른 콘텐츠를 설정
//    switch (page) {
//        case 'home':
//            contentDiv.innerHTML = `
//                <h1>Home</h1>
//                <p>환영합니다! 이곳은 SPA의 홈입니다.</p>
//            `;
//            break;
//        case 'letter':
//            contentDiv.innerHTML = `
//                <h1>Writing Letter</h1>
//                <p>이곳은 SPA에 대한 소개 페이지입니다.</p>
//            `;
//            break;
//        case 'feedback':
//            contentDiv.innerHTML = `
//                <h1>피드백</h1>
//                <p>연락처 정보는 다음과 같습니다: example@example.com</p>
//            `;
//            break;
//        default:
//            contentDiv.innerHTML = `<h1>404 - 페이지를 찾을 수 없습니다.</h1>`;
//    }
}

// 기본 페이지 로드
window.onload = function() {
    navigate('home'); // 기본 페이지로 홈 설정
};