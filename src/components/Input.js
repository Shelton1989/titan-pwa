import React, { useState } from 'react';

import { TextField, FormControlLabel, Switch } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

const Input = (props) => {
    const {item, onChange, error} = props
    const name = item.label.toLowerCase().replace(' ', '_')

    const [selectedDate, handleDate] = useState(new Date())
    if (item.read_only === true) {
        return null
    } else if (item.type==='field') {
        return (
            <div>Multiselect</div>
        )
    } else if (item.type==='date') {
        return (
            <div className="mx2">
                <KeyboardDatePicker 
                    className="form-input"
                    clearable
                    label={item.label}
                    type="date"
                    helperText={error}
                    value={selectedDate}
                    format="yyyy/mm/dd"
                    onChange={(date) => handleDate(date)}
                />
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