package com.example.demo;




import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class VendorDAO {
	@Autowired  
    JdbcTemplate jdbc;  
    
    public String authenticate(String user,String pwd) {
        String cmd = "select vendorid from Vendor where vendorusername=? "
                + " AND vendorpassword=?";
        List str=jdbc.query(cmd,new Object[] {user,pwd}, new RowMapper() {
            @Override
            public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
                // TODO Auto-generated method stub
                return rs.getInt("vendorid");
            }
            
        });
        return str.get(0).toString();
}}
