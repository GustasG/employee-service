package com.gusged.server.controllers;

import java.util.List;

import com.gusged.server.domain.EmployeeService;
import org.springframework.web.bind.annotation.*;

import com.gusged.server.entitiy.Employee;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> findAllEmployees() {
        return employeeService.findAllEmployees();
    }

    @PostMapping("/upload")
    public void saveFile(@RequestParam("file") MultipartFile file) {
        employeeService.saveFile(file);
    }
}