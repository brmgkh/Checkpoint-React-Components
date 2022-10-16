import React from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import brmg from "../../../src/Images/Ibrahim Maghraoui.jpg";
import JfBzs from "../../../src/Images/Jeff-bezos-amazon.jpg";
import mrkzbrg from "../../../src/Images/zuckerberg.jpg";
import lrypg from "../../../src/Images/Larry Page.jpg";

const Address = () => {
  return (
    <>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={brmg}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Ibrahim Maghraoui</p>
                  <p className="text-muted mb-0">ibrahim.maghraoui@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Software engineer</p>
              <p className="text-muted mb-0">IT department</p>
            </td>
            <td>
              <MDBBadge color="success" pill>
                Active
              </MDBBadge>
            </td>
            <td>24 freedom street, Manouba Tunisia</td>
            <td>
              <MDBBtn color="link" rounded size="sm">
                Edit
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={JfBzs}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Jeff Bezos</p>
                  <p className="text-muted mb-0">Jeff.Bezos@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">CEO</p>
              <p className="text-muted mb-0">IT</p>
            </td>
            <td>
              <MDBBadge color="primary" pill>
                Onboarding
              </MDBBadge>
            </td>
            <td>The Spheres Seattle WA 98121, États-Unis</td>
            <td>
              <MDBBtn color="link" rounded size="sm">
                Edit
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={mrkzbrg}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Mark Zuckerberg</p>
                  <p className="text-muted mb-0">Mark.Zuckerberg@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">CEO</p>
              <p className="text-muted mb-0">Management</p>
            </td>
            <td>
              <MDBBadge color="warning" pill>
                Awaiting
              </MDBBadge>
            </td>
            <td>Menlo Park, Californie États-Unis</td>
            <td>
              <MDBBtn color="link" rounded size="sm">
                Edit
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={lrypg}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Larry Page</p>
                  <p className="text-muted mb-0">Larry.Page@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">CEO</p>
              <p className="text-muted mb-0">engineering</p>
            </td>
            <td>
              <MDBBadge color="warning" pill>
                Awaiting
              </MDBBadge>
            </td>
            <td>Mountain View, Californie, États-Unis</td>
            <td>
              <MDBBtn color="link" rounded size="sm">
                Edit
              </MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default Address;
