const Formulario = () => {
  return (
    <div className="container d-flex justify-content-center  ">
        <form className="w-50">
        <div className="mb-2">
          <label for="identificacion" className="form-label">Identificacion</label>
          <input type="text" className="form-control" id="identificacion" />
        </div>
        <div class="mb-2">
          <label for="areaConocimiento" className="form-label">Area de Conocimiento</label>
          <input type="text" className="form-control" id="areaConocimiento"/>
        </div>
        <div class="mb-2">
          <label for="descripcion" className="form-label">Descripcion</label>
          <input type="text" className="form-control" id="descripcion"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Formulario;
