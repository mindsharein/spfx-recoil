import * as React from 'react';
import styles from './RecoilDemo.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

import { useRecoilState } from 'recoil';

import { temp } from './GlobalState';

export default function Celcius() : JSX.Element {

    const [celcius, setCelcius] = useRecoilState<number>(temp);

    return (
        <div>
            Enter Temp (C) : <input type="text" 
            onChange={ (ev : React.ChangeEvent<HTMLInputElement>)=> {
                const temp : string = ev.currentTarget.value;

                // Set the temp value into Global State atom (temp)
                setCelcius(parseFloat(temp));
            }} />
        </div>
    );
}