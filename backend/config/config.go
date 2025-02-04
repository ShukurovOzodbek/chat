package config

import (
	"log"
	"os"
)

func Getenv(envKey string) string {
	value := os.Getenv(envKey)

	if value == "" {
		log.Fatalf("Environment variable %s is not set", envKey)
	}
	return value
}
