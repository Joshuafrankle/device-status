import React from "react";

export default function Cards({ data }) {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="label-section fw-bold">
            <p className="card-text"> Hostname:</p>
            <p className="card-text"> Status:</p>
            <p className="card-text"> Address:</p>
          </div>
          <div className="details-section">
            <p className="card-text text-wrap">{data.host}</p>
            <p className="card-text text-wrap text-uppercase fw-bold">
              {data.status}
            </p>
            <p className="card-text text-wrap">{data["ip address"]}</p>
          </div>
        </div>
      </div>
    </>
  );
}
