import React from "react";
function Education() {
    return (<div className='container p-5 mb-5'>
  <div className="row  mt-10">
    

            <div className="col p-2 ">
                <img src="./media/education.svg"/>
            </div>
            <div className="col p-2 "></div>
       
        <div className="col-6">
             <h1 className='fs-4 mb-3' style={{ textAlign: 'left' }}>Free and open market education
</h1>
<p className="text-muted" style={{ textAlign: 'start' }}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
 <a href="">varsity &rarr;</a>
<p className="text-muted" style={{ textAlign: 'start' }}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
    <a href="#" >Trading Q&A &rarr;</a>    
 </div>
        </div>
    </div>
    
   );
}

export default Education;