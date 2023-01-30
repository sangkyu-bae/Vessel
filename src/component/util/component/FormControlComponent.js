import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import Button from "@mui/material/Button";

function FormControlComponent({changeModel,selectModel}) {
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
            <Button
                variant="outlined"
                sx={{mt:3}}
                onClick={selectModel}
            >Select</Button>
        </FormControl>
    );
}

export default FormControlComponent;