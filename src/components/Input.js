import React from 'react';

import { TextField, FormControlLabel, Switch, NativeSelect, FormControl, InputLabel, FormHelperText } from '@material-ui/core';

const Input = (props) => {
    const {item, onChange, onChecked, error, formData} = props
    const name = item.label.toLowerCase().replace(/\s/g, '_')
    let checked = formData[name]
    let options = null
    const today = new Date();
    const defaultDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    console.log(defaultDate)
    if (item.choices) {
        options = item.choices.map((item, index) => {
            return (
                <option value={item} key={index}>{item}</option>
            )
        })
    }
    if (item.read_only === true) {
        return null
    } else if (item.type==='field') {
        return (
            <div className="mx2">
                <FormControl className="form-input">
                    <InputLabel htmlFor='garage-select'>{item.label}</InputLabel>
                    <NativeSelect 
                        name={name}
                        onChange={onChange}
                        inputProps={{id: 'garage-select'}}
                    >
                        {options}
                    </NativeSelect>
                    <FormHelperText>{error}</FormHelperText>
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
                    error={error?true:false}
                    label={item.label}
                    type={item.type==='integer'?'number':'text'}
                    required={item.required}
                    helperText={error}
                    onChange={onChange}
                />
            </div>
        )
    }
}

export default Input;