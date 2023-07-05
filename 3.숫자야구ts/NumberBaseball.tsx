import * as React from 'react';
import { useRef, useState } from 'react';
import Try from './Try';


const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};
// 숫자만 - 볼
// 숫자 자릿수 - 스트라이크
// 4스트라이크 - 홈런
// 10번안에 못맞추면 패배 

