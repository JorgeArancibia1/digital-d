// import React, { useState } from 'react';

const FormContacto = () => {
  // const [show, setShow] = useState(false);
  return (
    <>
      <div className="bg-white max-w-[120rem] w-[95%] my-0 mx-auto pt-2">
        <main className="w-[95%] mx-auto my-8 max-w-[800px]">
          <h2 className="text-4xl text-center pt-5">
            Llena el formulario de Contacto
          </h2>
          <form className="py-5" method="POST" data-netlify="true">
            <fieldset>
              <legend className="text-gray-400 text-3xl py-3">
                {' '}
                Contactanos{' '}
              </legend>
              <label className="block uppercase font-bold"> Nombre: </label>
              <input
                className="p-4 block w-full bg-gray-100 mb-8 border-none rounded-lg"
                type="text"
                name="nombre"
                placeholder="Nombre"
                required
              />
              <label className="block uppercase font-bold"> E-mail: </label>
              <input
                className="p-4 block w-full bg-gray-100 mb-8 border-none rounded-lg"
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
              />
              <label className="block uppercase font-bold">Teléfono:</label>
              <input
                className="p-4 block w-full bg-gray-100 mb-8 border-none rounded-lg"
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                required
              />
              <label className="block uppercase font-bold">Mensaje:</label>
              <textarea
                className="p-4 block w-full bg-gray-100 mb-8 border-none rounded-lg h-80"
                name="mensaje"
              ></textarea>
            </fieldset>
            <input
              type="submit"
              value="Enviar"
              className="text-white font-bold no-underline text-3xl px-12 py-4 mt-12 text-center border-none block bg-green-500 rounded-md"
            />
          </form>
        </main>
      </div>
    </>
  );
};
export default FormContacto;
