import React, { useEffect, useState, useRef } from 'react';
import './styles.scss';

interface CardProps {
    img: string;
    header: React.ReactNode;
    body: React.ReactNode;
}

export default function Card({ header, body, img }: CardProps) {
    const cardRef: React.Ref<HTMLDivElement> | null = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [mouseLeaveDelay, setMouseLeaveDelay] = useState(0);

    useEffect(() => {
        const ref = cardRef.current;
        if (ref) {
            setWidth(ref.offsetWidth);
            setHeight(ref.offsetHeight);
        }
    }, []);

    const onMouseMove = (e: React.MouseEvent) => {
        const ref = cardRef.current;
        if (ref) {
            setMouseX(e.pageX - ref.offsetLeft - width / 2);
            setMouseY(e.pageY - ref.offsetTop - height / 2);
        }
    };
    const onMouseEnter = () => clearTimeout(mouseLeaveDelay);
    const onMouseLeave = () => {
        setMouseLeaveDelay(window.setTimeout(() => {
            setMouseX(0);
            setMouseY(0);
        }, 1000))
    };
    const calcPX = (): number => mouseX / width;
    const calcPY = (): number => mouseY / height;
    const calcContentStyle = (): React.CSSProperties => {
      const x = calcPX()*50;
      const y = calcPY()*(-50);
      return {
          transform: `rotateY(${x}deg) rotateX(${y}deg)`
      }
    };
    const calcBgStyle = (): React.CSSProperties => {
        const x = calcPX()*(-50);
        const y = calcPY()*(-50);
        return {
            backgroundImage: `url(${img})`,
            transform: `translateX(${x}px) translateY(${y}px)`
        }
    };

    return (
      <div className='card'
           ref={cardRef}
           onMouseMove={onMouseMove}
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}>
        <div className='card__content' style={calcContentStyle()}>
            <div className='card__bg' style={calcBgStyle()}/>
            <div className='card__info'>
                {header}
                {body}
            </div>
        </div>
      </div>
    );
}
