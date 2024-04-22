import React, { useRef } from 'react'




function Form({ handleFormSubmit }) {

    const textRef = useRef()
    const gradeRef = useRef()

    const handleSubmit = () => {
        const recenzija = textRef.current.value
        const ocjena = Number(gradeRef.current.value)
        if (recenzija.length <= 3) {
            alert('Recenzija mora sadržavati više od 3 znaka')
            return
        }
        if (ocjena > 10 || ocjena < 1) {
            alert("Odaberite ocjenu između 1 i  10")
            return
        }
        const datum = new Date(Date.now()).toLocaleString();
        handleFormSubmit(recenzija, ocjena, datum)
        //spremanje u localStorage
        console.log(recenzija, ocjena)
    }

    return (
        <div className='form'>
            <label className='nazivLabel'>
                Naziv
                <input className='nazivInput' required ref={textRef}></input>
            </label>
            <label className='ocjenaLabel'>
                Ocjena:
                <input className='ocjenaInput' type="number" required min={1} max={10} ref={gradeRef} />
            </label>
            <label className='submitBox'>

                <br />
                <button className="submit" onClick={handleSubmit}>Pohrani</button>
            </label>
        </div>
    )
}

export default Form