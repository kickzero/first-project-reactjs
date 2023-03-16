
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actLogout } from '../../store/user/action';

function HeaderMenus() {

  const dispatch = useDispatch();
  const menus = useSelector((state) => state.MENU.menus);
  const currentUser = useSelector(state => state.USER.currentUser);
  function renderMenu(items) {
    return items.map(item => {
      return (
        <li key={item.id}>
          <a href={item.link}>{item.name}</a>
          {item?.childItems.length > 0 && <ul>{renderMenu(item.childItems)}</ul>}
        </li>
      )
    })
  }

  function handleLogout(e){
    e.preventDefault();
    dispatch(actLogout());
  }

  // function renderMenuLv2(items) {
  //   return items.map(item => {
  //     return (
  //       <li >
  //         <a href={item.url}>{item.title}</a>
  //       </li>
  //     )
  //   })
  // }

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">
         {renderMenu(menus)}
        </ul>
        <ul className="header-nav__lists">
          {!currentUser && <li className="user">
            <Link to="/login">
              <i className="icons ion-person" /> Tài khoản
            </Link>
          </li>}
          {currentUser && <li className="user">
            <Link to="/login">
              <i className="icons ion-person" /> {currentUser.name}
            </Link>
            <ul>
              <li>
                <a to="">Update Pròile</a>
              </li>
              <li>
                <a to="">Change password</a>
              </li>
              <li>
                <a onClick={handleLogout} href="/">Logout</a>
              </li>
            </ul>
          </li>}
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
