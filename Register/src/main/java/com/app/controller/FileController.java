package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.File;
import com.app.service.IFile;

@RestController
@CrossOrigin("http://localhost:3000")
public class FileController
{
	@Autowired
	private IFile ifile;

	@PostMapping("/addfile")
	public boolean addFile(@RequestBody File file)
	{
		return ifile.addFile(file);
	}

	@GetMapping("/allFiles")
	public List<File> allFiles()
	{
		return ifile.allFiles();
	}

	@GetMapping("/getFile/{fileid}")
	public File getFile(@PathVariable long id)
	{
		return ifile.getFile(id);
	}
}
