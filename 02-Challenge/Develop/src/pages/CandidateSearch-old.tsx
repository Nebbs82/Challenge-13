// import { useEffect, useState } from 'react';
 
// import { searchGithub, searchGithubUser } from '../api/API';
// import CandidateCard from '../components/CandidateCard';

// import type {Candidate} from '../interfaces/Candidate.interface';

// const CandidateSearch = () => {
  
//   const [currentUser, setCurrentUser] = useState({});
//   const [userId, setUserId] = useState<number>(0);
//   const [searchInput, setSearchInput] = useState<string>('');
//   const [githubUsers, setGithubUsers] = useState<Candidate[]>([]);
//   const [userProfile, setUserProfile] = useState<Candidate>({
//     name: null,
//     username: null,
//     location: null,
//     avatar: null,
//     email: null,
//     html_url: null,
//     company: null,
    
//   });
//   const getUserProfile = async (username : any) => {
    
//     let userData: Candidate  = await searchGithubUser(username);
//     setUserProfile(userData);
    
//   };

//   const getGithubUsers = async () => {
    
//     let githubUsers: Candidate [] = await searchGithub();
//     setGithubUsers(githubUsers);
//     getUserProfile(githubUsers[userId].username)
    
//   };

//   // * Function for searching for a film by title using the OMDB API
  
//   const selectedCandidates = async (selected: boolean) => {
//     if (selected) {
//       let chosenCandidate : Candidate [] = [];
//       let savedCandidateList = localStorage.getItem('savedCandidates')
//       if (typeof savedCandidateList === 'string') {
//         chosenCandidate = JSON.parse(savedCandidateList)
//       }
//       chosenCandidate.push(userProfile)
//       localStorage.setItem('savedCandidates', JSON.stringify(chosenCandidate))
//     }
//     if (userId+1 > githubUsers.length) {
//       setUserId(userId+1)
//     await getUserProfile(githubUsers[userId].username)
//     } else {
//       setUserId(0)
//       await getGithubUsers()
//     }
//   };

//   return (
//     <>
//       <section id='searchSection'>
//         <form
          
//           onSubmit={(event) => searchForFilmByTitle(event, searchInput)}
//         >
//           <input
//             type='text'
//             name=''
//             id=''
//             placeholder='Enter a Film'
//             onChange={(e) => setSearchInput(e.target.value)}
//           />
//           <button type='submit' id='searchBtn'>
//             Search
//           </button>
//         </form>
//       </section>
//       <CandidateCard
//         currentUser={currentUser}
//         selectedCandidates={selectedCandidates}
//         addToSeenItList={addToSeenItList}
//       />
//     </>
//   );
// };

// export default CandidateSearch;
