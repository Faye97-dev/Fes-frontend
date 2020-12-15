import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  DialogActions,
  MenuItem,
  Grid,
  Paper,
} from "@material-ui/core";

import DialogContentText from "@material-ui/core/DialogContentText";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

import { Form, Field } from "react-final-form";
import { TextField, Select } from "final-form-material-ui";

function FormClient() {
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

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ montant: 0, stooge: "larry" }}
      validate={validate}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Paper style={{ padding: 16 }}>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={6}>
                <Field
                  fullWidth
                  required
                  name="nom_complet"
                  component={TextField}
                  type="text"
                  label="Nom complet"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  fullWidth
                  required
                  name="tel"
                  component={TextField}
                  type="number"
                  label="Numero de telephone"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  fullWidth
                  required
                  name="adresse"
                  component={TextField}
                  type="text"
                  label="Adresse"
                />
              </Grid>
            </Grid>
          </Paper>
        </form>
      )}
    />
  );
}

export default function ModalClient() {
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  return (
    <div>
      <IconButton
        color="primary"
        aria-label="add_destinataire"
        onClick={handleClickOpen1}
      >
        <AddIcon />
      </IconButton>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormClient></FormClient>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose1} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
