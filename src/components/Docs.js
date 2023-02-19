// import React from 'react'
// import './Docs.css';

// export default function Docs() {
//   return (
//     <div className="docs">
//       <div className="doc-txt">
//         Beat 
//         <br />
//         <span className='beat-docs'>Docs</span>
//       </div>
//       <div className="doc-img">
//         <img src="./connect1.svg" alt="" className='git-img'/>
//       </div>
//     </div>
//   );
// }

import React from 'react'
import './Docs.css';

export default function Docs() {
  return (
    <div className="overall" id='Docs'>
      <div className="beat-docs">
        <div className="tit">
          <div className="docs-beat">Beat</div>
          <div className="docs-tit">Docs</div>
        </div>
        <div className="docs-body">
          <p className='docs-para'>
            <span>BeatSpire</span> is an API based music recommendation system build on Polygon chain.
          </p>
        </div>
      </div>
      <div className="docs-img">
        <img src="./connect1.svg" alt="" />
      </div>
    </div>

  );
}