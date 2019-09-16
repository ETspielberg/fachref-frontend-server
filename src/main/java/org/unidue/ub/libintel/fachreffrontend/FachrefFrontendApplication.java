package org.unidue.ub.libintel.fachreffrontend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class FachrefFrontendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FachrefFrontendApplication.class, args);
	}

}
