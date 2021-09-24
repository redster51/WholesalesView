import React from 'react';
import './index.scss';
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '../Button';


const ErrorPage = ({number, message, tittle}) => (
    <div className="NotFound">
        <h1 className="NotFoundLabel">4<span><FontAwesomeIcon icon={faGhost} /></span>{number}</h1>
        <h2 className="NotFoundLabelh2">{message}</h2>
        <p className="NotFoundText">{tittle}</p>
        <Button
            color="primary"
            size="large"
            variant="contained"
            style={{marginTop: '1.4rem', paddingLeft: '3rem', paddingRight: '3rem'}}
            component="a"
            href="/"
        >Home
        </Button>
    </div>
);

export default ErrorPage;
