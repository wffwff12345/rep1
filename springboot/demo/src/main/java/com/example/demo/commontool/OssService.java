package com.example.demo.commontool;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.aliyun.oss.OSS;
import com.aliyun.oss.model.PutObjectRequest;


@Service
public class OssService {
    @Autowired
    private OSS ossClint;
    @Autowired
    private OssPropertity propertity;

    private static final List<String> list=Arrays.asList("image/jpg","image/jpeg");

    public String upLoad(MultipartFile file) throws Exception{

        String type=file.getContentType();
        if(!list.contains(type)){
            throw new Exception("不支持该图片类型");
        }
        try {
            BufferedImage bufferedimage=ImageIO.read(file.getInputStream());
            if(bufferedimage==null){
                throw new Exception("不支持该图片类型");
            }
            String originalFilename=file.getOriginalFilename();
            String suffix=originalFilename.substring(originalFilename.lastIndexOf("."));
            String newFilename=UUID.randomUUID().toString()+suffix;
            PutObjectRequest request=new PutObjectRequest(propertity.getBucket(), newFilename, file.getInputStream());
            ossClint.putObject(request);
            String url=propertity.getHost()+"/"+newFilename;
            System.out.println(url);
            return url;
        } catch (IOException e) {
            e.printStackTrace();
            throw new Exception("上传图片失败");
        }   
    
    }

    public String delete(String name){
        String objectName=name.replace(propertity.getHost()+"/", "");
        ossClint.deleteObject(propertity.getBucket(),objectName);
        return "成功删除";
    }
}
