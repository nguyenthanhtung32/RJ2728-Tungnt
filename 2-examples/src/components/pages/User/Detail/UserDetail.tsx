import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


interface IUser {
  name: string;
  age: number;
  id: string | number;
}

const UserDetail: React.FC = () => {
  let params = useParams();
  const [user, setUser] = useState<IUser | undefined>({
    name: "abc",
    age: 32,
    id: 4,
  });
  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    console.log(params.id);
    const url =
      "https://63a06c35e3113e5a5c3d3680.mockapi.io/champions/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <table className="table table-bordered border-danger w-75 m-auto table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{user?.id}</th>
          <td>{user?.name}</td>
          <td>{user?.age}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserDetail;
