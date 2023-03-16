import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import { useIsAuthenticated } from '../../hooks/useIsAuthenticated';
import { actLoginsAsync } from '../../store/user/action';
import './login.css';

function LoginPage() {
  useIsAuthenticated();

  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFormData({
      ...formData,
      [name]: value
    });
  }



  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    dispatch(actLoginsAsync(formData)).then((res) => {
      if (res.ok) {
        history.push('/');
      } else {
        setFormError(res.message);
        setLoading(false);
      }
    })
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              {formError && <p style={{ color: 'red', textAlign: 'center' }}>{formError}</p>}
              <form onSubmit={handleSubmit} autoComplete="off">
                <Input name="username" onChange={handleChange} label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." autoComplete="off" />
                <Input
                  name="password" onChange={handleChange}
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" loading={loading}>
                    Đăng nhập
                  </Button>
                  <Link to="/register">Đăng ký</Link>
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

export default LoginPage;
