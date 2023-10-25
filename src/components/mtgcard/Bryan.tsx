import React from 'react'
import { styles } from './styles'

const BryanCard: React.FC = () => {
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
            <div style={styles.title as React.CSSProperties}>Bryan Berardi</div>
            <div style={styles.mana as React.CSSProperties}> </div>
            <div style={styles.imageHolder as React.CSSProperties}>
              <div style={styles.imagebr as React.CSSProperties}></div>
            </div>
            <div style={styles.cardtype as React.CSSProperties}>
              <b>Creature - Software Engineer</b>
            </div>
            <div style={styles.series as React.CSSProperties}> </div>
            <div style={styles.descbr as React.CSSProperties}>
            <i>API Mastery:</i> Once per server request, you may analyze an API endpoint or data retrieval process. If
  you do, enhance the system's performance, and your backend gains a +2 efficiency rating.
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

export default BryanCard
