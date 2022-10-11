import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IconContext } from "react-icons";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import styles from "./module-css/Home.module.css";
export const Home = () => {
  const localstoragedata = JSON.parse(localStorage.getItem("blogtoken"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!localstoragedata) {
      navigate("/login");
    }
  }, []);
  const userdetailhere = useSelector((store) => store.userdetail);
  // console.log(userdetailhere);
  const [blog, setblog] = useState([]);

  // fetch in useeffect to get all the user posts here
  const userlogined = JSON.parse(localStorage.getItem("bloguser"));
  const fetchblog = () => {
    axios
      .get("http://localhost:8080/user/posts")
      .then((res) => {
        //  console.log(res.data)
        setblog(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
        // alert("DATA NOT FOUND")
      });
  };

  useEffect(() => {
    fetchblog();
  }, []);
  /////

  const handlelike = (post) => {
    post.likes.push(userlogined.username);
    //  console.log(post.likes);

    const payload = { ...post };
    console.log(payload);
    axios
      .patch(`http://localhost:8080/user/posts/${post._id}`, payload)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    fetchblog();
  };

  return (
    <div className={styles.blogview}>
      {blog.map((item) => (
        <div key={item._id}>
          <p
            className={styles.username}
            onClick={() => {
              localStorage.setItem("differentone", item.username);
              navigate("/duser");
            }}
          >
            {item.username}
          </p>
          <img src={item.url} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span style={{ left: -10 }}>
            <IconContext.Provider value={{ color: "blue", size: 40 }}>
              {item.likes.includes(userlogined.username) ? (
                <AiFillHeart
                  onClick={() => {
                    console.log("clicked");
                  }}
                />
              ) : (
                <AiOutlineHeart onClick={() => handlelike(item)} />
              )}
            </IconContext.Provider>
            <strong>{item.likes.length}</strong>
          </span>
        </div>
      ))}
    </div>
  );
};
