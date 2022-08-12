package com.example.demo.commontool;

import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
public class PageResponseResult<T> extends ResponseResult<T> {
    private Long currentpage;
    private Integer size;
    private Long total;
    public PageResponseResult(Integer size, Long currentpage, Long total) {
        this.size = size;
        this.currentpage = currentpage;
        this.total = total;
    }
    public  PageResponseResult(Integer size, Long currentpage, T data) {
        this.size = size;
        this.currentpage = currentpage;
        this.setData(data);
    }
    public PageResponseResult(Integer size,Long currentpage,Long total, T data){
        this.size=size;
        this.currentpage=currentpage;
        this.total=total;
        this.setData(data);
    }
    public Integer getSize() {
        return size;
    }
    public void setSize(Integer size) {
        this.size = size;
    }
    public Long getCurrentpage() {
        return currentpage;
    }
    public void setCurrentpage(Long currentpage) {
        this.currentpage = currentpage;
    }
    public Long getTotal() {
        return total;
    }
    public void setTotal(Long total) {
        this.total = total;
    }
    
}