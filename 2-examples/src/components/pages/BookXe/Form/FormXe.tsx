import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./FormXe.module.css";

const FormXe: React.FC = () => {
  let params = useParams();
  const [xe, setXe] = useState<string>();
  const [loaiXe, setLoaiXe] = useState<string>();
  const [giaXe, setGiaXe] = useState<string>();
  const [tinhTrangXe, setTinhTrangXe] = useState<string>();

  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
  }, []);
  const getUser = (userId: string) => {
    console.log(params.id);
    const url = "https://63a06c35e3113e5a5c3d3680.mockapi.io/tuong/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setXe(data.xe);
        setLoaiXe(data.loaixe);
        setGiaXe(data.giaxe);
        setTinhTrangXe(data.tinhtrangxe);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (params.id) {
      console.log("handleSubmit", "Update");
      updateUser(xe, loaiXe, giaXe, tinhTrangXe);
    } else {
      console.log("handleSubmit", "Create");
      createUser(xe, loaiXe, giaXe, tinhTrangXe);
    }
  };
  const createUser = (
    xe: string | undefined,
    loaiXe: string | undefined,
    giaXe: string | undefined,
    tinhTrangXe: string | undefined
  ) => {
    const url = "https://63a06c35e3113e5a5c3d3680.mockapi.io/tuong";
    const data = {
      xe: xe,
      loaixe: loaiXe,
      giaxe: giaXe,
      tinhtrangxe: tinhTrangXe,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const updateUser = (
    xe: string | undefined,
    loaiXe: string | undefined,
    giaXe: string | undefined,
    tinhTrangXe: string | undefined
  ) => {
    const url =
      "https://63a06c35e3113e5a5c3d3680.mockapi.io/tuong/" + params.id;
    const data = {
      xe: xe,
      loaixe: loaiXe,
      giaxe: giaXe,
      tinhtrangxe: tinhTrangXe,
    };
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChangeXe = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setXe(e.target.value);
  };
  const handleChangeLoaiXe = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setLoaiXe(e.target.value);
  };
  const handleChangeGiaXe = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setGiaXe(e.target.value);
  };
  const handleChangeTinhTrangXe = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTinhTrangXe(e.target.value);
  };
  return (
    <div className={styles.background_img}>
      <div className={styles.box}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className={styles.content}>
          <form className="row g-3 w-50 m-auto my-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label text-white">Xe</label>
              <input
                className="form-control"
                type="text"
                placeholder="Xe..."
                defaultValue={xe}
                onChange={handleChangeXe}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label text-white">Loại Xe</label>
              <input
                className="form-control"
                type="text"
                placeholder="Loại xe..."
                defaultValue={loaiXe}
                onChange={handleChangeLoaiXe}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label text-white">Giá Xe</label>
              <input
                className="form-control"
                type="text"
                placeholder="Giá xe..."
                defaultValue={giaXe}
                onChange={handleChangeGiaXe}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label text-white">Tình Trạng Xe</label>
              <input
                className="form-control"
                type="text"
                placeholder="Tình trạng xe..."
                defaultValue={tinhTrangXe}
                onChange={handleChangeTinhTrangXe}
              />
            </div>
            <button type="submit" className={styles.button}>
              Xác Nhận
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormXe;
