import React, { memo, useEffect, useState } from 'react';
import './slider.scss';
import {Card} from '../Card/Card';


const Slider = memo(({ title, cards }) => {
    const [slide, setSlide] = useState(0);
    const [cardInSlider, setCardInSlider] = useState(4);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.onresize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        if (window.innerWidth > 1120) {
            setCardInSlider(4);
            setSlide(0);
        } else if (window.innerWidth > 850) {
            setCardInSlider(3);
            setSlide(0);
        } else if (window.innerWidth > 600) {
            setCardInSlider(2);
            setSlide(0);
        } else {
            setCardInSlider(1);
            setSlide(0);
        }
    }, [windowWidth]);

    const moveLeft = () => {
        setSlide((s) => s - 1);
    };

    const moveRight = () => {
        setSlide((s) => s + 1);
    };

    return (
        <div className='slider'>
            <div className='slider__header'>
                <div className='slider__title'>
                    <h2>{title}</h2>
                </div>
                <div className='slider__buttons'>
                    <button className='slider__button' onClick={moveLeft} disabled={!slide}>
                    </button>
                    <button
                        className='slider__button'
                        onClick={moveRight}
                        disabled={slide >= cards.length / cardInSlider - 1}>
                    </button>
                </div>
            </div>
            <div className='slider__content' style={{ transform: `translateX(-${slide * 100}%)` }}>
                {cards.map((el, i) => (
                    <div key={i} className='slider__slide'>
                        <Card key={el.name} {...el} product={el} />
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Slider;