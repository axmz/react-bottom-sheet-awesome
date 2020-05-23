import React from 'react'
import musk from './musk-album.jpg'

const Example = () => {

    const style0 = {
        height: "6rem",
        width: "6rem",
        borderRadius: "5px",
        // margin: "1rem",
        marginTop: "2rem",
    }

    const style1 = {
        background: `linear-gradient(90deg, #d53369 0%, #daae51 100%)`,
        boxShadow: '0px 0px 13px 4px rgba(198, 68, 78, 0.5)',
    }
    const style2 = {
        background: `linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)`,
        boxShadow: "0px 0px 13px 4px rgba(248, 255, 0, 0.3)"
    }
    const style3 = {
        background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
        boxShadow: "0px 0px 13px 4px rgba(252, 70, 107, 0.3)"
    }

    const containerStyle = {
        display: "flex",
        justifyContent: "space-evenly"
    }

    const imgStyle = {
        width: "88%",
        margin: "3rem auto",
        display: "block",
        borderRadius: "5px",
        boxShadow: "0 0 8px 4px rgba(0, 0, 0, 0.2)",
    }


    return (
        <>
            <div style={containerStyle}>
                <div style={{ ...style0, ...style1 }}></div>
                <div style={{ ...style0, ...style2 }}></div>
                <div style={{ ...style0, ...style3 }}></div>
            </div>
            <img style={imgStyle} src={musk} />
        </>
    )
}

export default Example