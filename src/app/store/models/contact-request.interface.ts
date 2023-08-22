export interface ContactRequest {
  fullname: string,
  email: string,
  access_key?: string,
  subject?: string,
  phone?: string | null,
  message: string,
}

export interface ContactRequestSuccessResponse {
  success: boolean,
  data: ContactRequest,
  message: string
}
