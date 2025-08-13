import React from 'react';
function Stats() {
    return (<div className="container p-5">
        <div className="row p-5">

            <div className="col-6 p-5">
                <h1 className='fs-3 p-5' style={{ textAlign: 'left' }}>Trust with confidence</h1>
                <h2 className='fs-4' style={{ textAlign: 'left' }}>Customer-first always</h2>
                <p className="text-muted" style={{ textAlign: 'start' }}>That's why 1.6+ crore customers trust connecting-traders with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                <h2 className='fs-4' style={{ textAlign: 'left' }}>No spam or gimmicks
                </h2>
                <p className="text-muted" style={{ textAlign: 'start' }}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <h2 className='fs-4' style={{ textAlign: 'left' }}>The Traders universe</h2>
                <p className="text-muted" style={{ textAlign: 'start' }}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h2 className='fs-4' style={{ textAlign: 'left' }}>No spam or gimmicks
                </h2>
                <p className="text-muted" style={{ textAlign: 'start' }}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <h2 className='fs-4' style={{ textAlign: 'left' }}>Do better with money
                </h2>
                <p className="text-muted" style={{ textAlign: 'start' }}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

            </div>
            <div className="col-6 p-5">
                <img src="./media/ecosystem.png" style={{ width: "150%" }} />
                <div >
                    <a href="">Explore our products &rarr;</a>&nbsp;&nbsp;&nbsp;
                    <a href="">Try kite demo &rarr;</a>

                </div>
            </div>
        </div>
    </div>
    );
}

export default Stats;