import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./UserForm.module.css";

const UserForm: React.FC = () => {
  let params = useParams();
  const [userName, setUserName] = useState<string>();
  const [userAge, setUserAge] = useState<number>();

  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
  }, []);
  const getUser = (userId: string) => {
    console.log(params.id);
    const url =
      "https://63a06c35e3113e5a5c3d3680.mockapi.io/champions/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setUserName(data.name);
        setUserAge(data.age);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (params.id) {
      console.log("handleSubmit", "Update");
      updateUser(userName, userAge);
    } else {
      console.log("handleSubmit", "Create");
      createUser(userName, userAge);
    }
  };
  const createUser = (name: string | undefined, age: number | undefined) => {
    const url = "https://63a06c35e3113e5a5c3d3680.mockapi.io/champions";
    const data = {
      name: name,
      age: age,
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
  const updateUser = (name: string | undefined, age: number | undefined) => {
    const url =
      "https://63a06c35e3113e5a5c3d3680.mockapi.io/champions/" + params.id;
    const data = {
      name: name,
      age: age,
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
  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };
  const handleChangeUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserAge(parseInt(e.target.value));
  };
  return (
    <div className={styles.container}>
      <form className="row g-3 w-50 m-auto my-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label text-white">Name</label>
          <input
            className="form-control"
            type="text"
            defaultValue={userName}
            onChange={handleChangeUserName}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label text-white">Age</label>
          <input
            className="form-control"
            type="number"
            defaultValue={userAge}
            onChange={handleChangeUserAge}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
