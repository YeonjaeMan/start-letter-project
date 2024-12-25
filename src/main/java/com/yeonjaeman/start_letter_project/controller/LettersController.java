package com.yeonjaeman.start_letter_project.controller;

import com.yeonjaeman.start_letter_project.domain.Letter;
import com.yeonjaeman.start_letter_project.dto.LetterDto;
import com.yeonjaeman.start_letter_project.repo.LetterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.util.Base64;

@Controller
@RequestMapping("/letters")
public class LettersController {

    @Autowired
    private LetterRepository letterRepository;

    @GetMapping("/start")
    public String showStartPage() {
        return "start";
    }

    @PostMapping("/start")
    public String handleImageUpload(@RequestParam("backgroundImage") MultipartFile backgroundImage, Model model) {
        try {
            byte[] imageBytes = backgroundImage.getBytes();
            String base64Image = convertByteArrayToBase64(imageBytes);
            model.addAttribute("backgroundImage", "data:image/jpeg;base64," + base64Image);
            return "preview";
        } catch (IOException e) {
            e.printStackTrace();
            return "redirect:/start";
        }
    }

    @ResponseBody
    @PostMapping("/new")
    public ResponseEntity<String> createLetter(@RequestBody LetterDto letterDto) {

        System.out.println("Receiver: " + letterDto.getReceiver());
        System.out.println("Sender: " + letterDto.getSender());
        System.out.println("Content: " + letterDto.getContent());
        System.out.println("Base64 Image: " + letterDto.getImage());

        byte[] imageBytes = null;
        if (letterDto.getImage() != null && !letterDto.getImage().isEmpty()) {
            imageBytes = Base64.getDecoder().decode(letterDto.getImage());
        }

        try {
            Letter letter = new Letter();
            letter.setReceiver(letterDto.getReceiver());
            letter.setSender(letterDto.getSender());
            letter.setContent(letterDto.getContent());
            letter.setImage(imageBytes);

            letterRepository.save(letter);

            return ResponseEntity.ok("카드가 성공적으로 생성되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("카드 생성 중 오류가 발생했습니다.");
        }
    }

    private String convertByteArrayToBase64(byte[] imageBytes) {
        return Base64.getEncoder().encodeToString(imageBytes);
    }
}
