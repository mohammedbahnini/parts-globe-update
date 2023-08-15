import React from "react";
import { Form, Input, Select } from "antd";
import { connect } from "react-redux";

const RequestPart = (props) => {
  const { deletePart, index } = props;
  return (
    <div className="request-part">
      <div className="form-request-vin-row">
        <label className="label">Nom</label>
        <Input
          className="form-control input"
          type="text"
          placeholder=""
          name="firstName"
        ></Input>
      </div>

      <div className="form-request-vin-row">
        <label className="label">Nombre pièce</label>
        <Input
          className="form-control input"
          type="text"
          placeholder=""
          name="firstName"
        ></Input>
      </div>

      <div className="form-request-vin-row">
        <label className="label">Préférence</label>
        <Input.Group compact className=" input">
          <Select defaultValue="Home" style={{ width: "100%" }}>
            <Select.Option value="home">Original</Select.Option>
            <Select.Option value="home2">Qualité des prix</Select.Option>
            <Select.Option value="home3">Prix minimum</Select.Option>
          </Select>
        </Input.Group>
      </div>

      <div className="form-request-vin-row">
        <label className="label">Note</label>
        <Input
          className="form-control input"
          type="text"
          placeholder=""
          name="firstName"
        ></Input>
      </div>

      <div className="form-request-vin-row delete-part">
        <button
          className="ps-btn ps-btn-danger"
          onClick={(e) => deletePart(e, index)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default RequestPart;
