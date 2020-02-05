import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import './UserMenu.css';

export default function UserMenu(userAvatar:any) {
  const [anchorEl,setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>

      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img className="userAvatar" src={userAvatar.userAvatar} alt="" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical : 'bottom',
          horizontal : 'center',
        }}
        transformOrigin={{
          vertical : 'top',
          horizontal : 'center',
        }}
      >
        <Link href="/settings">
          <MenuItem onClick={handleClose}>Settings</MenuItem>
        </Link>
        <Link href={`${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_SERVER_LOGOUT_AUTH_ROUTE}`}>
          <MenuItem>Logout</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
