package com.yeonjaeman.start_letter_project.controller;

import com.yeonjaeman.start_letter_project.domain.Letter;
import com.yeonjaeman.start_letter_project.dto.LetterDto;
import com.yeonjaeman.start_letter_project.exception.ResourceNotFoundException;
import com.yeonjaeman.start_letter_project.repo.LetterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/letters")
public class LettersController {

    @Autowired
    private LetterRepository letterRepository;

    @GetMapping("/start")
    public String showStartPage() {
        return "start";
    }

    @ResponseBody
    @PostMapping("/new")
    public ResponseEntity<Map<String, Object>> createLetter(@RequestBody LetterDto letterDto) {

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

            Letter savedLetter = letterRepository.save(letter);
            Long letterId = savedLetter.getId();

            Map<String, Object> response = new HashMap<>();
            response.put("message", "카드가 성공적으로 생성되었습니다.");
            response.put("letterId", letterId);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "카드 생성 중 오류가 발생했습니다."));
        }
    }

    @GetMapping("/end/{id}")
    public String showEndPage(Model model, @PathVariable("id") Long letterId) {
        Letter letter = letterRepository.findById(letterId)
                .orElseThrow(() -> new ResourceNotFoundException("Letter not found with ID: " + letterId));

        model.addAttribute("receiver", letter.getReceiver());
        model.addAttribute("sender", letter.getSender());
        model.addAttribute("content", letter.getContent());
        model.addAttribute("image", Base64.getEncoder().encodeToString(letter.getImage()));

        return "end";
    }
}
