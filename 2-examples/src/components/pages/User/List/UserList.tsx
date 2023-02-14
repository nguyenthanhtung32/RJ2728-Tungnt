import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  name: string;
  age: number;
  id: string | number;
}

const UserList: React.FC = () => {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState<Array<IUser>>([]);

  useEffect(() => {
    getListUser();
  }, []);
  const getListUser = () => {
    const url = "https://63a06c35e3113e5a5c3d3680.mockapi.io/champions";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setListUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleDelete = (id: string | number) => {
    const url = "https://63a06c35e3113e5a5c3d3680.mockapi.io/champions/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getListUser();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleUpdate = (id: string | number) => {
    console.log("handleDetail", id);
    navigate(`form/${id}`);
  };
  const handleDetail = (id: string | number) => {
    console.log("Detail", id);
    navigate(`detail/${id}`);
  };
  return (
    <>
      <table className="table table-bordered border-danger w-75 m-auto table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td className="col-3 m-auto">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleDetail(item.id)}
                >
                  Detail
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdate(item.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
