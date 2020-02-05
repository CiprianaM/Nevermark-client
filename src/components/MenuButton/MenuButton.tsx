import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from "@material-ui/core/styles";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './MenuButton.css';

interface ChosenOpt {
  options: string[];
  deleteDomain: any;
  domain: any;
}

const ITEM_HEIGHT = 48;
const LongMenu: React.FC<ChosenOpt> = ({
  options, deleteDomain, domain }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e:any, someString:any) => {
    if (someString==='Delete Domain') {
      deleteDomain(domain);
    }
    setAnchorEl(null);
  };

  return (
    <div className="menu-button" >

      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 120,
          },
        }}
      >
        {options.map(option => (
          <MenuItem key={option} onClick={(e)=>handleClose(e,option)}  value={option}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
export default LongMenu;
