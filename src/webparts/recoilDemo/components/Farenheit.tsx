import * as React from 'react';
import styles from './RecoilDemo.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

import { useRecoilValue } from 'recoil';

import { farenTemp } from './GlobalState';

export default function Farenheit() : JSX.Element {

    const faren = useRecoilValue<number>(farenTemp);

    return (
        <div>
            <h1>Temp in F : { faren }</h1>
        </div>
    );
}