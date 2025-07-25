import profilepic from './assets/profilepic.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilepic} alt="Profile Picture" />
            <h2 className='card-title'>Jason</h2>
            <p className='card-text'>I'm studying Rust and React and I play video games</p>
        </div>
    );
}
export default Card