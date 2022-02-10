import { useState, useEffect } from "react";
import axios from "../api/axios";

export default function useApplicationData() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users/1/units")
      .then((buildings) => {
        setState(...state, buildings.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return { state, setState };
}
