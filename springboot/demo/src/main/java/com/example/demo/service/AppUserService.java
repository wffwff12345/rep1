package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.commontool.ResponseResult;
import com.example.demo.dto.ApLogindto;
import com.example.demo.dto.ApRegisterDto;
import com.example.demo.entity.AppUser;

public interface AppUserService  extends IService<AppUser>{
    ResponseResult<?> register(ApRegisterDto dto );
    ResponseResult<?> login(ApLogindto dto);
}
