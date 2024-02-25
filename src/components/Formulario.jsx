const Formulario =() => {
    return (
        <form>
        <label>
          Id:
          <input type="text" name="id" />
        </label>
        <label>
          Área de Conocimiento:
          <input type="text" name="area" />
        </label>
        <label>
          Descripción:
          <textarea name="descripcion" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    )
}

export default Formulario;