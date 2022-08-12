package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.commontool.ResponseResult;
import com.example.demo.dto.ApLogindto;
import com.example.demo.dto.ApRegisterDto;
import com.example.demo.service.AppUserService;

@RequestMapping("/app/user")
@RestController
public class AppUserController {
    @Autowired
    private AppUserService service;
    @PostMapping("/register")
    public ResponseResult<?> register(@RequestBody ApRegisterDto dto){
        return service.register(dto);
    
    }
    @PostMapping("/login")
    public ResponseResult<?> login(@RequestBody ApLogindto dto){
        return service.login(dto);
    }
}
