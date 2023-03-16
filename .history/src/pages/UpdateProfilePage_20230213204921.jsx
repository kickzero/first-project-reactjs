import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import './LoginPage/login.css';
import { actUpdateProfileAsync } from '../store/user/action';

function UpdateProfilePage() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    description: '',
    simple_local_avatar: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setisFilePicked] = useState(false);

  function handleChangeValue(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSelectedFile(event.target.files[0]);
    setisFilePicked(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!selectedFile) {
      return;
    }
    const formDatas = new FormData();
    formDatas.append('file', selectedFile);
    dispatch(actUpdateProfileAsync(formDatas)).then((res) => {
    });
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Cập nhật hồ sơ</h1>
            <div className="form-login-register">
              {formError && <p style={{ color: 'red', textAlign: 'center' }}>{formError}</p>}
              <form autoComplete="off" onSubmit={handleSubmit}>
                {selectedFile && <img src={URL.createObjectURL(selectedFile)} />}
                <Input
                    type="file"
                    label="Hình ảnh"
                    name="simple_local_avatar"
                    placeholder="Nhập Avatar"
                    value={formData.simple_local_avatar}
                    autoComplete="off"
                    onChange={handleChangeValue}
                  />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" loading={loading}>
                    Xác nhận
                  </Button>
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

export default UpdateProfilePage;
