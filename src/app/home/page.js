"use client";

import style from "@/styles/page.module.css";
import { useState } from "react";

const Home = () => {
  const [file, set_file] = useState(null);
  const [name, set_name] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // creating formData for image upload
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);

    // post the image
    const res = await fetch("/api/home", {
      method: "POST",
      body: formData,
    });

    console.log(res);

    alert("Form is submited.");

    //
  };

  return (
    <>
      <div className={style.container}>
        <h1>Home page</h1>
        <form onSubmit={handleSubmit}>
          {/*  */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                set_name(e.target.value);
              }}
            />
          </div>
          {/*  */}

          {/*  */}
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => {
                set_file(e.target.files[0]);
              }}
              required
            />
          </div>
          {/*  */}

          {/*  */}
          <div>
            <button type="submit">Submit</button>
          </div>
          {/*  */}
        </form>
      </div>
    </>
  );
};

export default Home;

// Given a directed graph with V nodes and E edges, if there is an edge from u to v, then we will say that u depends on v. Number of Dependencies (NoD) for a node x is the total count of nodes that x depends upon. Find out the sum of number of dependencies of every node.
