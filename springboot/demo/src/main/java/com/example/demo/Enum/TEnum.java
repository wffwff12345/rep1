package com.example.demo.Enum;

public enum TEnum {
    SUCESSFULL(1001,"成功!"),
    VALIDATE(1002,"合法!"),
    ERROR(1003,"错误"),
    NEEDLOGIN(1004,"请登录!"),
    LOGINISEMPTY(1005,"登录密码或账户为空!"),
    LOGINSUCCEED(1006,"登录成功!"),
    LOGINGERROR(1007,"密码错误!"),
    USERISEXIST(1008,"用户已存在!"),
    USERISNOTEXIST(1009,"用户不存在!"),
    USERISNOPOWER(1010,"用户未授权!"),
    USERNAMEISEMPTY(1011,"用户名为空!"),
    RRGISTRESUCESS(1012,"注册用户成功"),




    TEST(9001,"这是测试的")
    ;


    Integer code;
    String information;
    private TEnum(Integer code, String information) {
        this.code = code;
        this.information = information;
    }
    public Integer getCode() {
        return code;
    }
    public void setCode(Integer code) {
        this.code = code;
    }
    public String getInformation() {
        return information;
    }
    public void setInformation(String information) {
        this.information = information;
    }
     
}
