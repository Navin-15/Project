import React from 'react'

function Categories() {
  return (
    <>
        <div className="main-cat-div d-none d-md-block">
            <div className="sub-cat-div">
                <div className=" contain-div ">
                    <div className="cat-content-div">

                        <div className="left-content-div">
                            <div className="left-anchors">
                                <a className='left-anc' href="">Movies</a>
                                <a className='left-anc' href="">Stream</a>
                                <a className='left-anc' href="">Events</a>
                                <a className='left-anc' href="">Plays</a>
                                <a className='left-anc' href="">Sports</a>
                                <a className='left-anc' href="">Activities</a>
                            </div>
                        </div>

                        <div className="right-content-div">
                            <div className="right-anchors">
                                <a className='right-anc ' href="">ListYourShow</a>
                                <a className='right-anc ' href="">Corporates</a>
                                <a className='right-anc ' href="">Offers</a>
                                <a className='right-anc ' href="">Gift cards</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Categories

//responsive code

// import React from 'react';
// import './Categories.css';
// import { Container, Row, Col } from 'react-bootstrap';

// function Categories() {
//   return (
//     <div className="main-cat-div py-3 bg-light">
//       <Container>
//         <Row className="cat-content-div text-center text-md-start">
//           <Col xs={12} md={6} className="mb-3 mb-md-0">
//             <div className="left-anchors d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3">
//               <a className="cat-link" href="#">Movies</a>
//               <a className="cat-link" href="#">Stream</a>
//               <a className="cat-link" href="#">Events</a>
//               <a className="cat-link" href="#">Plays</a>
//               <a className="cat-link" href="#">Sports</a>
//               <a className="cat-link" href="#">Activities</a>
//             </div>
//           </Col>
//           <Col xs={12} md={6}>
//             <div className="right-anchors d-flex flex-column flex-md-row justify-content-center justify-content-md-end gap-3">
//               <a className="cat-link" href="#">ListYourShow</a>
//               <a className="cat-link" href="#">Corporates</a>
//               <a className="cat-link" href="#">Offers</a>
//               <a className="cat-link" href="#">Gift cards</a>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Categories;
