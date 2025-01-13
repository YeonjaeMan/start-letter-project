$(document).ready(function() {
    $("#save-btn").on("click", function() {
        html2canvas($(".card")[0]).then(function(canvas) {
            // Canvas를 PNG 이미지로 변환
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'card.png';
            link.click();
        });
    });
});
