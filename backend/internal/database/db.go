package database

import (
	"chat-app/config"
	"chat-app/internal/service/entities"
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	var err error

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		config.Getenv("DB_HOST"),
		config.Getenv("DB_USER"),
		config.Getenv("DB_PASS"),
		config.Getenv("DB_NAME"),
		config.Getenv("DB_PORT"))

	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("failed to connect to the database:", err)
	}

	DB.DB()

	if err := DB.AutoMigrate(&entities.User{}); err != nil {
		log.Fatal("failed to auto-migrate", err)
	}
}
