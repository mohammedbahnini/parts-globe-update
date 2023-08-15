import React from "react";
import BreadCrumb from "../../elements/BreadCrumb";
import { connect } from "react-redux";
import Paragraph from "./Paragraph";
import List from "./List";

const FranchiseComponent = ({ data }) => {
  const { breadcrumb, intro, contact } = data;
  const first_p = data.paragraphs[0];
  const second_p = data.paragraphs[1];
  const third_p = data.paragraphs[2];

  return (
    <React.Fragment>
      <BreadCrumb breacrumb={breadcrumb} />
      <div className="ps-section--custom">
        <div className="container">
          <div className="ps-section__header">
            <h1>{data.page_title}</h1>
          </div>
          <div className="ps-section__content">
            <div className="intro-img">
              <img src={data.intro_img} />
            </div>
            <h3>{intro.title}</h3>
            <p className="p-intro">
              <img src={intro.img} className="img-within-article" />
              {intro.text}
            </p>

            <h3>{first_p.title}</h3>
            <Paragraph text={first_p.text}></Paragraph>

            <h3>{second_p.title}</h3>
            <Paragraph text={second_p.text}></Paragraph>
            <List list={second_p.list}></List>
            <Paragraph text={second_p.last_text}></Paragraph>

            <h3>{third_p.title}</h3>
            <Paragraph text={third_p.text}></Paragraph>
            <List list={third_p.list}></List>
            <Paragraph text={third_p.last_text}></Paragraph>

            <div className="list-images">
              {data.list_images.map((item) => {
                return (
                  <React.Fragment key={item}>
                    <img src={item} />
                  </React.Fragment>
                );
              })}
            </div>

            <div>
              <h6>{contact.title}</h6>
              <p>
                {contact.tele_label}{" "}
                <a href={`tel:${contact.tele_number}`}>{contact.tele_number}</a>
              </p>
              <p>
                {contact.more_info_label}
                <a href={contact.more_info_link}>{contact.more_info_link}</a>
              </p>
              <p>
                {contact.email_label}
                <a href={`mailTo:${contact.email_text}`}>
                  {contact.email_text}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.lang.langData.franshice_page,
  };
};

export default connect(mapStateToProps)(FranchiseComponent);
