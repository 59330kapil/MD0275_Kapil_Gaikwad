package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = "password")
public class RegisterUser extends BaseEntity
{
	@Column(name = "user_name", length = 50)
	private String userName;

	@Column(name = "password", length = 20)
	private String password;
}
