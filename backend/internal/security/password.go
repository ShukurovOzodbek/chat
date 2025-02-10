package security

import (
	"chat-app/config"
	"strconv"

	"golang.org/x/crypto/bcrypt"
)

type Crypto struct {
}

func (c Crypto) HashPassword(pass string) (string, error) {
	val, e := strconv.Atoi(config.Getenv("BCRYPT_COST"))

	if e != nil {
		return "", e
	}

	bytes, err := bcrypt.GenerateFromPassword([]byte(pass), val)
	return string(bytes), err
}

func (c Crypto) ComparePassword(hash, pass string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(pass))
	return err == nil
}
