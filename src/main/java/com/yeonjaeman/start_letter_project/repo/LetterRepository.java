package com.yeonjaeman.start_letter_project.repo;

import com.yeonjaeman.start_letter_project.domain.Letter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LetterRepository extends JpaRepository<Letter, Long> {
}
