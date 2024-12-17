// 페이지 콘텐츠를 변경하는 함수
function navigate(page) {
    const contentDiv = document.getElementById('content');

    // 페이지에 따라 다른 콘텐츠를 설정
    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
                <h1>Home</h1>
                <p>환영합니다! 이곳은 SPA의 홈입니다.</p>
            `;
            break;
        case 'letter':
            contentDiv.innerHTML = `
                <h1>Writing Letter</h1>
                <p>이곳은 SPA에 대한 소개 페이지입니다.</p>
            `;
            break;
        case 'feedback':
            contentDiv.innerHTML = `
                <h1>피드백</h1>
                <p>연락처 정보는 다음과 같습니다: example@example.com</p>
            `;
            break;
        default:
            contentDiv.innerHTML = `<h1>404 - 페이지를 찾을 수 없습니다.</h1>`;
    }
}

// 기본 페이지 로드
window.onload = function() {
    navigate('home'); // 기본 페이지로 홈 설정
};