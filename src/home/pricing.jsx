import React from 'react';

function Pricing() {
    return (<div className='container'>
  <div className="row">
    <div className="col-4">
        <h1 className='fs-4 mb-3' style={{ textAlign: 'left' }}>Unbeatable pricing
</h1>
<p className="text-muted" style={{ textAlign: 'start' }}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
    <a href="">See pricing &rarr;</a>

    </div>
    <div className="col-2"></div>
    <div className="col-6">
        <div className="row text-center">
            <div className="col border p-2">
                <h1 className='mb-3'>&#8377;0</h1>
                <p className="text-muted">Free account
opening</p>
            </div>

            <div className="col p-2 border"><h1 className='mb-3'>&#8377;20</h1><p className="text-muted">Intraday F & O</p></div>
        </div>
    </div>
    
  </div>


    </div>  );
}

export default Pricing;