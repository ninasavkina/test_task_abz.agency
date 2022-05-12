import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            display: 'grid',
            justifyContent: 'center',
            textAlign: 'center',
            align: 'center',
            marginBottom: '40px',
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
        QA: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine, QA } = state;
    const error = [gilad, jason, antoine, QA].filter((v) => v).length !== 2;

    return (
        <div className="container2">
            <header className="text-center mb-5 text-white">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h1>Working with POST request</h1>
                    </div>
                </div>
            </header>
            <FormControl className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Your name" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Phone" variant="outlined" helperText="+38 (XXX) XXX - XX - XX" />
            </FormControl>
            <br/>

            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Select your position</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                        label="Frontend developer"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                        label="Backend developer"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                        label="Designer"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={QA} onChange={handleChange} name="QA" />}
                        label="QA"
                    />
                    <form method="post" encType="multipart/form-data">
                        <form method="post" encType="multipart/form-data">
                            <div>
                                <label htmlFor="file">Choose file to upload</label>
                                <input type="file" id="file" name="file" multiple/>&nbsp;
                                <button>Upload</button>
                            </div>
                        </form>
                    </form>
                    <div className="btn2">
                        <a className="template-btn2 go-contact-area">Sign up</a>
                    </div>
                </FormGroup>
            </FormControl>
        </div>
    );
}
