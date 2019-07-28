import React from 'react';

import { TextField, FormControlLabel, Switch, NativeSelect, FormControl, InputLabel, FormHelperText } from '@material-ui/core';

const InputUpdate = (props) => {
    const {item, onChange, onChecked, error, formData, options} = props
    const name = item.label.toLowerCase().replace(/\s/g, '_');
    let fieldError = error[name];
    console.log(name, fieldError)
    let checked
    if (formData) {
        checked = formData[name]
    }
    
    let dropdownOptions
    const today = new Date();
    const defaultDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    if (options) {
        dropdownOptions = options.map((item, index) => {
            return (
                <option value={item.title} key={index}>{item.title}</option>
            )
        })
    }
    if (item.read_only === true) {
        return null
    } else if (item.type==='field') {
        return (
            <div className="mx2">
                <FormControl className="form-input" error={fieldError?true:false}>
                    <InputLabel htmlFor='garage'>{item.label}</InputLabel>
                    <NativeSelect 
                        name={name}
                        onChange={onChange}
                        inputProps={{id: 'garage'}}
                    >
                        <option value='' />
                        {dropdownOptions}
                    </NativeSelect>
                    <FormHelperText>{fieldError}</FormHelperText>
                </FormControl>
            </div>
        )
    } else if (item.type==='date') {
        return (
            <div className="mx2">
                <TextField 
                    id="date"
                    label={item.label}
                    type="date"
                    defaultValue={defaultDate}
                    className="form-input"
                    name={name}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onChange}
                />
            </div>
        )
    } else if (item.type==='boolean') {
        return (
            <div className="mx2">
                <FormControlLabel 
                    value="start"
                    label={item.label}
                    checked={checked}
                    name={name}
                    control={
                        <Switch name={name} color="primary" value="true" onChange={onChecked} />
                    }
                    labelPlacement="start"
                />
            </div>
        )
    } else {
        return (
            <div className="mx2">
                <TextField 
                    className="form-input"
                    name={name}
                    error={fieldError?true:false}
                    label={item.label}
                    type={item.type==='integer'?'number':'text'}
                    required={item.required}
                    helperText={fieldError}
                    onChange={onChange}
                />
            </div>
        )
    }
}

export default InputUpdate;