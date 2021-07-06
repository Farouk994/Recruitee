import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='/'>
        Recruitee
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(./not1.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = ({ setAlert }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      password2,
    };
    if (password !== password2) {
      setAlert("Passwords do not match, try again", "danger");
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post(
          "http://localhost:4000/api/user/",
          body,
          config
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Register Today
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => onSubmit(e)}
          >
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='name'
              label='Username'
              name='name'
              autoComplete='name'
              value={name}
              onChange={(e) => onChange(e)}
              onSubmit={(e) => onSubmit(e)}
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              value={email}
              minLength='6'
              onChange={(e) => onChange(e)}
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={(e) => onChange(e)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password2'
              label='Confirm Password'
              type='password'
              id='password2'
              autoComplete='current-password'
              value={password2}
              onChange={(e) => onChange(e)}
            />

            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <a href='/login' variant='body2'>
                  {"Already have an account? Login"}
                </a>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);
