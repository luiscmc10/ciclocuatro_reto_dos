
package Reto_dos_ciclo_cuatro.Repositorio;

import Reto_dos_ciclo_cuatro.Interface.interfaceClothe;
import Reto_dos_ciclo_cuatro.Modelo.clothe;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class clotheRepositorio {
    
    @Autowired
    private interfaceClothe crud;

    public List<clothe> getAll() {
        return crud.findAll();
    }

    public Optional<clothe> getClothe(String reference) {
        return crud.findById(reference);
    }

    public clothe create(clothe clothe) {
        return crud.save(clothe);
    }

    public void update(clothe clothe) {
        crud.save(clothe);
    }

    public void delete(clothe clothe) {
        crud.delete(clothe);
    }
}
