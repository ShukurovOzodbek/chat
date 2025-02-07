package database

import (
	"chat-app/config"
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectDB() {
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		config.Getenv("DB_HOST"),
		config.Getenv("DB_USER"),
		config.Getenv("DB_PASS"),
		config.Getenv("DB_NAME"),
		config.Getenv("DB_PORT"))

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("failed to connect to the database:", err)
	}

	if err := db.AutoMigrate(); err != nil {
		log.Fatal("failed to auto-migrate", err)
	}
}
