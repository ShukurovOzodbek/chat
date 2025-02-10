package security

import (
	"chat-app/config"
	"chat-app/internal/types"
	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type Jwt struct {
	secretKey string
}

func JWT() *Jwt {
	return &Jwt{
		secretKey: config.Getenv("JWT_SECRETS"),
	}
}

func (j Jwt) generateToken(payload types.JwtPaylod) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodES256, jwt.MapClaims{
		"sub": payload.UserId,
		"exp": payload.Exp,
		"iat": time.Now().Unix(),
		"iss": "chat-app",
	})

	tokenString, err := token.SignedString(j.secretKey)

	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func (j Jwt) verifyToken(tokenString string) (*jwt.Token, error) {
	token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
		return j.secretKey, nil
	})

	if err != nil {
		return nil, err
	}

	if !token.Valid {
		return nil, fmt.Errorf("Invlid Token")
	}

	return token, nil
}
