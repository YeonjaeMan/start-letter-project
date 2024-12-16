package com.yeonjaeman.start_letter_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/letters")
public class LettersController {

    @GetMapping("")
    public String letters() {
        return "letters";
    }

    @GetMapping("/new")
    public String lettersNew() {
        return "letter_writing";
    }
}
