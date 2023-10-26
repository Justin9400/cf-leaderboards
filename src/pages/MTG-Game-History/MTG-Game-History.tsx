import { Stack } from '@mui/system'
import { GameInfoMap } from '../../maps/GameInfoMap'
import { supabase } from '../../supabaseClient'
import { IMtgGameHistory } from '../../models/models'
import DataTable from '../../components/data-table/DataTable'
import { useState } from 'react'
import Brandon from '../../components/mtgcard/Brandon'
import Justin from '../../components/mtgcard/Justin'
import CustomToolbar from '../../components/toolbar/CustomToolbar'
import jk from '../../img/mtgplayers/jk.png'
import bc from '../../img/mtgplayers/bc.png'
import br from '../../img/mtgplayers/br.png'
import ty from '../../img/mtgplayers/ty.png'
import mo from '../../img/mtgplayers/mo.png'
import BryanCard from '../../components/mtgcard/Bryan'
import JeffCard from '../../components/mtgcard/Jeff'
import JeremyCard from '../../components/mtgcard/Jeremy'
import LucasCard from '../../components/mtgcard/Lucas'
import MorganCard from '../../components/mtgcard/Morgan'
import NickCard from '../../components/mtgcard/Nick'
import TaylorCard from '../../components/mtgcard/Taylor'
import TyeCard from '../../components/mtgcard/Tye'
import JustinCard from '../../components/mtgcard/Justin'

let mtgGameHistory: IMtgGameHistory[] = []

let { data: mtgGameHistoryDB, error } = await supabase.from('vw_currentmtggames').select('*')
if (error) console.log('error', error)
else mtgGameHistory = mtgGameHistoryDB as IMtgGameHistory[]

function MTGGameHistory() {
  const [isHoveredJustin, setIsHoveredJustin] = useState(false)
  const [isHoveredBrandon, setIsHoveredBrandon] = useState(false)
  const [isHoveredBryan, setIsHoveredBryan] = useState(false)
  const [isHoveredJeff, setIsHoveredJeff] = useState(false)
  const [isHoveredJeremy, setIsHoveredJeremy] = useState(false)
  const [isHoveredLucas, setIsHoveredLucas] = useState(false)
  const [isHoveredMorgan, setIsHoveredMorgan] = useState(false)
  const [isHoveredNick, setIsHoveredNick] = useState(false)
  const [isHoveredTaylor, setIsHoveredTaylor] = useState(false)
  const [isHoveredTye, setIsHoveredTye] = useState(false)

  const handleMouseEnterJustin = () => {
    setIsHoveredJustin(true)
  }

  const handleMouseLeaveJustin = () => {
    setIsHoveredJustin(false)
  }

  const handleMouseEnterBrandon = () => {
    setIsHoveredBrandon(true)
  }

  const handleMouseLeaveBrandon = () => {
    setIsHoveredBrandon(false)
  }
  const handleMouseEnterBryan = () => {
    setIsHoveredBryan(true)
  }

  const handleMouseLeaveBryan = () => {
    setIsHoveredBryan(false)
  }
  const handleMouseEnterJeff = () => {
    setIsHoveredJeff(true)
  }

  const handleMouseLeaveJeff = () => {
    setIsHoveredJeff(false)
  }
  const handleMouseEnterJeremy = () => {
    setIsHoveredJeremy(true)
  }

  const handleMouseLeaveJeremy = () => {
    setIsHoveredJeremy(false)
  }
  const handleMouseEnterLucas = () => {
    setIsHoveredLucas(true)
  }

  const handleMouseLeaveLucas = () => {
    setIsHoveredLucas(false)
  }
  const handleMouseEnterMorgan = () => {
    setIsHoveredMorgan(true)
  }

  const handleMouseLeaveMorgan = () => {
    setIsHoveredMorgan(false)
  }
  const handleMouseEnterNick = () => {
    setIsHoveredNick(true)
  }

  const handleMouseLeaveNick = () => {
    setIsHoveredNick(false)
  }
  const handleMouseEnterTaylor = () => {
    setIsHoveredTaylor(true)
  }

  const handleMouseLeaveTaylor = () => {
    setIsHoveredTaylor(false)
  }
  const handleMouseEnterTye = () => {
    setIsHoveredTye(true)
  }

  const handleMouseLeaveTye = () => {
    setIsHoveredTye(false)
  }

  return (
    <Stack sx={{ display: 'flex', height: '100vh', margin: '0 auto' }}>
      <h1 style={{ margin: '5% auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        Magic The Gathering Game History
      </h1>
      <Stack direction="row">
        <div
          onMouseEnter={handleMouseEnterJustin}
          onMouseLeave={handleMouseLeaveJustin}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={jk} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredJustin && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <Justin />
            </div>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnterBrandon}
          onMouseLeave={handleMouseLeaveBrandon}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={bc} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredBrandon && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <Brandon />
            </div>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnterBryan}
          onMouseLeave={handleMouseLeaveBryan}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={br} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredBryan && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <BryanCard />
            </div>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnterJeff}
          onMouseLeave={handleMouseLeaveJeff}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={ty} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredJeff && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <TyeCard />
            </div>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnterJeremy}
          onMouseLeave={handleMouseLeaveJeremy}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={mo} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredJeremy && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <MorganCard />
            </div>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnterLucas}
          onMouseLeave={handleMouseLeaveLucas}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={jk} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredLucas && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <LucasCard />
            </div>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnterMorgan}
          onMouseLeave={handleMouseLeaveMorgan}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={jk} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredMorgan && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <MorganCard />
            </div>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnterNick}
          onMouseLeave={handleMouseLeaveNick}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={jk} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredNick && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <NickCard />
            </div>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnterTaylor}
          onMouseLeave={handleMouseLeaveTaylor}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={jk} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredTaylor && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <TaylorCard />
            </div>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnterTye}
          onMouseLeave={handleMouseLeaveTye}
          style={{ width: '100px', position: 'relative' }}
        >
          <img src={jk} alt="" style={{ margin: '0 auto', width: '100px' }} />
          {isHoveredTye && (
            <div
              style={{
                position: 'absolute',
                top: '40px', // Adjust the position as needed
                left: '0',
                zIndex: 1
              }}
            >
              {/* Your component to display on hover */}
              <TyeCard />
            </div>
          )}
        </div>
      </Stack>
      <JustinCard />
      <CustomToolbar />

      <DataTable
        greenColumns={[1, 2, 3]}
        redColumns={[4, 5, 6]}
        columns={GameInfoMap.MagicTheGathering.GameHistoryColumns}
        data={mtgGameHistory}
      />
    </Stack>
  )
}

export default MTGGameHistory
