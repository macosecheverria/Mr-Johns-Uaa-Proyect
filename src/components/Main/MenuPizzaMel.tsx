

export const MenuPizzaMel = () => {
  return (
    <div className="cuerpo">
    <span><h2>Te esperamos en:</h2></span>
    <hr />
    <ul
    className="text-2xl text-center list-none text-white shadow-black p-0"
    >
      <li 
      className="mb-5"
      >
        Lambaré<br />Avda. Médicos del Chaco c/ Paz del Chaco<br />Horario de
        Atención: 10 a.m. a 00:00 h
      </li>
      <iframe
        className="w-auto h-auto rounded-3xl border-solid border-[7px] mt-[15px] mb-[15px] mx-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8173.8234644337235!2d-57.6190892820598!3d-25.333057231153912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da96a3f8aebaf%3A0xeef01c480accf9d3!2sMr.%20John&#39;s!5e0!3m2!1ses-419!2sar!4v1719032955664!5m2!1ses-419!2sar"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <li>
        Asunción, Barrio Herrera<br />Avda. Lilio y Rogelio Benítez<br />Horario
        de Atención: 10 a.m. a 00:00 h
      </li>
      <iframe
        className="w-auto h-auto rounded-3xl border-solid border-[7px] mt-[15px] mb-[15px] mx-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18593.153559608785!2d-57.55986815888512!3d-25.290834538176256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8b33163b455%3A0xdd30185b509e628b!2sMr.%20John&#39;s%20Pizzas%20Americanas!5e0!3m2!1ses-419!2sar!4v1719032847926!5m2!1ses-419!2sar"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <li>
        Luque, Barrio Bella Vista<br />Avda. Fulgencio Yegros esq.
        Yrendague<br />Horario de Atención: 10 a.m. a 00:00 h
      </li>
      <iframe
        className="w-auto h-auto rounded-3xl border-solid border-[7px] mt-[15px] mb-[15px] mx-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10404.250317718717!2d-57.491455344205015!3d-25.260157766340264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da594ea9255fb%3A0x4c6de4b824100d20!2sMr.%20John&#39;s%20Luque%20Bella%20vista!5e0!3m2!1ses-419!2sar!4v1719033028019!5m2!1ses-419!2sar"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <li>
        Luque, Barrio Ycuadure<br />Avda. Las Residentas y San Juan<br />Horario
        de Atención: 18:00 a 00:00 h
      </li>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2534.7624391117392!2d-57.47520164366652!3d-25.278114691566827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945dafe8f3ea96c3%3A0x4eae1b5ddd0969e0!2sMr.%20John&#39;s!5e0!3m2!1ses-419!2sar!4v1719033129579!5m2!1ses-419!2sar"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </ul>
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=595982101590"
        className="button"
        target="_blank"
        >¡Pedí tu pizza favorita!</a
      >
    </div>
  </div>
  );
};
