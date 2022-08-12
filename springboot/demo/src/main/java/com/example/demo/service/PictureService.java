package com.example.demo.service;

import org.springframework.web.multipart.MultipartFile;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.commontool.ResponseResult;
import com.example.demo.dto.PictureDto;
import com.example.demo.entity.Picture;

public interface PictureService extends IService<Picture> {
    ResponseResult<?> upload(MultipartFile file) ;
    ResponseResult<?> list(PictureDto dto);
    ResponseResult<?> collect(Integer id,Integer status);
    ResponseResult<?> delete(Integer id);
}
