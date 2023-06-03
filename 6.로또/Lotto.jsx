import React,{ useRef, useState, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball'
function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0])
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers,bonusNumber]
}
const Lotto = () => {
   
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);

    // const mounted = useRef(false);
    // useEffect(() => {
    //     if (!mounted.current) {
    //         mounted.current = true;
    //     } else {
    //     // ajax
    //     }

    // }, [바뀌는 값]); // componentDidUpdate만 (componentDidMount 아님)


    useEffect(() => {
      console.log('useEffect')
        for (let i = 0; i < winNumbers.length - 1; i++){
            // 여기서는 timeouts.current 바뀌는게 아님...!
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevWinBalls) => {
                    return [...prevWinBalls,winNumbers[i]]
                })
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        },7000)
        
        return () => {
        timeouts.current.forEach((v) => clearTimeout(v));
        }   
    },[timeouts.current]); // 빈 배열이면 ComponentDidMount 와 동일

    const onClickRedo = useCallback(() => {
        console.log('onclick')
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    },[winNumbers]);


     return (
            <>
            <div>당첨</div>
                <div id="결과창">
                    {winBalls.map((v)=> <Ball key={v} number={v}/>)}
                </div>
                <div>보너스!</div>
                {bonus && <Ball number={bonus} />}
                {redo && <button onClick={onClickRedo}>한번 더!</button>}
            </>
            )

}


export default Lotto;