import React from 'react'
import { styles } from './styles'

const BrandonCard: React.FC = () => {
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
            <div style={styles.title as React.CSSProperties}>Brandon Camerer</div>
            <div style={styles.mana as React.CSSProperties}> </div>
            <div style={styles.imageHolder as React.CSSProperties}>
              <div style={styles.imageb as React.CSSProperties}></div>
            </div>
            <div style={styles.cardtype as React.CSSProperties}>
              <b>Creature - Senior UX Engineer</b>
            </div>
            <div style={styles.series as React.CSSProperties}> </div>
            <div style={styles.desc as React.CSSProperties}>
              <p>
                <i>UX Revelation:</i> Once per user interaction, you may analyze a user flow or interface element. If
                you do, enhance the user experience, and your product gains a +2 user satisfaction rating.
              </p>
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

export default BrandonCard
