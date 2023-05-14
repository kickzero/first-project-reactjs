import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import './LoginPage/login.css';
import { actUpdateProfileAsync } from '../store/user/action';

function UpdateProfilePage() {

  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);
  
  function handleChangeValue(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!selectedFile) {
      return;
    }
    const formData = new FormData();
    
    formData.append('file', selectedFile);
    console.log(formData, "formData")
    dispatch(actUpdateProfileAsync(formData)).then((res) => {
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
              
              <form autoComplete="off" onSubmit={handleSubmit}>
                {selectedFile && <img src={URL.createObjectURL(selectedFile)} />}
                <Input
                    type="file"
                    label="Hình ảnh"
                    name="simple_local_avatar"
                    placeholder="Nhập Avatar"
                    autoComplete="off"
                    onChange={handleChangeValue}
                  />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">
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
