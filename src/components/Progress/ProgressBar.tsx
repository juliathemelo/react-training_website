import "./ProgressBar.css"
import { useState } from "react";

export function Progress() {

    const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `70%`
		}
		
		setStyle(newStyle)
	}, 200)

    return (
        <>
            <div className="progress">
                <div className="progress-done" style={style}>
                    70%...
                </div>
            </div>
        </>
    )
}