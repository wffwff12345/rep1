package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Enum.TEnum;
import com.example.demo.commontool.ResponseResult;
import com.example.demo.dto.PictureDto;
import com.example.demo.dto.collectDto;
import com.example.demo.service.PictureService;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/picture")
public class PictureController {
    @Autowired
    PictureService service;
    @PostMapping("/upload")
    public ResponseResult<?> upload( MultipartFile file) {
        ResponseResult<?> result= service.upload(file);
        return result;
    }
   
    @PostMapping("/list")
    public ResponseResult<?> listBstatus(@RequestBody PictureDto  dto) {
        ResponseResult<?> result=service.list(dto);
        return result;
    }
    @PutMapping("/update/{id}")
    public ResponseResult<?> test(@PathVariable("id") Integer id,@RequestBody collectDto dto) {
        if(dto.getStatus()==1){
            ResponseResult<?> result=service.collect(id, 0);
            return result;
        }
        else if(dto.getStatus()==0){
            ResponseResult<?> result=service.collect(id, 1);
            return result;
        }
        else{
            return ResponseResult.ErrorResult(TEnum.ERROR);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseResult<?> delete(@PathVariable("id") Integer id){
        ResponseResult<?> result=service.delete(id);
        return result;

    }
    
}
