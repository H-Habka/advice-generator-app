import './Card.scss'
import { ReactComponent as MobileSeparator} from '../../images/pattern-divider-mobile.svg'
import { ReactComponent as DesktopSepara} from '../../images/pattern-divider-desktop.svg'
import { ReactComponent as Icon} from '../../images/icon-dice.svg'
import { useEffect, useState } from 'react'
import Spinner from '../spinner/Spinner'
import { getNewAdvice } from '../../healper/fetchAdvice';
import { useMediaQuery } from 'react-responsive'



const Card = () => {
  const [slip, setSlip] = useState({})
  const [isLoading , setLoadingState] = useState(false)

  const isDesktop = useMediaQuery({
    query: '(min-width: 992px)'
  })

  useEffect(async () => {
    setLoadingState(true)
    let res = await getNewAdvice()
    setLoadingState(false)
    setSlip(res.slip)
  },[])

  const handleClick = async () => {
    setLoadingState(true)
    let res = await getNewAdvice()
    setLoadingState(false)
    setSlip(res.slip)
  }


  return (
    <div className='card-container'>
        <div className="card-body">
            {isLoading ? <Spinner /> : (
                <>
                    <div className="title">ADVICE #{slip.id}</div>    
                    <div className="advice">" {slip.advice} "</div>
                </>
            )}
            {
                isDesktop ? <DesktopSepara /> : <MobileSeparator />
            }
            
            
            <button className='get-advice' onClick={handleClick}><Icon /></button>
        </div>        
    </div>
  )
}

export default Card