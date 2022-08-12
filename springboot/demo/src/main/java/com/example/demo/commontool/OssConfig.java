package com.example.demo.commontool;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;

@Configuration
public class OssConfig {
    @Bean
    public OSS ossClint(OssPropertity propertity){
       return new OSSClientBuilder().build(propertity.getEndpoint(), propertity.getAccessKeyId(), propertity.getAccessKeySecret());
        
    }
}
