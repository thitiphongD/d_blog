export type DataExperience = {
    id: number,
    date: string,
    position: string,
    company: string,
    link: string,
    description: string,
    stack: string[]
}

interface Reactions {
  likes: number;
  dislikes: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}