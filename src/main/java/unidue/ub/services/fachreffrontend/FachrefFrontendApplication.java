package unidue.ub.services.fachreffrontend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.stereotype.Controller;

@Controller
@SpringBootApplication
public class FachrefFrontendApplication extends WebSecurityConfigurerAdapter {

	public static void main(String[] args) {
		SpringApplication.run(FachrefFrontendApplication.class, args);
	}


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic().disable().csrf()
				.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
		http.authorizeRequests().anyRequest().authenticated();
	}
}
