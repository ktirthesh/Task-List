import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

import { SectionsView } from "../SectionsView/SectionsView";
import "./MainPage.css";

function MainPage() {
  const [Data, setData] = useState("");
  const [list1, setlist] = useState([]);

  const changeList = (id, Sectionkey) => {
    const newState = list1.map((obj) =>
      obj.id === id ? { ...obj, section: Sectionkey } : obj
    );
    setlist(newState);
  };

  const setInputvalue = (e) => {
    if (e.currentTarget.value !== "") {
      setData(e.currentTarget.value);
    }
  };
  const setBacklog = (data) => {
    if (Data !== "") {
      setlist([...list1, { id: uuidv4(), name: Data, section: 1 }]);
      setData("");
    }
  };
  const deleteRecord = (id) => {
    let dataRemoved = list1.filter((el) => {
      return el.id !== id;
    });
    setlist(dataRemoved);
  };
  return (
    <div className="container-fluid">
      <div className="flex-center-center">
        <div>
          <input
            className="InpuClass"
            value={Data}
            onChange={(e) => setInputvalue(e)}
          ></input>
          <button
            className="btn btn-success"
            onClick={() => {
              setBacklog();
            }}
          >
            create task
          </button>
        </div>
      </div>

      <br />
      <div style={{ display: "grid" }}>
        <Row>
          <Col sm="3">
            <SectionsView
              head="Backlog"
              list1={list1}
              Sectionkey={1}
              changeSection={(id, Sectionkey) => changeList(id, Sectionkey)}
              deleteRecord={(id) => deleteRecord(id)}
            />
          </Col>
          <Col sm="3">
            <SectionsView
              head="ToDo"
              list1={list1}
              Sectionkey={2}
              changeSection={(id, Sectionkey) => changeList(id, Sectionkey)}
              deleteRecord={(id) => deleteRecord(id)}
            />
          </Col>
          <Col sm="3">
            <SectionsView
              head="Ongoing"
              list1={list1}
              Sectionkey={3}
              changeSection={(id, Sectionkey) => changeList(id, Sectionkey)}
              deleteRecord={(id) => deleteRecord(id)}
            />
          </Col>
          <Col sm="3">
            <SectionsView
              head="Done"
              list1={list1}
              Sectionkey={4}
              changeSection={(id, Sectionkey) => changeList(id, Sectionkey)}
              deleteRecord={(id) => deleteRecord(id)}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MainPage;
