package entities

import "gorm.io/gorm"

type User struct {
	gorm.Model
	ID          string `gorm:"default:uuid_generate_v3()"`
	Username    string `json:"title" gorm:"not null;unique"`
	Password    string `json:"password"`
	PhoneNumber string `json:"phoneNumber" gorm:"not null;unique"`
}
