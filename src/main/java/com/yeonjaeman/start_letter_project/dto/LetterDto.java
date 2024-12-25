package com.yeonjaeman.start_letter_project.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LetterDto {
    private String receiver;
    private String sender;
    private String content;
    private String image;
}
