import React from "react";
import {Grid, TextField} from "@material-ui/core";

const MyField = ({field,label,sm, placeholder,name, type, errorProps})=> {

    return (
        <Grid item xs={12} sm={sm}>
            <TextField
                name={name}
                {...field}
                label={label}
                variant="outlined"
                required
                fullWidth
                placeholder={placeholder}
                id={name}
                type={type}
                {...errorProps}
            />
        </Grid>
    );

};

export default MyField