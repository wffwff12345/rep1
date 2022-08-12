package com.example.demo.commontool;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import lombok.Data;

@Data
@Component
@PropertySource("oss.properties")
@ConfigurationProperties(prefix = "aliyun.oss")
public class OssPropertity {
    private String accessKeyId;
    private String accessKeySecret;
    private String bucket;
    private String host;
    private String endpoint;
}
