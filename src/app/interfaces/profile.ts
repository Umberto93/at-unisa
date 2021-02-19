import { ProfileDetails } from "./profile-details";
import { ProfileResidence } from "./profile-residence";

export interface Profile {
    details: ProfileDetails,
    residence: ProfileResidence,
    isResEqualDom: boolean
    domicile?: ProfileResidence,
}
