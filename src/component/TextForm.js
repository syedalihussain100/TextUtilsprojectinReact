import React, { useState, useRef, useEffect } from 'react'

function TextForm({ showalert }) {
    const [text, setText] = useState('');
    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    }, [ref])
    const handleUpeer = () => {
        setText(text.toUpperCase())
        showalert('Convert To Uppercase', 'success');
        document.title = "Text Covator - Convert To Uppercase";
    }

    const handlelower = () => {
        setText(text.toLowerCase())
        showalert('Convert To Lowercase', 'primary')
        document.title = "Text Covator - Convert To Lowercase";
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClear = () => {
        setText("")
        showalert("Text Deleted!", "danger");
        document.title = "Text Covator - Text Deleted";
    }

    const handleCopy = () => {
        let copyget = document.getElementById("mytext");
        copyget.select();
        navigator.clipboard.writeText(copyget.value);
        document.getSelection().removeAllRanges()
        showalert('Text Copied!', 'success');
        document.title = "Text Covator - Text Copied";
    };

    const handleremove = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        showalert("Removed Extra Spaces", "danger");
        document.title = "Text Covator - Removed Extra Spaces";
    }
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <textarea className="form-control mt-4" id="mytext" rows="8" value={text}
                        onChange={handleChange} ref={ref}
                    />
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 btn-sm" onClick={handleUpeer}>Convert To Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-2 my-1 btn-sm" onClick={handlelower}>Convert To Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-danger my-1 btn-sm mx-2" onClick={handleClear}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 btn-sm mx-2" onClick={handleCopy}>Text Copy</button>
                <button disabled={text.length === 0} className="btn btn-warning my-1 btn-sm" onClick={handleremove}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2 style={{ textDecoration: "underline" }}>Your Text Sumarry!</h2>
                <p>{text.split(" ").filter((elm) => { return elm.length !== 0 }).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read..</p>
                <hr />
                <h4 style={{ textDecoration: 'underline' }}>Text Preview</h4>
                <p style={{ textAlign: 'justify' }}>{text.length > 0 ? text : "Nothing To Preview"}</p>
            </div>
        </>
    )
}

export default TextForm

