import React, { useState } from "react";

type Props = {};

function RenderTable(props: Props) {
    const [listUser, setListUser] = useState([
        {
          name: "user 1",
          age: 18,
        },
        {
          name: "user 2",
          age: 19,
        },
        {
          name: "user 3",
          age: 20,
        },
      ])
  /* const user = {
    name: "user object",
    age: 18,
  }; */
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <th scope="row">1</th>
          <td>{user.name}</td>
          <td>{user.age}</td>
        </tr> */}
        {listUser.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index +1}</th>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RenderTable;
