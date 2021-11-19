import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './claims.css';
import { IClaim } from './IClaim';


const Claims: React.FC<any> = () => {  

  let [claims, setClaims] = useState([]);
  
  const fetchClaims = async () => {
    let res = await axios.get('http://localhost:8089/claim/all');
    setClaims(res.data);
  }

  useEffect(() => {
    fetchClaims();
  },[claims.length])

  return (
    <div className="content">
      <div className="header-region">
        <h2>My File Claims</h2>
        <button className="rev-btn" type="button">File New Claim</button>
      </div>
      <hr />
      <table>
        <tr>
          <th>Claim ID</th>
          <th>Claim Type</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {
          claims.map((claim:IClaim) => {
            console.log('id: ' + claim.id);
            console.log('claimType: ' + claim.claimType);
            console.log('description: ' + claim.description);
            console.log('status: ' + claim.status);
            return (<tr>
              <td>{claim.id}</td>
              <td>{claim.claimType}</td>
              <td>{claim.description}</td>
              <td>{claim.status}</td>
            </tr>);
          })
        }
        {/*<tr>
          <td>1</td>
          <td>Surgery</td>
          <td>I need to take my face off!</td>
          <td>APPROVED</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Medication</td>
          <td>I need cancer meds</td>
          <td>PENDING</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Other</td>
          <td>Deny this one, dummy.</td>
          <td>DENIED</td>
        </tr>*/}
      </table>
    </div>
  );
}
export default Claims;