// regresa de forma textual los parámetros leidos con get
  const doGet = (e = {}) => {
    const { parameter } = e;
    const { nombre = 'Arnold', apellido = 'GetSchwarzenegger' tel="123" dir="xalapa" } = parameter;
    const salida = `Hola ${nombre} ${apellido} ${tel} ${dir}`;
    return ContentService.createTextOutput(salida);
  };

// regresa de forma textual los parámetros leidos con post
  const doPost = (e = {}) => {
    const { parameter } = e;
    const { nombre = 'Arnold', apellido = 'PostSchwarzenegger'tel="123" dir="xalapa" } = parameter;
    const salida = `Hola ${nombre} ${apellido} ${tel} ${dir}`;
    return ContentService.createTextOutput(salida);
  };
