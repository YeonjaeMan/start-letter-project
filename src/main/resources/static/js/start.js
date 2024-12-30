    $('#upload-img').on('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const previewImage = $('#backgroundImage');
                previewImage.attr('src', event.target.result);
                previewImage.css('display', 'block');
            };
            reader.readAsDataURL(file);
        }
    });

    $(document).ready(function() {
        $('#create-btn').on('click', function(e) {
            e.preventDefault();

            const data = {
                receiver: $('#receiver').html(),
                sender: $('#sender').html(),
                content: $('#content').html(),
                image: $('img').attr('src') ? $('img').attr('src').split(',')[1] : null
            };

            $.ajax({
                url: '/letters/new',
                type: 'POST',
                contentType: 'application/json', // JSON 형식으로 전송
                data: JSON.stringify(data), // JSON 문자열로 변환
                success: function(res) {
                    alert(res.message);
                    const letterId = res.letterId;
                    console.log('Letter ID:', letterId);
                    window.location.href = `/letters/end/${letterId}`;
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('Error:', textStatus, errorThrown);
                    alert('서버에 요청하는 중 오류가 발생했습니다: ' + jqXHR.responseText);
                }
            });
        });
    });

    function applyStyle(style) {
        const selection = window.getSelection(); // 현재 선택된 텍스트 가져오기
        if (selection.rangeCount > 0) {
            // 드래그된 텍스트가 있는 경우
            const range = selection.getRangeAt(0);
            const span = document.createElement("span");
            span.className = style; // 선택한 스타일 클래스 추가
            range.surroundContents(span); // 선택된 텍스트를 감싸기
        } else {
            // 드래그된 텍스트가 없는 경우, 전체 스타일 적용
            const content = document.getElementById('card-content');
            content.classList.toggle(style); // 전체 스타일 토글
        }
    }

    function changeColor(color) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            document.execCommand('foreColor', false, color); // 드래그된 텍스트 색상 변경
        } else {
            const content = document.getElementById('card-content');
            content.style.color = color; // 전체 색상 변경
        }
    }

    function changeSize(size) {
        const content = document.getElementById('card-content');
        content.classList.remove('large', 'medium', 'small'); // 기존 크기 클래스 제거
        if (size) {
            content.classList.add(size); // 선택한 크기 클래스 추가
        }
    }

    function changeAlignment(alignment) {
        const content = document.getElementById('card-content');
        content.style.textAlign = alignment; // 정렬 변경
    }