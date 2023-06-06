import React from 'react';
import './CompanyColisible.scss'
import arrow from '../../../../assets/images/header/down_arrow.svg'
import { useState } from 'react';

const CompanyColasible = ({text}) => {

    const [ anime, setAnime ] = useState(false)

    return (
      <div>
  <div className={`companycolasible ${anime? 'companycolasible1' : null}`} >
            

            <p className="companycolasible_info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nam quis saepe aspernatur explicabo hic libero nostrum voluptates iure ad. 
            Praesentium numquam harum, aliquam quia in vero labore ipsa accusamus repellendus
            corrupti quae culpa ipsum quam cum necessitatibus repellat deleniti quos dignissimos! 
            Sit nesciunt et deleniti corporis. Tenetur ipsam harum excepturi
            ecati velit, doloremque maiores! Porro qui numquam minus temporibus 
             similique, vero quia. Aut accusamus at veniam quasi recusandae repellendus
            modi quod saepe, nam ducimus laudantium velit rerum reiciendis odio amet labore!
            cimus laborum neque ex vel aspernatur facilis eaque minus, nisi rem adipisci! Facilis
            ecusandae aliquam doloribus ab vitae tempora esse omnis, a similique, quam repellendus. 
            llo eaque repellat incidunt modi et iure fugiat eius? Eius debitis quod maiores consequuntur.
            </p>
            <div onClick={()=> setAnime(!anime)} className='companycolasible_wrapper' >
                <img    src={arrow} alt=""/>
            </div>
        </div>
      </div>

    );
};

export default CompanyColasible;