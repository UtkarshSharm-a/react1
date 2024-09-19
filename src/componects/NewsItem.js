// import React, { Component } from 'react'
// // import PropTypes from 'prop-types'

// export default class NewsItem extends Component {
// //   static propTypes = {
// //     prop: PropTypes
// //   }



//   render() {
//     let {title,description,imageUrl,newsurl}=this.props;
//     return (
//       <div>
//         <div className="card" style={{width: "18rem"}}>
//             <img src={imageUrl}className="card-img-top" alt="..."/>
//             <div className="card-body">
//               <h5 className="card-title">{title}</h5>
//               <p className="card-text">{description}</p>
//               <a href={newsurl}   target="_blank" className="btn btn-primary">Read More</a>
//             </div>
//           </div>      
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';

export default class NewsItem extends Component {

  render() {
    const { title, description, imageUrl, newsurl } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "22.5rem",  padding:"20px 20px"}}>
          <img src={imageUrl} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a 
              href={newsurl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
