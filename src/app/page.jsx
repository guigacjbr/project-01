"use client";
import { useState, useEffect } from "react";
import { ChakraProvider, Box } from "@chakra-ui/core";
import Link from "next/link";
import Menu from "@/components/Navbar";

import styles from "./page.module.css";

function MyForm() {
  useEffect(() => {}, []);
  const [formData, setFormData] = useState({
    Empresa: "",
    Produto: "",
    Checkout: "",
    QTD: "",
    Valor: "",
    Data: "",
    Operador: "",
    Conferente: "",
    Código: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <Menu />
      <div className={styles.main}>
        <form onSubmit={handleSubmit}>
          <label>
            Empresa:
            <input
              type="text"
              name="Empresa"
              value={formData.Empresa}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Produto:
            <input
              type="text"
              name="Produto"
              value={formData.Produto}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Checkout:
            <input
              type="text"
              name="Checkout"
              value={formData.Checkout}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            QTD:
            <input
              type="text"
              name="QTD"
              value={formData.QTD}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Valor:
            <input
              type="text"
              name="Valor"
              value={formData.Valor}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Data:
            <input
              type="date"
              name="Data"
              value={formData.Data}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Operador:
            <input
              type="text"
              name="Operador"
              value={formData.Operador}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Conferente:
            <input
              type="text"
              name="Conferente"
              value={formData.Conferente}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Código:
            <input
              type="text"
              name="Código"
              value={formData.Código}
              onChange={handleChange}
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default MyForm;
