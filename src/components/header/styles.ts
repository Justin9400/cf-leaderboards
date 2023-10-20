export const styles = {
  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
    borderBottom: '1px solid lightgray',
    fontFamily: 'beleren, serif'
  },
  hoverContent: {
    display: 'none'
  },
  iconButton: {
    color: 'black'
  },
  avatar: {
    padding: 0,
    border: '1px solid lightgray',
    borderRadius: '50%'
  },
  hand: {
    position: 'absolute',
    bottom: '25%',
    right: '50%'
  },
  card: {
    position: 'relative',
    height: '500px',
    width: '360px',
    left: '50%',
    top: '50%',
    transformOrigin: '50% 100%',
    transition: '0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    transform: 'translate(-50%, -50%)',
    color: 'black'
  },
  cardHover: {
    transform: 'translate(-50%, -50%) rotate(0) scale(1.2)',
    zIndex: 6
  },
  cardgrid: {
    height: '100%',
    width: '100%',
    filter: 'blur(0vmin)',
    background: '#000',
    borderRadius: '5%',
    display: 'grid',
    gridTemplateColumns: '5% 2.5% 35% 15% 20% 15% 2.5% 5%',
    gridTemplateRows: '4% 1.5% 5% 45% 5% 23% 3% 6.5% 4% 3%',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitAnimation: 'cardwobble 2s cubic-bezier(0.635, 0.05, 0.38, 0.92) 1s infinite',
    animation: 'cardwobble 2s cubic-bezier(0.635, 0.05, 0.38, 0.92) 1s infinite'
  },
  title: {
    background: '#bdd2c9',
    fontWeight: '800',
    position: 'relative',
    width: 'auto',
    verticalAlign: 'center',
    borderRadius: '3%',
    gridColumnStart: 3,
    gridColumnEnd: 7,
    gridRowStart: 3,
    gridRowEnd: 3,
    paddingTop: '0.378378378378379px',
    paddingRight: '0.378378378378379px',
    paddingBottom: '0.378378378378379px',
    paddingLeft: '5px',
    border: '#008000 2px solid',
    borderWidth: '2px 0 2px 0'
  },
  titleBefore: {
    width: '7px',
    display: 'inline-block',
    position: 'absolute',
    background: '#bdd2c9',
    height: '100%',
    top: '-2px',
    left: '-7px',
    content: '',
    borderBottomLeftRadius: '50%',
    borderTopLeftRadius: '50%',
    border: '2px #008000 solid',
    borderWidth: '2px 0 2px 2px'
  },
  titleAfter: {
    width: '7px',
    display: 'inline-block',
    position: 'absolute',
    background: '#bdd2c9',
    height: '100%',
    top: '-2px',
    right: '-7px',
    content: '',
    borderBottomRightRadius: '50%',
    borderTopRightRadius: '50%',
    border: '2px #008000 solid',
    borderWidth: '2px 2px 2px 0'
  },
  bgGreen: {
    background:
      'rgba(255, 255, 255, 0.1) url("https://media-dominaria.cursecdn.com/attachments/88/812/635032494788529192.jpg")',
    backgroundBlendMode: 'lighten'
  },
  background: {
    gridColumnStart: 2,
    gridColumnEnd: 8,
    gridRowStart: 2,
    gridRowEnd: 9,
    borderTopLeftRadius: '3%',
    borderTopRightRadius: '3%',
    borderBottomLeftRadius: '10%',
    borderBottomRightRadius: '10%'
  },
  imageHolder: {
    gridColumnStart: 3,
    gridColumnEnd: 7,
    gridRowStart: 4,
    gridRowEnd: 5,
    position: 'relative',
    border: '#008000 2px solid',
    backgroundSize: 'cover',
    overflow: 'hidden',
    boxShadow: '0px 0px 10px 5px inset rgba(0, 0, 0, 0.8)'
  },
  image: {
    gridColumnStart: 3,
    gridColumnEnd: 7,
    gridRowStart: 4,
    gridRowEnd: 5,
    position: 'absolute',
    left: '-20%',
    top: '-12%',
    width: '130%',
    height: '130%',
    background: '#f5fffa url("https://i.imgur.com/sWApwyM.png")',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    transformOrigin: 'bottom 60%',
    WebkitAnimation: 'cardwobble2 2s cubic-bezier(0.635, 0.05, 0.38, 0.92) 1s infinite',
    animation: 'cardwobble2 2s cubic-bezier(0.635, 0.05, 0.38, 0.92) 1s infinite'
  },
  cardType: {
    gridColumnStart: 3,
    gridColumnEnd: 7,
    gridRowStart: 5,
    gridRowEnd: 6,
    position: 'relative',
    background: '#bdd2c9',
    border: '#008000 2px solid',
    padding: '0.2vmin'
  },
  cardTypeBefore: {
    width: '7px',
    display: 'inline-block',
    position: 'absolute',
    background: '#bdd2c9',
    height: '100%',
    top: '-2px',
    left: '-7px',
    content: '',
    borderBottomLeftRadius: '50%',
    borderTopLeftRadius: '50%',
    border: '2px #008000 solid',
    borderWidth: '2px 0 2px 2px'
  },
  cardTypeAfter: {
    width: '7px',
    display: 'inline-block',
    position: 'absolute',
    background: '#bdd2c9',
    height: '100%',
    top: '-2px',
    right: '-7px',
    content: '',
    borderBottomRightRadius: '50%',
    borderTopRightRadius: '50%',
    border: '2px #008000 solid',
    borderWidth: '2px 2px 2px 0'
  },
  mana: {
    gridColumnStart: 6,
    gridColumnEnd: 7,
    gridRowStart: 3,
    gridRowEnd: 3,
    backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/mana.png")',
    zIndex: 2,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center right'
  },
  series: {
    gridColumnStart: 6,
    gridColumnEnd: 7,
    gridRowStart: 5,
    gridRowEnd: 6,
    backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/m15.png")',
    zIndex: 2,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '72%',
    backgroundPosition: 'center right'
  },
  desc: {
    gridColumnStart: 3,
    gridColumnEnd: 7,
    gridRowStart: 6,
    gridRowEnd: 9,
    background: '#d3e4da',
    border: '#008000 2px solid',
    padding: '3vmin',
    fontFamily: 'planting, serif'
  },
  sticker: {
    gridColumnStart: 4,
    gridColumnEnd: 5,
    gridRowStart: 9,
    gridRowEnd: 10,
    background: '#000',
    position: 'absolute',
    top: '-60%',
    width: '100%',
    height: '120%',
    borderRadius: '50%',
    border: '#008000 2px solid'
  },
  sticker2: {
    gridColumnStart: 4,
    gridColumnEnd: 5,
    gridRowStart: 9,
    gridRowEnd: 10,
    background: '#000 url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/sticker.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: '-20% 30%',
    position: 'absolute',
    top: '-50%',
    width: '100%',
    height: '120%',
    borderRadius: '50%',
    border: '#000 2px solid'
  },
  str: {
    gridColumnStart: 6,
    gridColumnEnd: 7,
    gridRowStart: 8,
    gridRowEnd: 9,
    background: '#b7ccc3',
    position: 'absolute',
    top: '50%',
    width: '90%',
    height: '65%',
    borderRadius: '30%',
    border: '#618978 2px solid',
    textAlign: 'center',
    padding: '2pt',
    boxShadow: 'inset -1px 2px 3px 0px #4d5450'
  },
  copyright: {
    gridColumnStart: 5,
    gridColumnEnd: 7,
    gridRowStart: 10,
    gridRowEnd: 10,
    color: '#fff',
    textAlign: 'right',
    verticalAlign: 'bottom',
    fontFamily: 'Times New Roman, serif'
  },
  artist: {
    gridColumnStart: 2,
    gridColumnEnd: 4,
    gridRowStart: 9,
    gridRowEnd: 10,
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
    verticalAlign: 'bottom',
    fontFamily: 'Times New Roman, serif'
  }
};
