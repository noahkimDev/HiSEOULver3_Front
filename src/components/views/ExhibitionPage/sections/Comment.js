/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import Pagination from "react-bootstrap/Pagination";

function Comment(props) {
  const [AllComments, setAllComments] = useState([]);
  const [Comment, setComment] = useState("");
  const [CheckLogin, setCheckLogin] = useState(false);
  const [InputName, setInputName] = useState("");
  const [InputPw, setInputPw] = useState("");
  const [PresentUserId, setPresentUserId] = useState("");
  //
  const [WholePageNum, setWholePageNum] = useState(1);
  const [ActivePage, setActivePage] = useState(1);

  useEffect(() => {
    // 모든 댓글 불러오기 요청
    axios
      .get("http://localhost:7000/api/users/tokenChk", {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setPresentUserId(res.data.info);
        setCheckLogin(res.data.login);
      });
    bringAllComments();
  }, []);

  async function deleteComment(commentId) {
    // console.log("ww", commentId);
    const params = { commentId: commentId };
    const callAxios = await axios.delete(
      "http://localhost:7000/api/contents/deleteComment",
      {
        params: params,
        withCredentials: true,
      }
    );
    if (callAxios.data.success) {
      await bringAllComments();
    }
  }

  function inputName(event) {
    setInputName(event.target.value);
  }

  function inputPw(event) {
    setInputPw(event.target.value);
  }

  function writeComment(event) {
    setComment(event.target.value);
  }

  async function submitComment() {
    if (CheckLogin) {
      const userName = window.localStorage.getItem("userName");
      const userId = window.localStorage.getItem("userId");

      const commentInfo = {
        comment: Comment,
        userId: userId,
        userName: userName,
        exhibitionNum: props.num,
      };
      // db에 댓글을 저장하는 axios 요청

      const callAxios = await axios.post(
        "http://localhost:7000/api/contents/saveComment",
        commentInfo,
        {
          withCredendials: true,
        }
      );
      if (callAxios.data.success) {
        setComment("");
        //! 이후에 다시 bringAllComments()를 해야 변경사항이 반영된다
        // 왜냐하면 저장된 Comments를 불러오는 함수이기 때문에
        await bringAllComments();
      }
    } else {
      if (!InputName || !InputPw) {
        //! name과 password 반드시 작성
        return alert("please write your name, password");
      } else if (InputName && InputPw) {
        const commentInfo = {
          comment: Comment,
          password: InputPw,
          userName: InputName,
          exhibitionNum: props.num,
        };

        const callAxios = await axios.post(
          "http://localhost:7000/api/contents/saveComment",
          commentInfo,
          {
            withCredentials: true,
          }
        );

        if (callAxios.data.success) {
          await bringAllComments();
          setComment("");

          setInputPw("");
          setInputName("");
        }
      }
    }
  }

  async function bringAllComments() {
    // 모든 댓글을 불러오는 함수
    const params = { params: props.num };

    const callAxios = await axios.get(
      `http://localhost:7000/api/contents/bringAllComments`,
      {
        params: params,
        withCredentials: true,
      }
    );
    function compareDates(a, b) {
      return b.id - a.id;
    }
    if (callAxios.data.success) {
      // console.log(callAxios.data.allComments, "정렬 전");
      let array = callAxios.data.allComments.sort(compareDates);
      console.log(array, "1");
      setAllComments(array);
      console.log(array, "2");
      if (array.length % 4 !== 0) {
        setWholePageNum(Math.floor(array.length / 4) + 1);
      } else {
        setWholePageNum(Math.floor(array.length / 4));
      }
    }
  }

  function makePage(num) {
    let active = ActivePage;
    let items = [];
    for (let number = 1; number <= num; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={function () {
            setActivePage(number);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }

    return (
      <>
        <Pagination>{items}</Pagination>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          display: "flex",
          // padding: "150px",
          alignItems: "center",
          maxWidth: "1400px",
          minWidth: "640px",
        }}
      >
        <InputGroup>
          <InputGroup.Text>Comment</InputGroup.Text>
          {!CheckLogin && (
            <div>
              <input
                type="text"
                placeholder="name"
                style={{
                  display: "block",
                  padding: "5px",
                  width: "130px",
                  margin: "10px",
                }}
                value={InputName}
                onChange={inputName}
              />
              <input
                type="password"
                placeholder="password"
                style={{
                  display: "block",
                  padding: "5px",
                  width: "130px",
                  margin: "10px",
                }}
                value={InputPw}
                onChange={inputPw}
              />
            </div>
          )}

          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder="write your comments"
            value={Comment}
            onChange={writeComment}
          />

          <Button
            variant="secondary"
            id="button-addon2"
            onClick={submitComment}
          >
            Submit
          </Button>
        </InputGroup>
        <br />
        <br />
        {AllComments &&
          AllComments.slice(ActivePage * 4 - 4, ActivePage * 4).map(
            (ele, index) => (
              <Alert key={index} variant="info" style={{ width: "100%" }}>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "100%" }}
                >
                  {ele.userName} {"-"} {ele.comment}
                  {ele.userId === PresentUserId ? (
                    <Button
                      variant="outline-dark"
                      onClick={() => {
                        //? 로그인 O && 작성자
                        // console.log(ele);
                        deleteComment(ele.id);
                        alert("deleted!");
                      }}
                    >
                      delete
                    </Button>
                  ) : (
                    <Button
                      variant="outline-dark"
                      onClick={() => {
                        // console.log(ele);
                        if (!CheckLogin && ele.password) {
                          //? 로그인x
                          const passwordInput = prompt("what is the password");
                          if (ele.password === passwordInput) {
                            deleteComment(ele.id);
                            alert("deleted!");
                          } else if (
                            passwordInput &&
                            ele.password !== passwordInput
                          ) {
                            alert("wrong password");
                          }
                        } else {
                          //? 로그인o && 작성자는 아닌
                          alert("you are not a writer");
                        }
                      }}
                    >
                      delete
                    </Button>
                  )}
                </div>
              </Alert>
            )
          )}
        {makePage(WholePageNum)}
      </div>
    </>
  );
}

export default Comment;
