package com.example.demo.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.commontool.People;
import com.example.demo.commontool.WmThreadLocal;
import com.mysql.cj.util.StringUtils;

public class MyInterceptor implements HandlerInterceptor {

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        
        
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        
        WmThreadLocal.remove();
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        
        String data=request.getHeader("token");
        if(!StringUtils.isNullOrEmpty(data)){
                People pelple=new People(Integer.parseInt(data));
                WmThreadLocal.setUser(pelple);
        }
        return true;
    }
    
}
