package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entity.RegisterUser;

@Repository
public interface UserRepository extends JpaRepository<RegisterUser, Long>
{
	@Query(value = "Select * from register_user where user_name=?1 and password=?2", nativeQuery = true)
	RegisterUser getUser(String userName, String password);

}
