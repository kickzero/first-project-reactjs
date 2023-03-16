import Input from '../shared/Input';

function HeaderSearch() {

  function handleSubmit(e){
   e.preventDefault();
   console.log(123)
  }
  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form onSubmit={handleSubmit}>
        <Input type="search" placeholder="Nhap gia tri search ..." />
      </form>
    </div>
  );
}

export default HeaderSearch;
