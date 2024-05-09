import React from "react";
import Table from "react-bootstrap/Table";
import Comment from "./Comment";

function ExhibitionDetail(props) {
  const { number } = props;
  // console.log(props.number, "숫자");
  const { Info } = props;
  return (
    <div
      style={{
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        display: "flex",
        padding: "150px",
        alignItems: "center",
      }}
    >
      <h1>Information</h1>
      <br />
      <br />
      <Table
        striped
        // bordered
        hover
        style={{
          minWidth: "100px",
          maxWidth: "1400px",
        }}
      >
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Poster</td>
            <td>
              <img
                src={Info.DP_MAIN_IMG}
                alt="no poster"
                style={{ width: "400px", height: "480px" }}
              />
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>
              <h2>{Info.DP_NAME}</h2>
            </td>
          </tr>
          <tr>
            <td>Place</td>
            <td>{Info.DP_PLACE}</td>
          </tr>
          <tr>
            <td>Period </td>
            <td>
              {" "}
              {Info.DP_START} ~ {Info.DP_END}
            </td>
          </tr>
          <tr>
            <td>Artist </td>
            <td>
              <h5>{Info.DP_ARTIST}</h5>
            </td>
          </tr>
          <tr>
            <td>Link </td>
            <td>
              <a href={Info.DP_LNK}>{Info.DP_LNK}</a>
            </td>
          </tr>
          <tr>
            <td>Viewpoint </td>
            <td dangerouslySetInnerHTML={{ __html: Info.DP_INFO }}></td>
          </tr>
        </tbody>
      </Table>
      <Comment num={number}></Comment>
    </div>
  );
}

export default ExhibitionDetail;
