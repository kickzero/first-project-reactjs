import { useState } from 'react';
import Input from '../shared/Input';

function HeaderSearch() {
  const [value, setValue] =  useState('');

  function handleChangeValue(e){
    setValue(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(value);
  }
  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form onSubmit={handleSubmit}>
        <Input type="search" onChange={handleChangeValue} value={value} placeholder="Nhap gia tri search ..." />
      </form>
    </div>
  );
}

export default HeaderSearch;
