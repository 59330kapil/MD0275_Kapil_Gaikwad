package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.File;

public interface FileRepository extends JpaRepository<File, Long>
{

}
