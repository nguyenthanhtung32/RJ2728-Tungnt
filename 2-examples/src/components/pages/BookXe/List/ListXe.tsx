import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IXe {
  xe: string;
  loaixe: string;
  giaxe: string;
  tinhtrangxe: string;
  id: string | number;
}

const ListXe: React.FC = () => {
  const navigate = useNavigate();
  const [listXe, setListXe] = useState<Array<IXe>>([]);

  useEffect(() => {
    getListXe();
  }, []);
  const getListXe = () => {
    const url = "https://63a06c35e3113e5a5c3d3680.mockapi.io/tuong";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setListXe(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleDelete = (id: string | number) => {
    const url = "https://63a06c35e3113e5a5c3d3680.mockapi.io/tuong/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getListXe();
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
            <th scope="col">Xe</th>
            <th scope="col">Loại Xe</th>
            <th scope="col">Giá Xe</th>
            <th scope="col">Tình Trạng Xe</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {listXe.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td className="col-2">{item.xe}</td>
              <td className="col-2">{item.loaixe}</td>
              <td className="col-2">{item.giaxe}</td>
              <td className="col-2">{item.tinhtrangxe}</td>
              <td className="col-3 m-auto">
                <button
                  className="btn btn-danger ms-4"
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

export default ListXe;
