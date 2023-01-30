import React, {useEffect, useState} from 'react';
import HorizontalLinearStepper from "../util/component/HorizontalLinearStepper";
import './Home.css';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import KaKaoMap from "../util/component/kakaoMap/KaKaoMap";
import FormControlComponent from "../util/component/FormControlComponent";
import SecondStep from "./homeComponent/SecondStep";

function Home(props) {
    const [isRender,setIsRender]=useState({
        isShowMap:false,
        isSelectModel:false
    })
    const [isShowMap, setIsShowMap] = useState(false);
    const changeShow=(step)=>{
        if(step==0){
            setIsRender({
                isSelectModel: false,
                isShowMap: false
            })
        }
        if(step==1){
            setIsRender({
                isSelectModel: true,
                isShowMap: false
            })
        }
        if(step==2){
            setIsRender({
                isSelectModel: false,
                isShowMap: true
            })
        }
        if(step==3){
            setIsRender({
                isSelectModel: false,
                isShowMap: true
            })
        }
    }
    return (
        <div className="home_wrap">
            <div className="home_container">
                <div className="home_header">Vessel Detection</div>
                <HorizontalLinearStepper changeShow={changeShow}></HorizontalLinearStepper>
                {/*<div>*/}
                {/*    <FormControlComponent></FormControlComponent>*/}
                {/*</div>*/}
                {
                    isRender.isSelectModel&&<SecondStep></SecondStep>
                }
                {
                    isRender.isShowMap && <KaKaoMap></KaKaoMap>
                }
            </div>
        </div>
    );
}

export default Home;
