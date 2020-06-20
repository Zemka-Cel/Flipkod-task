
import Axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import tasks from "../api";
import { useHistory } from "react-router-dom";



export default function DetailScreen({match }) {

 
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]); //defining data array for storing retrieved JSON object from server

  const fetch = useCallback(async () => {
    try {
      const result = await tasks.get(`/tasks/${match.params.id}`); 
      //retrieveing particular task from JSON server using passed ID from HomeScreen
      if (result.status === 200) {
        setData(result.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
     
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const history = useHistory();

  function handleClick() {
    history.push(`/edit/${data.id}`); //passing task ID to edit screen 
  }


        return (
          <div className="bg-light p-3">
            {/* displaying details of passed record */}
            <h3>Details about task {data.id}</h3>
            <div>
              <li><strong>Task Name:</strong> {data.name}</li>
              <li><strong>Description:</strong> {data.description}</li>
              <li><strong>Creation:</strong> {data.creation}</li>
             </div>
          
             <div className="d-flex flex-row-reverse">
           <button  onClick={handleClick} className="btn btn-warning ">Edit</button>
</div>
          </div>
        );
    


}