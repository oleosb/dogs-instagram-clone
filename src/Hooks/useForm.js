import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter 1 caracter maiúsculo, 1 minúsculo  e digito. Com no mínimo 8 caracteres.",
  },
  number:{
    regex: /^\d+$/,
    message: 'Utilize apenas números'
  }
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validade(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um  valor.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validade(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    validade: () => validade(value),
    onBlur: () => validade(value),
    error,
  };
};

export default useForm;
