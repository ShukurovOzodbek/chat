package entities

type User struct {
	ID           string `gorm:"default:uuid_generate_v3()"`
	Username     string `json:"username" gorm:"not null;unique"`
	Password     string `json:"password"`
	PhoneNumber  string `json:"phoneNumber" gorm:"not null;unique"`
	RefreshToken string `json:"refreshToken"`
}
