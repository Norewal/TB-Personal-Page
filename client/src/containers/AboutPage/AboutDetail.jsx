import React from "react";

function Detail(props) {
    return (
        <>
            <p className="info">{props.detailInfo1}</p>
            <p className="info">{props.detailInfo2}</p>
            <p className="info">{props.detailInfo3}</p>
            <p className="info">{props.detailInfo4}</p>
            <p className="info">{props.detailInfo5}</p>
        </>
    );
}

export default Detail;