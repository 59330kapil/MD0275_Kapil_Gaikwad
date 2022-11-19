package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.RegisterUser;
import com.app.entity.UserDto;
import com.app.service.IUserService;

@RestController
@CrossOrigin("http://localhost:3000")

public class UserController
{

	@Autowired
	private IUserService userService;

	@PostMapping("/signup")
	public RegisterUser addNewUser(@RequestBody RegisterUser user)
	{

		System.out.println("in add new user " + user);// id : null
		RegisterUser u = userService.addUser(user);
		System.out.println("User added successfully");
		return u;
	}

	@PostMapping("/login")
	public RegisterUser display(@RequestBody UserDto user)
	{
		RegisterUser user1 = userService.login(user);
		if (user != null)
		{
			return user1;
		}
		return null;

	}

}
