import React from "react";
import BreadCrumb from "../../elements/BreadCrumb";
import Paragraph from "./Paragraph";
import List from "./List";
import { connect } from "react-redux";

const AboutUs = ({ data }) => {
  const { breadcrumb } = data;
  const f_paragraph = data.paragraphs[0];
  const s_paragraph = data.paragraphs[1];
  const t_paragraph = data.paragraphs[2];

  return (
    <React.Fragment>
      <BreadCrumb breacrumb={breadcrumb} />
      <div className="ps-section--custom">
        <div className="container">
          <div className="ps-section__header">
            <h1>{data.page_title}</h1>
          </div>
          <div className="ps-section__content">
            <h3>{f_paragraph.title}</h3>

            <div className="about-us-video">
              <iframe
                src="https://www.youtube.com/embed/M-J_uQkLPOU"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <Paragraph text={f_paragraph.text}></Paragraph>
            <List list={f_paragraph.list}></List>

            <h3>{s_paragraph.title}</h3>
            <Paragraph text={s_paragraph.text}></Paragraph>
            <List list={s_paragraph.list}></List>
            <Paragraph text={s_paragraph.last_text}></Paragraph>

            <h3>{t_paragraph.title}</h3>
            <Paragraph text={t_paragraph.text}></Paragraph>
            <List list={t_paragraph.list}></List>
            <Paragraph text={t_paragraph.last_text}></Paragraph>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.lang.langData.about_page,
  };
};

export default connect(mapStateToProps)(AboutUs);
