import { Link } from 'react-router-dom';

import style from '../../assets/images/logo.png'

function HeaderLogo() {
  return (
    <div className="tcl-col-2">
      {/* Logo */}
      <div className="header-logo">
        <Link to="/">
          <img src="%PUBLIC_URL%/logo192.png" alt="Go to homepage" />
        </Link>
      </div>
    </div>
  );
}

export default HeaderLogo;
