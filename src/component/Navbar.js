import React from 'react'

function Navbar({ toggle, theme }) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme ? 'light' : 'dark'} bg-${theme ? 'light' : 'dark'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Text Convator</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch mx-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={toggle} checked={theme}/>
                    <span>{theme ? "Dark Theme" : "Light Theme"}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar









// import React from 'react';

// function Navbar({ toggle, theme }) {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Navbar scroll</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarScroll">
//             <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Link</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled">Link</a>
//               </li>
//             </ul>
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     )
// }

// export default Navbar

