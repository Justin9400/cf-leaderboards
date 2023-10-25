import React from 'react'
import { styles } from './styles'

const TyeCard: React.FC = () => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <div style={styles.card as React.CSSProperties}>
          <div style={styles.cardgrid as React.CSSProperties}>
            <div style={styles.bgGreen as React.CSSProperties}></div>
            <div style={styles.title as React.CSSProperties}>Tye Robertson</div>
            <div style={styles.mana as React.CSSProperties}> </div>
            <div style={styles.imageHolder as React.CSSProperties}>
              <div style={styles.imagety as React.CSSProperties}></div>
            </div>
            <div style={styles.cardtype as React.CSSProperties}>
              <b>Creature - C4 Engineer</b>
            </div>
            <div style={styles.series as React.CSSProperties}> </div>
            <div style={styles.desc as React.CSSProperties}>
              <p>
              <i>Tee Time Insight:</i> Once per round, you may analyze a golf swing or course layout. If you do, improve the golfing experience, and your scorecard gains a +2 handicap rating.</p>
            </div>
            <div style={styles.str as React.CSSProperties}>5/5</div>

            <div style={styles.sticker as React.CSSProperties}></div>
            <div style={styles.sticker2 as React.CSSProperties}></div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default TyeCard
