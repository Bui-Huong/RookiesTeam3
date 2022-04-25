import {Row, Col} from "antd";

export default function GridComponent({leftComp, rightComp}) {
    return (
        <div>
            <Row gutter={10}>
                <Col xs={24} sm={24} md={6} lg={5} xl={5} xxl={4}>
                    <img
                        alt="logo"
                        style={{float: "left", display: "flex"}}
                        disabled
                        width={220}
                        src="https://static.topcv.vn/company_logos/fpt-greenwich-59240b93d7508.jpg"
                    />
                    <h2
                        style={{
                            float: "left",
                            color: "#f05123",
                            display: "inline-flex",
                            padding: "5px",
                        }}
                    >
                        Online Asset Management
                    </h2>
                    {leftComp}
                </Col>
                <Col
                    style={{ padding: "30px" , paddingTop: "5px" }}
                    xs={24}
                    sm={24}
                    md={18}
                    lg={19}
                    xl={19}
                    xxl={20}
                >
                    {rightComp}
                </Col>
            </Row>
        </div>
    );
}
