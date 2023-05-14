import { Link } from 'react-router-dom';

import {style} from '../../assets/images/logo.png'

function HeaderLogo() {
  return (
    <div className="tcl-col-2">
      {/* Logo */}
      <div className="header-logo">
        <Link to="/">
          <img src="/assets/images/blog-detail.jpg" alt="Go to homepage" />
        </Link>
        
          <img src={style} alt="Go to homepage" />
        
      </div>
    </div>
  );
}

export default HeaderLogo;
