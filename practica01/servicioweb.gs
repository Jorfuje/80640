// regresa de forma textual los parámetros leidos con get
  const doGet = (e = {}) => {
    const { parameter } = e;
    const { nombre = 'Arnold', apellido = 'GetSchwarzenegger', telefono,direccion } = parameter;
    const salida = `Hola ${nombre} ${apellido} ${telefono} ${direccion}`;
    return ContentService.createTextOutput(salida);
  };

// regresa de forma textual los parámetros leidos con post
  const doPost = (e = {}) => {
    const { parameter } = e;
    const { nombre = 'Arnold', apellido = 'PostSchwarzenegger',telefono,direccion } = parameter;
    const salida = `Hola ${nombre} ${apellido} ${telefono} ${direccion}`;
    return ContentService.createTextOutput(salida);
  };