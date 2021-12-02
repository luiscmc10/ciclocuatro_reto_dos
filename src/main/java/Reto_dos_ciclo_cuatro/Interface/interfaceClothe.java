package Reto_dos_ciclo_cuatro.Interface;


import Reto_dos_ciclo_cuatro.Modelo.clothe;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface interfaceClothe extends MongoRepository<clothe, String> {
    //Lo utilizo porque con findById siempre me devuelve null
   //Optional<Clothe> findByReference(String reference);
    
}
