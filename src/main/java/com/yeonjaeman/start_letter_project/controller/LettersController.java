package com.yeonjaeman.start_letter_project.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;

@Controller
@RequestMapping("/letters")
public class LettersController {

    @GetMapping("/start")
    public String showStartPage() {
        return "start";
    }

    @PostMapping("/start")
    public String handleImageUpload(MultipartFile backgroundImage, HttpSession session) throws IOException {
        // 이미지 파일을 리사이즈하고 압축
        byte[] compressedImageBytes = compressAndResizeImage(backgroundImage);
        String base64Image = Base64.getEncoder().encodeToString(compressedImageBytes); // Base64로 인코딩
        session.setAttribute("backgroundImage", base64Image); // 세션에 이미지 저장
        return "redirect:/letters/preview";
    }

    @GetMapping("/preview")
    public String showPreviewPage(Model model, HttpSession session) {
        // 세션에서 이미지 데이터 가져오기
        String base64Image = (String) session.getAttribute("backgroundImage");
        model.addAttribute("backgroundImage", base64Image); // 모델에 추가
        return "preview";
    }

    private byte[] compressAndResizeImage(MultipartFile file) throws IOException {
        // 원본 이미지 로드
        BufferedImage originalImage = ImageIO.read(file.getInputStream());

        // 리사이즈할 크기 설정 (예: 800x600)
        int maxWidth = 400;
        int maxHeight = 300;

        // 원본 이미지의 비율에 맞춰 크기 계산
        int width = originalImage.getWidth();
        int height = originalImage.getHeight();

        // 비율에 따라 크기 조정
        double widthRatio = (double) maxWidth / width;
        double heightRatio = (double) maxHeight / height;
        double minRatio = Math.min(widthRatio, heightRatio);

        width = (int) (width * minRatio);
        height = (int) (height * minRatio);

        Image resizedImage = originalImage.getScaledInstance(width, height, Image.SCALE_SMOOTH);

        // 리사이즈된 이미지를 BufferedImage로 변환
        BufferedImage bufferedResizedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        Graphics2D g = bufferedResizedImage.createGraphics();
        g.drawImage(resizedImage, 0, 0, null);
        g.dispose();

        // 압축된 이미지 저장
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(bufferedResizedImage, "jpg", baos); // JPEG 형식으로 저장
        return baos.toByteArray(); // 압축된 이미지 반환
    }
}
