package com.gusged.server.entitiy;

import java.util.UUID;

import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvCustomBindByName;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    @Column
    @GeneratedValue
    private UUID id;

    @Column
    @CsvBindByName(column = "name")
    private String name;

    @Column
    @CsvBindByName(column = "email")
    private String email;

    @Column
    @CsvBindByName(column = "phone")
    private String phone;
}