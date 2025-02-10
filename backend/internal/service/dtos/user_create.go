package dtos

type UsersAuthDTO struct {
	PhoneNumber string `json:"phoneNumber" validate:"required"`
	Password    string `json:"password" validate:"required,min=8"`
}
