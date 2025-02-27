import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {

  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const getCandidates = () => {
      const savedCandidates = localStorage.getItem("candidates") ? JSON.parse(localStorage.getItem("candidates")!) : [];

      setCandidates(savedCandidates);
    }

    getCandidates();
  }, [])

  return (
    <>
      <h1>Potential Candidates</h1>

      <table className='table'>
        <thead>
          <tr>
            <th>Login</th>
            <th>Bio</th>
            <th>Company</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.login}</td>
              <td>{candidate?.bio ? candidate.bio : "No bio provided"}</td>
              <td>{candidate.company}</td>
              <td>{candidate.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

  
    </>
  );
};

export default SavedCandidates;
