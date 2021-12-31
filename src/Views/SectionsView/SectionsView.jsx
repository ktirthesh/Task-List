import React from "react";
import arrowright from "../../Assets/Img/arrowright.svg";
import arrowLeft from "../../Assets/Img/arrowleft.svg";
import arrowleftGrey from "../../Assets/Img/arrowleftGrey.svg";
import arrowrightGrey from "../../Assets/Img/arrowrightGrey.svg";
import trash from "../../Assets/Img/trash.svg";
import { Card, CardBody } from "reactstrap";
import "./SectionsView.css";

export function SectionsView(props) {
  const CallBack = (id, Sectionkey) => {
    props.changeSection(id, Sectionkey - 1);
  };
  const CallNext = (id, Sectionkey) => {
    props.changeSection(id, Sectionkey + 1);
  };
  const deleteRecord = (id) => {
    props.deleteRecord(id);
  };
  return (
    <div>
      <Card>
        <CardBody>
          <h1>{props.head}</h1>
          {props.list1.map((item, index) => (
            <React.Fragment key={index}>
              {item.section === props.Sectionkey ? (
                <div className="ListRow flex-center-spacebetween">
                  <div>
                    <span className="ItemName">{item.name}</span>
                  </div>
                  <div className="flex-center-spaceevenly">
                    <span
                      className="IconClass"
                      onClick={() =>
                        props.Sectionkey === 1
                          ? null
                          : CallBack(item.id, props.Sectionkey)
                      }
                    >
                      <img
                        src={props.Sectionkey === 1 ? arrowleftGrey : arrowLeft}
                        alt="arrow left"
                      />
                    </span>
                    <span
                      className="IconClass"
                      onClick={() =>
                        props.Sectionkey === 4
                          ? null
                          : CallNext(item.id, props.Sectionkey)
                      }
                    >
                      <img
                        src={
                          props.Sectionkey === 4 ? arrowrightGrey : arrowright
                        }
                        alt="arrow right"
                      />
                    </span>
                    <span
                      className="IconClass"
                      onClick={() => deleteRecord(item.id)}
                    >
                      <img src={trash} alt="arrow right" />
                    </span>
                  </div>
                </div>
              ) : null}
            </React.Fragment>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
