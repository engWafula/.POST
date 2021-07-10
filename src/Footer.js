import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Typography>
        Copyright &copy; 2021 All rights reserved  by
      </Typography>
      <Typography>Wafula Allan Isaac </Typography>
      <Typography>
          Contact:+256708832767
          </Typography> 
          <Typography>
              Email Adress:wafulaallan5@gmail.com
              </Typography>
    </div>
  );
}

export default Footer;