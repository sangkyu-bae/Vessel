import React, {useEffect, useState} from 'react';
import HorizontalLinearStepper from "../util/component/HorizontalLinearStepper";
import './Home.css';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import KaKaoMap from "../util/component/kakaoMap/KaKaoMap";

function Home(props) {
    const [isShowMap, setIsShowMap] = useState(false);
    const changeShow=(step)=>{
        step==3? setIsShowMap(true):setIsShowMap(false);
    }
    return (
        <div className="home_wrap">
            <div className="home_container">
                <div className="home_header">Vessel Detection</div>
                <HorizontalLinearStepper changeShow={changeShow}></HorizontalLinearStepper>
                {
                    isShowMap && <KaKaoMap></KaKaoMap>
                }
            </div>
        </div>
    );
}

export default Home;
