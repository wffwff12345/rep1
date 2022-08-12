package com.example.demo.commontool;

public class PageRequest {
    private Integer size;
    private Long page;
    public Integer getSize() {
      if(size<=0||size>=100){
          setSize(5);
      }
        return size;
    }
    public void setSize(Integer size) {
        this.size = size;
    }
    public Long getPage() {
        if(page<=0||page==null){
            setPage((long) 1);
        }
    
        return page;
    }
    public void setPage(Long page) {
        this.page = page;
    }
    
    
}
