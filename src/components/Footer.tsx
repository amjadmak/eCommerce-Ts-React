//Copyrights and people who contributed to this file and their linkedIn, GIthub...etc
import React from "react";
import { BottomNavigation, Toolbar, Typography } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../style.css";

const Footer: React.FC = () => {
  return (
    <>
      <BottomNavigation
        className="ss-16lloyr-MuiBottomNavigation-root"
        style={{
          background: "#1976d2",
          position: "static",
          top: "100%",
          bottom: "0px",
          width: "100%",
        }}
      >
        <Toolbar className="bigfooter">
          <div className="footer">
            <Typography
             
              sx={{ color: "#ffff", flexGrow: "1", cursor: "pointer" ,  variant:"h7"}}
            >
              AMJAD
            </Typography>
            <div className="icon">
              <IconButton
                className="icon"
                aria-label="Linkedin.com"
                onClick={() => window.open("https://github.com/amjadmak")}
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                className="icon"
                aria-label="Linkedin.com"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/amjad-maqsouma-54bb91234/"
                  )
                }
              >
                <LinkedInIcon />
              </IconButton>
            </div>
            <Typography
              sx={{ color: "#ffff", flexGrow: "1", variant:"h7" }}
              
              
            >
              All Rights Reserved © 2022
            </Typography>
          </div>
        </Toolbar>
      </BottomNavigation>
    </>
  );
};
export default Footer;
