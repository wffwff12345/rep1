package com.example.demo.commontool;

import com.example.demo.Enum.TEnum;
import java.io.Serializable;
import lombok.Data;
@Data
public class ResponseResult<T> implements Serializable{
    private Integer code;
    private String message;
    private T data;
    public ResponseResult(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
    public ResponseResult() {
        this.code=TEnum.SUCESSFULL.getCode();
        this.message=TEnum.SUCESSFULL.getInformation();
    }
    public ResponseResult(String message, T data) {
        this.message = message;
        this.data = data;
    }
    public ResponseResult(Integer code, T data) {
        this.code = code;
        this.data = data;
    }
    public ResponseResult(Integer code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
    public static ResponseResult<?> OkResult(){
     return new ResponseResult<>();
    }

    public static<T> ResponseResult<?> okResult(T data){
        return new ResponseResult<>(TEnum.SUCESSFULL.getCode(),TEnum.SUCESSFULL.getInformation(), data);
    }
    public static<T> ResponseResult<?> okResult(T data,TEnum eTEnum){
        return new ResponseResult<T>(eTEnum.getCode(), eTEnum.getInformation(), data);
    }
    public static ResponseResult<?> ErrorResult(TEnum eTEnum){
        return  new ResponseResult<>(eTEnum.getCode(),eTEnum.getInformation());

    }
    public static<T> ResponseResult<?> ErrorResult(T data){
        return new ResponseResult<>(TEnum.ERROR.getCode(),TEnum.SUCESSFULL.getInformation(),data);
    }
    public static<T> ResponseResult<?> ErrorResult(T data,TEnum eTEnum){
        return new ResponseResult<>(eTEnum.getCode(),data);
    }
    // public static void main(String[] args) {
    //     ResponseResult<?> result =new ResponseResult<>(1,"失败！");
    //     System.out.println(result);
    // }
}
