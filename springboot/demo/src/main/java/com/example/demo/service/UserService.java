package com.example.demo.service;
import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.commontool.ResponseResult;
import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;

public interface UserService extends IService<User>{
    ResponseResult<?> getByname(UserDto dto);
    ResponseResult<?> login(LoginDto dto);
    
}
