import {useEffect } from "react";
import { useState} from "react";


export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState({});

  useEffect(() => {
    async function fetchCon() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (selectedContactId) {
      fetchCon();
    }
  }, [selectedContactId]);

  return 
}