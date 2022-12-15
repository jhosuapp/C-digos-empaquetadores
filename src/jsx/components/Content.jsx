import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Content = ()=>{

    return (
        <section className="container container-principal">
            <div className="test">
                <code>
                    <span className="line">Hola</span>

                    <sup>js</sup>
                    <div className="copy">
                        <FontAwesomeIcon icon={ faClipboard }/>
                        <FontAwesomeIcon icon={ faCheck }/>
                    </div>
                </code>
                <code>
                    <span className="line grey-shadow">npm install</span>
                    <sup>terminal</sup>
                    <div className="copy">
                        <FontAwesomeIcon icon={ faClipboard }/>
                        <FontAwesomeIcon icon={ faCheck }/>
                    </div>
                </code>
            </div>                
        </section>
    )
}