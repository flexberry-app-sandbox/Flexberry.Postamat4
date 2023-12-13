package Postamat4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Логистика
 */
@Entity(name = "IISPostamat4Логистика")
@Table(schema = "public", name = "Логистика")
public class Logistika {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Состояние")
    private String состояние;

    @Column(name = "Информация")
    private String информация;


    public Logistika() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getСостояние() {
      return состояние;
    }

    public void setСостояние(String состояние) {
      this.состояние = состояние;
    }

    public String getИнформация() {
      return информация;
    }

    public void setИнформация(String информация) {
      this.информация = информация;
    }


}