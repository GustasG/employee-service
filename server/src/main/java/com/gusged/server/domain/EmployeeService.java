package com.gusged.server.domain;

import java.io.InputStreamReader;
import java.util.List;

import lombok.SneakyThrows;

import com.opencsv.CSVReader;
import com.opencsv.bean.CsvToBeanBuilder;

import org.springframework.core.io.InputStreamSource;
import org.springframework.stereotype.Service;

import com.gusged.server.entitiy.Employee;
import com.gusged.server.repository.EmployeeRepository;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    @SneakyThrows
    public void saveFile(InputStreamSource inputStreamSource) {
        try (var reader = new CSVReader(new InputStreamReader(inputStreamSource.getInputStream()))) {
            var csvToBean = new CsvToBeanBuilder<Employee>(reader)
                    .withType(Employee.class)
                    .build();

            employeeRepository.saveAllAndFlush(csvToBean.parse());
        }
    }
}