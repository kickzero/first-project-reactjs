import { useState } from 'react';
import Input from '../shared/Input';

function HeaderSearch() {
  const [value, setValue] =  useState();

  function handleChangeValue(){

  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(123);
  }
  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form onSubmit={handleSubmit}>
        <Input type="search" onChange={handleChangeValue} placeholder="Nhap gia tri search ..." />
      </form>
    </div>
  );
}

export default HeaderSearch;
