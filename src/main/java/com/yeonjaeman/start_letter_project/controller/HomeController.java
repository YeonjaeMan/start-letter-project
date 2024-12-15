package com.yeonjaeman.start_letter_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/letters/new")
    public String lettersNew() {
        return "letter-form";
    }

    @GetMapping("/letters")
    public String letters() {
        return "letters";
    }
}
