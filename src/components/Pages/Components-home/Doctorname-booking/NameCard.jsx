import React from 'react'
import './file.css'
import avatar from '../../../assets/avatar.png'





export const NameCard = () => {
    return (
        <div className="card d-flex " style={{ maxWidth: '14rem', borderRadius: '20px', maxHeight: '20rem' }}>
            <div className="justify-content-center text-center">
                <img src={avatar} class="rounded-circle" alt="HelPic" style={{ maxWidth: '50px', margin: '4px' }} />
                <p className="w3-cursive" ><h3>Dr. ABC</h3></p>
                <p><h4 style={{ fontSize: '20px' }}>Heart Specialist</h4></p>
                <p><h4 style={{ fontSize: '20px' }}>FUXCKING HOSPITAL</h4></p>
                
            </div>

        </div>
    )
}
