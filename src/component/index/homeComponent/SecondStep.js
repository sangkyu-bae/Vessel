import React, {useState} from 'react';
import FormControlComponent from "../../util/component/FormControlComponent";
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";

function SecondStep(props) {
    const [modelType, setModelType] = useState("");

    const changeModel = (e) => {
        setModelType(e.target.value);
    }

    return (
        <div className="flex_wrap second_mt">
            <FormControlComponent changeModel={changeModel}></FormControlComponent>
            <div className="flex_compo">
                {
                    modelType &&
                    <>
                        <div className="model_head">{modelType}</div>
                        <div>
                            test1Model...test1Model...test1Model...test1Model...test1Model...test1Model...<br/>
                            test1Model...test1Model...test1Model...test1Model...test1Model...test1Model...<br/>
                            test1Model...test1Model...test1Model...test1Model...test1Model...test1Model...<br/>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default SecondStep;
