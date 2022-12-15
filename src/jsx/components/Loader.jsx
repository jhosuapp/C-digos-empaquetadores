import {useState} from 'react';

export const Loader = ()=>{

    const [isActivee, setIsActivee] = useState(false);

    window.addEventListener('load', ()=>{    
        setIsActivee(current => !current );
    });
    
    return (
        <div className={ isActivee ? 'loader' : 'loader active' }>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}