package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.File;
import com.app.repository.FileRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Transactional
@Slf4j
public class FileImpl implements IFile
{
	@Autowired
	private FileRepository fileRepo;

	@Override
	public boolean addFile(File f)
	{
		File f1 = fileRepo.save(f);
		if (f1 != null)
		{
			return true;
		}
		return false;
	}

	@Override
	public List<File> allFiles()
	{

		return fileRepo.findAll();
	}

	@Override
	public File getFile(long id)
	{
		File f = fileRepo.getById(id);
		return f;
	}

}
