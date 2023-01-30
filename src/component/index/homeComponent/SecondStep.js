import React, {useState} from 'react';
import FormControlComponent from "../../util/component/FormControlComponent";
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";
import LinearDeterminate from "../../util/component/LinearDeterminate";

function SecondStep(props) {
    const [modelType, setModelType] = useState("");
    const [isSelect,setIsSelect]=useState(false);
    const changeModel = (e) => {
        setModelType(e.target.value);
    }
    const selectModel=()=>{
        if(modelType&&modelType!=""){
            setIsSelect(true);
        }else{
            alert("모델을 선택하세요.");
        }
    }

    return (
        <div className="flex_wrap second_mt">
            <FormControlComponent changeModel={changeModel} selectModel={selectModel}></FormControlComponent>
            <div className="flex_compo">
                {
                    modelType &&
                    <>
                        <div className="model_head">{modelType}</div>
                        <div className="model_content">
                            test1Model...test1Model...test1Model...test1Model...test1Model...test1Model...<br/>
                            test1Model...test1Model...test1Model...test1Model...test1Model...test1Model...<br/>
                            test1Model...test1Model...test1Model...test1Model...test1Model...test1Model...<br/>
                        </div>
                    </>
                }
                {
                    isSelect&& <LinearDeterminate></LinearDeterminate>
                }
            </div>
        </div>
    );
}

export default SecondStep;
