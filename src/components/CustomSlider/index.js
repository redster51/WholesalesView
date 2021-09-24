import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-animated-slider';
import "./index.css";
import horizontalCss from "./horizontal.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

export default function CustomSlider(props){
    const classes = useStyles()

    return <Slider classNames={horizontalCss} autoplay={5000}>
            {props.content.map((item, index) => (
                <div key={index} className={classes.image}>
                    <div className="flexBoxSlider">
                        <h1 className="SliderContent" style={{paddingTop: '8rem'}}>{item.title}</h1>
                        <p className="SliderContent mainText" style={{marginTop: '0'}}>{item.description}</p>
                    </div>
                </div>
            ))}
        </Slider>
};


CustomSlider.propTypes = {
    content: PropTypes.array,
  };
