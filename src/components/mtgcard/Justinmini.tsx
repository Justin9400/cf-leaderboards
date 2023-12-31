import React from 'react'
import { styles } from './redstyles'

const JustinCard: React.FC = () => {
  return (
    <body style={{ transform: 'scale(0.25)' }}>
      <div style={styles.card as React.CSSProperties}>
        <div style={styles.cardgrid as React.CSSProperties}>
          <div style={styles.bgGreen as React.CSSProperties}></div>
          <div style={styles.title as React.CSSProperties}>Justin Kachornvanich</div>
          <div style={styles.mana as React.CSSProperties}> </div>
          <div style={styles.imageHolder as React.CSSProperties}>
            <div style={styles.imagej as React.CSSProperties}></div>
          </div>
          <div style={styles.cardtype as React.CSSProperties}>
            <b>Creature - Software Engineer</b>
          </div>
          <div style={styles.series as React.CSSProperties}> </div>
          <div style={styles.desc as React.CSSProperties}>
            <p>
              <i>CSS Mastery:</i> Once per turn, you may exile a nonland card from your hand. If you do, create a 1/1
              Setup Guide creature token with lifelink. If the exiled card is an artifact, Setup Guide gets +2/+2.
            </p>
          </div>
          <div style={styles.str as React.CSSProperties}>8/8</div>

          <div style={styles.sticker as React.CSSProperties}></div>
          <div style={styles.sticker2 as React.CSSProperties}></div>
        </div>
      </div>
    </body>
  )
}

export default JustinCard
