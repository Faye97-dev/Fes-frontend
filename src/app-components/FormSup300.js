import React from "react";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";

import ModalClient from "./ModalClient";
//import { AutoCompleteWrapper } from "./AutoComplete";
// Picker
/*import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';

function DatePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}

function TimePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TimePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}
*/
const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  return errors;
};

function FormSup300() {
  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{ montant: 0, stooge: "larry" }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="agence_destination"
                    component={Select}
                    label="Selectionner une agence de destination"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="London">Agence 1</MenuItem>
                    <MenuItem value="Paris">Agence 2</MenuItem>
                    <MenuItem value="Budapest">Agence 3</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={5}>
                  <Field
                    fullWidth
                    name="destinataire"
                    component={Select}
                    label="Selectionner un destinataire"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="London">user 1</MenuItem>
                    <MenuItem value="Paris">user 2</MenuItem>
                    <MenuItem value="Budapest">user 3</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={1} style={{ paddingTop: "15px" }}>
                  <ModalClient />
                </Grid>

                <Grid item xs={5}>
                  <Field
                    fullWidth
                    name="expediteur"
                    component={Select}
                    label="Selectionner un expediteur"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="London">client 1</MenuItem>
                    <MenuItem value="Paris">client 2</MenuItem>
                    <MenuItem value="Budapest">client 3</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={1} style={{ paddingTop: "15px" }}>
                  <ModalClient />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="montant"
                    component={TextField}
                    type="number"
                    label="Montant"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="frais_origine"
                    component={TextField}
                    type="number"
                    label="Frais d'origine"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="frais_destination"
                    component={TextField}
                    type="number"
                    label="Frais de destination"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="remarque"
                    component={TextField}
                    multiline
                    label="Remarque"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="motif"
                    component={TextField}
                    multiline
                    label="Motif"
                  />
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            {/*<pre>{JSON.stringify(values, 0, 2)}</pre>*/}
          </form>
        )}
      />
    </>
  );
}

export default FormSup300;

{
  /*const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
  ];
  <AutoCompleteWrapper
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
        />*/
}

{
  /**<Grid item xs={6}>
                <Field
                  fullWidth
                  required
                  name="firstName"
                  component={TextField}
                  type="text"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  fullWidth
                  required
                  name="lastName"
                  component={TextField}
                  type="text"
                  label="Last Name"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="email"
                  fullWidth
                  required
                  component={TextField}
                  type="email"
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  label="Employed"
                  control={
                    <Field
                      name="employed"
                      component={Checkbox}
                      type="checkbox"
                    />
                  }
                />
              </Grid>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Best Stooge</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel
                      label="Larry"
                      control={
                        <Field
                          name="stooge"
                          component={Radio}
                          type="radio"
                          value="larry"
                        />
                      }
                    />
                    <FormControlLabel
                      label="Moe"
                      control={
                        <Field
                          name="stooge"
                          component={Radio}
                          type="radio"
                          value="moe"
                        />
                      }
                    />
                    <FormControlLabel
                      label="Curly"
                      control={
                        <Field
                          name="stooge"
                          component={Radio}
                          type="radio"
                          value="curly"
                        />
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Sauces</FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      label="Ketchup"
                      control={
                        <Field
                          name="sauces"
                          component={Checkbox}
                          type="checkbox"
                          value="ketchup"
                        />
                      }
                    />
                    <FormControlLabel
                      label="Mustard"
                      control={
                        <Field
                          name="sauces"
                          component={Checkbox}
                          type="checkbox"
                          value="mustard"
                        />
                      }
                    />
                    <FormControlLabel
                      label="Salsa"
                      control={
                        <Field
                          name="sauces"
                          component={Checkbox}
                          type="checkbox"
                          value="salsa"
                        />
                      }
                    />
                    <FormControlLabel
                      label="Guacamole 🥑"
                      control={
                        <Field
                          name="sauces"
                          component={Checkbox}
                          type="checkbox"
                          value="guacamole"
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  name="notes"
                  component={TextField}
                  multiline
                  label="Notes"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  name="city"
                  component={Select}
                  label="Select a City"
                  formControlProps={{ fullWidth: true }}
                >
                  <MenuItem value="London">London</MenuItem>
                  <MenuItem value="Paris">Paris</MenuItem>
                  <MenuItem value="Budapest">
                    A city with a very long Name
                  </MenuItem>
                </Field>
              </Grid>
              */
}

{
  /*<MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={6}>
                    <Field
                      name="rendez-vous"
                      component={DatePickerWrapper}
                      fullWidth
                      margin="normal"
                      label="Rendez-vous"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      name="alarm"
                      component={TimePickerWrapper}
                      fullWidth
                      margin="normal"
                      label="Alarm"
                    />
                    </Grid>
                    </MuiPickersUtilsProvider>*/
}
