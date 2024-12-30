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

function changeFont(font) {
    const editableElements = [document.getElementById('content'), document.getElementById('receiver'), document.getElementById('sender')];
    editableElements.forEach(element => {
        element.style.fontFamily = font;
    });
}

function changeFontColor(color) {
    const editableElements = [document.getElementById('content'), document.getElementById('receiver'), document.getElementById('sender')];
    editableElements.forEach(element => {
        element.style.color = color;
    });
}

function changeSize(size) {
    let fontSize;
    switch (size) {
        case 'small':
            fontSize = '0.8rem';
            break;
        case 'medium':
            fontSize = '1.2rem';
            break;
        case 'large':
            fontSize = '1.5rem';
            break;
    }
    const editableElements = [document.getElementById('content'), document.getElementById('receiver'), document.getElementById('sender')];
    editableElements.forEach(element => {
        element.style.fontSize = fontSize;
    });
}

function changeAlignment(alignment) {
    const editableElements = [document.getElementById('content'), document.getElementById('receiver'), document.getElementById('sender')];
    editableElements.forEach(element => {
        element.style.textAlign = alignment;
    });
}

function applyStyle(style) {
    const editableElements = [document.getElementById('content'), document.getElementById('receiver'), document.getElementById('sender')];
    editableElements.forEach(element => {
        const currentStyle = element.style.fontWeight;
        if (style === 'bold') {
            element.style.fontWeight = currentStyle === 'bold' ? 'normal' : 'bold';
        } else if (style === 'italic') {
            element.style.fontStyle = element.style.fontStyle === 'italic' ? 'normal' : 'italic';
        } else if (style === 'underline') {
            element.style.textDecoration = element.style.textDecoration === 'underline' ? 'none' : 'underline';
        }
    });
}