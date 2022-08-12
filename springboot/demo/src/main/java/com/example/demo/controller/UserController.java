package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.commontool.ResponseResult;
import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.service.PictureService;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService service;
    @Autowired
     PictureService service1;
    @PostMapping("/getByname")
    public  ResponseResult<?> getByname(@RequestBody UserDto dto){
        ResponseResult<?> result= service.getByname(dto);
        return result;
    }
    @PostMapping("/login")
    public ResponseResult<?> login(@RequestBody LoginDto dto){
        ResponseResult<?> result=service.login(dto);
        return result;
    }
    @PostMapping("/test")
    public ResponseResult<?> test( Integer  status) {
        
        return ResponseResult.okResult(status);
    }
}
