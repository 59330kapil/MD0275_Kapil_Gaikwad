package com.app.entity;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class BaseFileEntity implements IdentifierGenerator
{
	public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException
	{

		Connection connection = session.connection();
		Statement st;
		try
		{
			st = connection.createStatement();
			ResultSet doc = st.executeQuery("select count(*) from file");

			if (doc.next())
			{
				Long File_Id = (long) (doc.getInt(1) + 100000);

				System.out.println("generated Id : " + File_Id);
				return File_Id;
			}

		}
		catch (SQLException e)
		{

			e.printStackTrace();
		}
		return "Not Found";

	}

}
