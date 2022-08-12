package com.example.demo.entity;
import java.util.Date;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@TableName("user")
public class User {
    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;
    @TableField("name")
    private String name;
    @TableField("password")
    private String password;
    @TableField("age")
    private Integer age;
    @TableField("email")
    private String email;
    @TableField("date")
    private Date date;
    @TableField("phone")
    private String phone;
    @TableField("status")
    private Integer status;
}