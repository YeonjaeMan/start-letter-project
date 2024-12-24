package com.yeonjaeman.start_letter_project.controller;

import com.yeonjaeman.start_letter_project.domain.Letter;
import com.yeonjaeman.start_letter_project.repo.LetterRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @PostMapping("/new")
    public String createLetter(@RequestParam("receiver") String receiver,
                               @RequestParam("sender") String sender,
                               @RequestParam("content") String content,
                               @RequestParam(value = "image", required = false) byte[] image,
                               RedirectAttributes redirectAttributes) {
        Letter letter = new Letter();
        letter.setReceiver(receiver);
        letter.setSender(sender);
        letter.setContent(content);
        letter.setImage(image);

        letterRepository.save(letter);

        redirectAttributes.addFlashAttribute("message", "카드가 성공적으로 생성되었습니다.");
        return "redirect:/letters/start";
    }

    private String convertByteArrayToBase64(byte[] imageBytes) {
        return Base64.getEncoder().encodeToString(imageBytes);
    }
}
