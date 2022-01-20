import "./Home.css"
import { Progress } from "../components/Progress/ProgressBar"

export function Home() {
    return (
        <>
            <div className="background_black">
                <div>
                    <div className="spacer"></div>
                    <div className="text_title">
                        <h1 className="slogan_home"> WE <br />WILL <br /> BACK... </h1>
                        <img className="planet_home" src={require('../assets/netuno.png')} alt="netuno planet"/>
                    </div>      
                    <Progress />
                </div>               
            </div>     
        </>
    )
}