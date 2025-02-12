import { PasskeyApiClient } from "./api";
declare type PasskeyOptions = {
    baseUrl: string;
    tenantId: string;
};
declare type SignUpParams = {
    userName?: string;
    token: string;
};
export declare class Passkey {
    api: PasskeyApiClient;
    constructor({ baseUrl, tenantId }: PasskeyOptions);
    signUp({ userName, token }: SignUpParams): Promise<string | undefined>;
    signIn(params?: {
        token: string;
    }): Promise<string | undefined>;
    signIn(params?: {
        autofill: boolean;
    }): Promise<string | undefined>;
}
export {};
