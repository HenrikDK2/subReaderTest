import "preact/debug";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Pages from "./Pages";
import { mapContext } from "./context/map.context";
import Global from "./Global";

const App = () => {
  const cinemasHook = useState(null);
  const cinemaQuery = JSON.stringify({
    query: `{
      cinemas {
        id
        name
        location {
          latitude
          longitude
        }
        logo
        address
        phone
      }
    }
    
    `,
    variables: {},
  });

  useEffect(() => {
    (async () => {
      const data = await fetch(process.env.API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: cinemaQuery,
      }).then((res) => res.json());
      cinemasHook[1]({ cinemas: data.data.cinemas, showInfo: false });
    })();
  }, []);

  return (
    <mapContext.Provider value={cinemasHook}>
      <Pages />
      <Global />
    </mapContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
