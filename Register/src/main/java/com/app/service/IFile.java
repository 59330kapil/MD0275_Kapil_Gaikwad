package com.app.service;

import java.util.List;

import com.app.entity.File;

public interface IFile
{
	public boolean addFile(File f);

	public List<File> allFiles();

	public File getFile(long id);
}
