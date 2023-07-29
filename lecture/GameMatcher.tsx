import * as React from 'react';
import NumberBaseballClass from '../3.숫자야구ts/NumberBaseballClass'
// import RSPClass from '../5.가위바위보ts/RSPClass';
// import LottoClass from '../6.로또ts/LottoClass'
import { useHistory, useLocation, useRouteMatch } from 'react-router';






const GameMatcher = () => {
    const match = useRouteMatch<{name:string}>();
    const location = useLocation();
    const history = useHistory();
   
        if (!match) return null;
        let urlSearchParams = new URLSearchParams(location.search.slice(1)); // 쿼리스트링
        console.log(urlSearchParams.get('hello'));
        if (match.params.name === 'number-baseball') {
            return <NumberBaseballClass/>
        } else if (match.params.name === 'rock-scissors-paper') {
            return null
        } else if (match.params.name === 'lotto-generator') {
            return null
        }
    
    

}

export default GameMatcher;