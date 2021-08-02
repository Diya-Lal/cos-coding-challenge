export interface IRegisteredUser {
    authenticated : true,
    internalUserId : number;
    internalUserUUID: string,
    privileges: string,
    token: string,
    type: number,
    userId: string
}