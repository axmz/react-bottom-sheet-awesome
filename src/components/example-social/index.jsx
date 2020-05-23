import React from 'react'
import { ReactComponent as Fb} from '../../assets/icons8-facebook-50.svg'
import { ReactComponent as Ig} from '../../assets/icons8-instagram-50.svg'
import { ReactComponent as Tw} from '../../assets/icons8-twitter-50.svg'
import { ReactComponent as Tk} from '../../assets/icons8-tiktok-50.svg'
import share from '../../assets/right2.png'

const Social = () => {

    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%"

    }
    return (
        <div style={style}>
            <img height={"55px"} width={"55px"}src={share} />
            <Fb height={"75px"} width={"75px"}/>
            <Ig height={"75px"} width={"75px"}/>
            <Tw height={"75px"} width={"75px"}/>
            <Tk height={"75px"} width={"75px"}/>
        </div>
    )
}

export default Social