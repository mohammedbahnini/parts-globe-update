import React from "react";
import BreadCrumb from "../components/elements/BreadCrumb";
import RequestPart from "../components/RequestPart";
import cryptoRandomString from "crypto-random-string";
import { Form, Input, Select, Checkbox, Button } from "antd";
import { connect } from "react-redux";

class RequestVin extends React.Component {
  constructor(props) {
    super(props);
    const firstID = this.getRandomID();
    this.state = {
      parts: [
        {
          id: firstID,
          item: <RequestPart deletePart={this.deletePart} index={firstID} />,
        },
      ],
    };
  }

  getRandomID() {
    return cryptoRandomString({ length: 15 });
  }

  deletePart = async (e, id) => {
    e.preventDefault();
    console.log(id);

    await this.setState(function (oldState) {
      return {
        parts: oldState.parts.filter((item) => {
          return item.id !== id;
        }),
      };
    });
  };

  async addItem(e) {
    e.preventDefault();
    const randomID = this.getRandomID();

    await this.setState(function (oldState) {
      return {
        parts: [
          ...oldState.parts,
          {
            id: randomID,
            item: <RequestPart deletePart={this.deletePart} index={randomID} />,
          },
        ],
      };
    });
  }

  render() {
    const { parts } = this.state;
    const breadcrump = [
      {
        text: "Accueil",
        url: "/",
      },
      {
        text: "Demande VIN",
        url: "request_vin",
      },
    ];

    return (
      <React.Fragment>
        <BreadCrumb breacrumb={breadcrump} />
        <div className="ps-section--custom">
          <div className="container">
            <h1>Demande du code VIN</h1>
            <form className="form-request-vin">
              <div className="form-request-vin-section">
                <h4 className="form-request-vin-heading">
                  Comment vous contactez
                </h4>

                <div className="form-request-vin-row">
                  <label className="label">Prenom</label>
                  <Input
                    className="form-control input"
                    type="text"
                    placeholder=""
                    name="firstName"
                  ></Input>
                </div>

                <div className="form-request-vin-row">
                  <label className="label">Nom</label>
                  <Input
                    className="form-control  input"
                    type="text"
                    placeholder=""
                    name="firstName"
                  ></Input>
                </div>

                <div className="form-request-vin-row">
                  <label className="label">Patronyme</label>
                  <Input
                    className="form-control  input"
                    type="text"
                    placeholder=""
                    name="firstName"
                  ></Input>
                </div>

                <div className="form-request-vin-row">
                  <label className="label">Email</label>
                  <Input
                    className="form-control  input"
                    type="text"
                    placeholder=""
                    name="firstName"
                  ></Input>
                </div>

                <div className="form-request-vin-row">
                  <label className="label">Téléphone</label>
                  <Input
                    className="form-control input"
                    type="text"
                    placeholder=""
                    name="firstName"
                  ></Input>
                </div>
              </div>

              <div className="form-request-vin-section">
                <h4 className="form-request-vin-heading">
                  Informations voiture
                </h4>

                <div className="form-request-vin-row">
                  <label className="label">VIN</label>
                  <Input
                    className="form-control input"
                    type="text"
                    placeholder=""
                    name="firstName"
                  ></Input>
                </div>

                <div className="form-request-vin-row">
                  <label className="label">Timbre</label>
                  <Input
                    className="form-control input"
                    type="text"
                    placeholder=""
                    name="firstName"
                  ></Input>
                </div>

                <div className="form-request-vin-row">
                  <label className="label">Modèle</label>
                  <Input
                    className="form-control  input"
                    type="text"
                    placeholder=""
                    name="firstName"
                  ></Input>
                </div>

                <div className="form-request-vin-row">
                  <label className="label">Date du sortie</label>
                  <Input
                    className="form-control input"
                    type="text"
                    placeholder=""
                    name="firstName"
                  ></Input>
                </div>

                <div className="form-request-vin-row">
                  <label className="label">Moteur</label>
                  <Input
                    className="form-control input"
                    type="text"
                    placeholder=""
                    name="firstName"
                  ></Input>
                </div>
              </div>

              <div className="form-request-vin-section">
                <h4 className="form-request-vin-heading">
                  Les pièces dont vous avez besoin et le nombre de pièces dont
                  vous avez besoin
                </h4>

                {parts.map((part, index) => {
                  return (
                    <React.Fragment key={index}>{part.item}</React.Fragment>
                  );
                })}

                <div className="form-request-vin-actions">
                  <div className="check-terms">
                    <Checkbox>
                      Accepter de traiter les données personnelles et accepter
                      les termes de l’accord
                    </Checkbox>
                  </div>

                  <div className="btn-group">
                    <button className="ps-btn" onClick={(e) => this.addItem(e)}>
                      Ajouter une pièce
                    </button>
                    <button className="ps-btn">Valider la demande</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RequestVin;
