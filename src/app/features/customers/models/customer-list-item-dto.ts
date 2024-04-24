export interface CustomerListItemDto {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    address: Address
  }
  
  export interface Address {
    street: string
    city: string
    state: string
    zip: string
  }
  