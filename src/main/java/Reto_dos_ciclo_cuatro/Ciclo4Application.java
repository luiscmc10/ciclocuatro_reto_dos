package Reto_dos_ciclo_cuatro;

import Reto_dos_ciclo_cuatro.Interface.interfaceClothe;
import Reto_dos_ciclo_cuatro.Interface.interfaceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@Component
@SpringBootApplication
public class Ciclo4Application implements CommandLineRunner {
    @Autowired
    private interfaceClothe interfaceClothe;
    @Autowired
    private interfaceUser interfaceUser;
    
	public static void main(String[] args) {
		SpringApplication.run(Ciclo4Application.class, args);
	}
    @Override
    public void run(String... args) throws Exception {
        interfaceClothe.deleteAll();
        interfaceUser.deleteAll();
    }
}
