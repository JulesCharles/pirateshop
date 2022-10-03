import './styles/Boutique.css'
import { useState, useEffect } from 'react'

const Boutique = () => {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/JulesCharles/PirateAPI/master/api/all.json'
    )
      .then((res) => res.json())
      .then((res) => console.log(res) || setDatas(res))
  }, [])

  return (
    <div className='boutiqueContainer'>
      {datas.map((data) => (
        <div>
          <p className='nom'>{data.name}</p>
          <div className='bateauxContainer'>
            <img className='bateaux' src={data.image} alt={data.name} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Boutique
