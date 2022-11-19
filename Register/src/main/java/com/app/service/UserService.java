package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.RegisterUser;
import com.app.entity.UserDto;
import com.app.repository.UserRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Transactional
@Slf4j
public class UserService implements IUserService
{

	@Autowired
	private UserRepository userRepo;

	@Override
	public RegisterUser addUser(RegisterUser user)
	{
		System.out.println("Inside service impl " + user);
		return userRepo.save(user);
	}

	@Override
	public RegisterUser login(UserDto user)
	{

		RegisterUser u = userRepo.getUser(user.getUserName(), user.getPassword());
		return u;
	}

}
