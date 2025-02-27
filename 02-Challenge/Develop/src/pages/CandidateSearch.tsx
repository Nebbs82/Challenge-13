import { useEffect, useState } from 'react';

import { searchGithub, searchGithubUser } from '../api/API';

import { Candidate, GithubUser } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

  const [githubUsers, setGithubUsers] = useState<GithubUser[]>([]);

  const [currentUser, setCurrentUser] = useState<Candidate>({login: '', avatar_url: '', email: '', bio: '', company: '', location: '' }); 

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      const users = await searchGithub();
      console.log(users);
      setGithubUsers(users)
    }

    getUsers()
  }, [])


  useEffect(() => {
    const getUser = async () => {
      const user = await searchGithubUser(githubUsers[currentIndex].login);
      console.log(user);

      const candidate: Candidate = {
        login: user.login,
        avatar_url: user.avatar_url,
        email: user.email,
        bio: user.bio,
        company: user.company,
        location: user.location
      }

      setCurrentUser(candidate)
    }
    getUser()

  }, [githubUsers, currentIndex])


  function saveUser () {
    const savedUsers = localStorage.getItem("candidates") ? JSON.parse(localStorage.getItem("candidates")!) : [];

    savedUsers.push(currentUser);

    localStorage.setItem("candidates", JSON.stringify(savedUsers));

    setCurrentIndex(currentIndex + 1);
  }

  function skipUser () {
    setCurrentIndex(currentIndex + 1);
  }


  return (
    <>
      <h1>Candidate Search</h1>

      <div className="card">
        <img
          src={currentUser?.avatar_url ? currentUser.avatar_url : "https://placehold.co/400"}
          className="card-image"
          alt="..."
        />

        <h3>{currentUser?.login}</h3>

        <p>Email: {currentUser?.email ? currentUser.email : "No email provided"}</p>
        <p>Location</p>
        <p>Company</p>
        <p>Bio: {currentUser?.bio ? currentUser.bio : "No bio provided"}</p>
      </div>


      <div>
        <button className="skipUser" onClick={skipUser}>-</button>
        <button className="saveUser" onClick={saveUser}>+</button>
      </div>
    </>
  );
};

export default CandidateSearch;
