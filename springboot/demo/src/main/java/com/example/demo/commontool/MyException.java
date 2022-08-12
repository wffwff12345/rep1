package com.example.demo.commontool;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
@RestControllerAdvice
public class MyException {
    @ExceptionHandler(value = Exception.class)
    public ResponseResult<?> HandlerException(Exception exception){
        return ResponseResult.ErrorResult(exception);
    }
    
}
