import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

function FormControlComponent({changeModel}) {
    return (
        <FormControl sx={{flex:0.2}}>
            <FormLabel id="demo-radio-buttons-group-label" sx={{fontWeight: 'bold',fontSize: 20 }}>Model</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel onClick={changeModel} value="test1Model" control={<Radio />} label="test1Model" />
                <FormControlLabel onClick={changeModel}  value="test2Model" control={<Radio />} label="test2Model" />
                <FormControlLabel onClick={changeModel}  value="test3Model" control={<Radio />} label="test3Model" />
            </RadioGroup>
        </FormControl>
    );
}

export default FormControlComponent;