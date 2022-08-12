package com.example.demo.dto;
import com.example.demo.commontool.PageRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
@EqualsAndHashCode(callSuper = false)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchNewsDto extends PageRequest {
    private String title;
    private String channel;
}