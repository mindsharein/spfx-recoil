import * as React from 'react';
import styles from './RecoilDemo.module.scss';
import { IRecoilDemoProps } from './IRecoilDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { RecoilRoot } from 'recoil';
import Celcius from './Celcius';
import Farenheit from './Farenheit';

export default class RecoilDemo extends React.Component<IRecoilDemoProps, {}> {
  public render(): React.ReactElement<IRecoilDemoProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;


    return (
      <RecoilRoot>
        <section className={`${styles.recoilDemo} ${hasTeamsContext ? styles.teams : ''}`}>
          <div className={styles.welcome}>
            
            <h2>SPFx React with Recoil JS</h2>
            <div><strong>{escape(description)}</strong></div>
          </div>
          <div>
            <p>
              Following are two different React components that use common atoms / selectors
            </p>
            <Celcius />
            <Farenheit />
          </div>
        </section>
      </RecoilRoot>
    );
  }
}
