import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IXe {
  xe: string;
  loaixe: string;
  giaxe: string;
  tinhtrangxe: string;
  id: string | number;
}

const DetailXe: React.FC = () => {
  let params = useParams();
  const [xe, setXe] = useState<IXe | undefined>({
    xe: "Air Black",
    loaixe: "Xe tay ga",
    giaxe: "120.000/ngày",
    tinhtrangxe: "Mới",
    id: 4,
  });
  useEffect(() => {
    getXe();
  }, []);
  const getXe = () => {
    console.log(params.id);
    const url =
      "https://63a06c35e3113e5a5c3d3680.mockapi.io/tuong/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setXe(data);
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
          <th scope="col">Xe</th>
          <th scope="col">Loại Xe</th>
          <th scope="col">Giá Xe</th>
          <th scope="col">Tình Trạng Xe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{xe?.id}</th>
          <td>{xe?.xe}</td>
          <td>{xe?.loaixe}</td>
          <td>{xe?.giaxe}</td>
          <td>{xe?.tinhtrangxe}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailXe;
