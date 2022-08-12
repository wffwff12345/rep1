package com.example.demo.dto;

import java.util.Date;
import java.util.List;

import com.example.demo.commontool.PageRequest;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
@EqualsAndHashCode(callSuper = false)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewsDto extends PageRequest {
    private Integer id;
    private String title;
    private String channel;
    private String content;
    private Integer type;
    private List<String> cover;
    private Date createTime;
}
