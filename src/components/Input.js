import React, { useState } from 'react';

import { TextField, FormControlLabel, Switch, NativeSelect, FormControl, InputLabel, FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';
import DateFnsUtils from '@date-io/date-fns';

const Input = (props) => {
    const {item, onChange, error, handleDate, selectedData} = props
    const name = item.label.toLowerCase().replace(' ', '_')
    let selectedDate = selectedData[name]
    let options = null
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
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker 
                        className="form-input"
                        clearable
                        name={name}
                        label={item.label}
                        type="date"
                        helperText={error}
                        value={selectedDate}
                        format="dd/MM/yyyy"
                        onChange={handleDate}
                        disableFuture={true}
                    />
                </MuiPickersUtilsProvider>
            </div>
        )
    } else if (item.type==='boolean') {
        return (
            <div className="mx2">
                <FormControlLabel 
                    value="start"
                    label={item.label}
                    name={name}
                    control={
                        <Switch name={name} color="primary" checked={false} value="true" onChange={onChange} />
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