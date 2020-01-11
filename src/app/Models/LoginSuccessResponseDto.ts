import { User } from './User';

export interface LoginSuccessResponseDto{
    token?:string;
    user?:User;
}