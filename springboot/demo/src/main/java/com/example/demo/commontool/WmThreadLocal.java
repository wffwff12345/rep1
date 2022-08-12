package com.example.demo.commontool;
public class WmThreadLocal {
    public  static  ThreadLocal<People> threadlocal=new ThreadLocal<>();
    public static void setUser(People user){
        threadlocal.set(user);
    }
    public static People getUser(){
         return threadlocal.get();
    }
    public static void remove(){
        threadlocal.remove();
    }
}