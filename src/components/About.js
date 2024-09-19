import React from 'react'
// import { useState } from 'react'

export default function About(props) {
    // let docStyle = {
    //     color: 'white',
    //     backgroundColor: 'black'
    // }

    // const [ myStyle, setStyle ] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '1px solid white'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark mode")

    // const toggleStyle = () =>{
    //     if(myStyle.color === 'black'){
    //         setStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light mode")
    //     }
    //     else{
    //         setStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid black'
    //         })
    //         setBtnText("Enable Dark mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
        border: '2px solid',
        borderColor: props.mode === 'dark'?'#042743':'white'
    }

    let myStyle1 = {
        backgroundColor:props.mode === 'dark'?'#042743':'white',
        color: props.mode === 'dark'?'white':'#042743'
    }

  return (
    <div className='cont' style={myStyle1}>
        <h1 className='my-3' style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle1}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count or charactercount.
                    </div>
                    </div>
                </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle1}>
                Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters, Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle1}>
                This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf documents, essays, etc.
                </div>
                </div>
            </div>
        </div>
        {/* <div className='cont my-3'>
            <button onClick={toggleStyle} type="button" className="btn btn-primary" > {btnText} </button>
        </div> */}
    </div>
  )
}
