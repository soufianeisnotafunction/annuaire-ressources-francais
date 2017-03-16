import React from 'react';
import './delete.css';
import trash from'./img/trash.svg';

const Delete = () => (
    <div className="delete-card col-md-9">
        <div class="card  ">
            <div className="delete-title d-flex justify-content-center ">
                <h3>Titre</h3>
            </div>
            <div className="card-block d-flex justify-content-start ">
                <div className='trash'>
                    <img src={trash} className="img-responsive" alt="trash" />
                </div>
            </div>
        </div>
    </div>
);



export default Delete;
