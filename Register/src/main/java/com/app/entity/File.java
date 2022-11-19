package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter

public class File
{
	@Id
	@GenericGenerator(name = "sequence_userid", strategy = "com.app.entity.BaseFileEntity")
	@GeneratedValue(generator = "sequence_userid")
	private long file_id;

	@Column(name = "file_data")
	private byte[] fileData;

}
