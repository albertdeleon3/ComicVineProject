import { useState, useEffect } from "react";
import out from "./Services/service-comic";

const ListaComics = () => {
  const response = out.GetComics();

  const [comics, setComics] = useState([]);

  useEffect(() => {
    out.GetComics().then((response) => {
      setComics(response.data.results);
    });
  }, []);

  return (
    <div>
      {comics.map((c) => (
        <div key={c.id}>
          <img src={c.image.original_url} />
          <h2>{c.name ? c.name : c.volume.name} </h2>
          <h2>{c.issue_number}</h2>
          <p>{c.date_added}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaComics;
