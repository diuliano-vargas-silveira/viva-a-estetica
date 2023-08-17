import './storie.css'

export function Storie({ userPhoto, userEmail, onClick }) {
    return (
        <img src={userPhoto} alt={`foto do usuário ${userEmail}`} onClick={onClick} className="avatar" />
    );
}

export function StorieModal({ selectedStorie, onClick }) {
    return (
        <div className='storie-container'>
            <button onClick={onClick}> X </button>
            <img src={selectedStorie} className='storie__image flex' />
        </div>
    );
}