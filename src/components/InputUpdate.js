import React from 'react';

import { TextField, FormControlLabel, Switch, FormControl, InputLabel, FormHelperText, InputAdornment, IconButton, MenuItem, Select, Input } from '@material-ui/core';
import { Edit } from '@material-ui/icons';

import { useState } from 'react'

const InputUpdate = (props) => {
    const [editVal, setEditVal] = useState(true)
    const {item, onChange, onChecked, error, formData, asset} = props
    const name = item.label.toLowerCase().replace(/\s/g, '_');
    let fieldError = error[name];
    let value = asset[name]
    let checked = value
    if (formData) {
        checked = formData[name]
    }
    const today = new Date();
    const defaultDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    if (item.read_only === true) {
        return null
    } else if (item.type==='field') {
        return (
            <div className="mx2">
                <FormControl className="form-input" error={fieldError?true:false}>
                    <InputLabel htmlFor='garage'>{item.label}</InputLabel>
                    <Select 
                        style={{textAlign: 'start'}}
                        value={value}
                        input={<Input name={name} id={name} readOnly />}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={value}>{value}</MenuItem>
                    </Select>
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
                    value={value}
                    onChange={onChange}
                    InputProps={{
                        readOnly: editVal,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton 
                                    edge="end"
                                    aria-label="toggle edit"
                                    onClick={()=>setEditVal(!editVal)}
                                >
                                    <Edit />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
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
                    value={value}
                    InputProps={{
                        readOnly: editVal,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton 
                                    edge="end"
                                    aria-label="toggle edit"
                                    onClick={()=>setEditVal(!editVal)}
                                >
                                    <Edit />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
        )
    }
}

export default InputUpdate;