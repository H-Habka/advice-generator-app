import './Card.scss'
import { ReactComponent as Separator} from '../../images/pattern-divider-mobile.svg'
import { ReactComponent as Icon} from '../../images/icon-dice.svg'


const Card = () => {
  return (
    <div className='card-container'>
        <div className="card-body">
            <div className="title">ADVICE #117</div>    
            <div className="advice">Lorem ipsum, dolor sit amet consectetur adipisicing elit quos sapiente natus rationi fugit</div>
            <Separator></Separator>
            <button className='get-advice'><Icon /></button>
        </div>        
    </div>
  )
}

export default Card