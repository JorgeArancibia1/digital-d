// ---
// import Form from './Form.js';
// import FormContact from './FormContact.astro';
// ---
// <!-- <Form client:load /> -->
// <button class="bg-white w-[390px] h-[75px] rounded-t-xl my-0 mx-auto pb-0 flex justify-center"
// type="button"

import { useState } from 'react';
import { DropDownButton } from './DropDownButton';
import FormContact from './FormContact.astro';
import FormContacto from './FormContacto';

// onclick=""> mostrar </button>
export const SectionForm = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <DropDownButton
        titleButton={isShow ? 'Ocultar' : 'Contactanos'}
        clase="bg-white w-[390px] h-[75px] rounded-t-xl my-0 mx-auto pb-0 flex justify-center"
        setIsShow={setIsShow}
        isShow={isShow}
      />
      {isShow ? <FormContacto /> : ''}
    </>
  );
};
