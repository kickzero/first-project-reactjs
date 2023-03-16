import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useIsAuthenticated } from '../hooks/useIsAuthenticated';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import './LoginPage/login.css';
import { actChangePasswordAsync } from '../store/user/action';

function ChangePassword() {
  useIsAuthenticated();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    password: '',
    new_password: '',
    confirm_new_password: '',
  });

  function handleChangeValue(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('test password')
    setLoading(true);
    dispatch(actChangePasswordAsync(formData)).then((res) => {
      if (!res.ok) {
        setFormError(res.message);
        setLoading(false);
        console.log('test password')
      }
    });
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đổi mật khẩu</h1>
            <div className="form-login-register">
              {formError && <p style={{ color: 'red', textAlign: 'center' }}>{formError}</p>}
              <form autoComplete="off" onSubmit={handleSubmit}>
              <Input
                  name="password"
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  value={formData.password}
                  autoComplete="new-password"
                  onChange={handleChangeValue}
                />
                <Input
                  name="new_password"
                  type="password"
                  label="Mật khẩu mới"
                  placeholder="Nhập mật khẩu mới ..."
                  value={formData.new_password}
                  autoComplete="new-password"
                  onChange={handleChangeValue}
                />
                <Input
                  name="confirm_new_password"
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập lại mật khẩu mớis của bạn ..."
                  value={formData.confirm_new_password}
                  autoComplete="new-password"
                  onChange={handleChangeValue}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" loading={loading}>
                    Xác nhận
                  </Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default ChangePassword;
