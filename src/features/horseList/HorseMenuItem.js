import React from 'react';

import styles from './HorseMenuItem.module.css';

export const HorseMenuItem = ({ horse }) => <div className={styles.row}>{horse.name}</div>
