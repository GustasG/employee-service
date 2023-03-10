package com.gusged.server.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gusged.server.entitiy.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, UUID> {
}