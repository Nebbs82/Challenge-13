// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    name?: string | null;
    login?: string | null;
    location?: string | null;
    avatar_url?: string | null;
    email?: string | null;
    bio?: string | null;
    company?: string | null;
}
export interface GithubUser {
    login: string;
    avatar_url: string;
    email?: string; 
    bio?: string; 
    company?: string; 
    location?: string; 
  }