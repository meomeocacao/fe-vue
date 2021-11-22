export interface PostResponse {
  id: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  user: UserResponse;
  image: string;
  like: number;
  dislike: number;
}

export interface UserResponse {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  bio?: string;
  profilePicture?: string;
  country?: string;
  birthDate?: Date;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
