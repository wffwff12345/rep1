package com.example.demo.entity;

import java.util.Date;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("appuser")
public class AppUser {
    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;
    @TableField("name")
    private String name;
    @TableField("password")
    private String password;
    @TableField("phone")
    private String phone;
    @TableField("date")
    private Date date;
    @TableField("status")
    private Integer status;
}

