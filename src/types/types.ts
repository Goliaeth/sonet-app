export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ContactType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type PohotosType = {
  small: string
  large: string
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactType
  photos: PohotosType
}
export type UserType = {
  id: number
  name: string
  status: string
  photos: PohotosType
  followed: boolean
}