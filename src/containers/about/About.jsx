import React from "react";
import { Container, Row, Col } from "reactstrap";
function About(props) {
  return (
    <Container style={{ margin: "2.8rem auto 2rem auto" }}>
      <Row>
        <h1 className="mb-2 d-inline-block">
          DANH SÁCH THÀNH VIÊN NHÓM - 2111COMP103101
        </h1>
      </Row>
      <Row>
        <Col md="7">
          <h2 className="mb-2 d-block">1/ 4501104041 - Huỳnh Anh Dự</h2>
          <h2 className="mb-2 d-block">2/ 4501104061 - Nguyễn Văn Giàu</h2>
          <h2 className="mb-2 d-block">3/ 4501104227 - Lê Thanh Thoại</h2>
          <h2 className="mb-2 d-block">4/ 4501104011 - Trương Đình Anh</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
