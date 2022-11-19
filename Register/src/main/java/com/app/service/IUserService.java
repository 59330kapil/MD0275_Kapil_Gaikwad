package com.app.service;

import javax.validation.Valid;

import com.app.entity.RegisterUser;
import com.app.entity.UserDto;

public interface IUserService
{
	public RegisterUser addUser(RegisterUser user);

	public RegisterUser login(@Valid UserDto user);
}
