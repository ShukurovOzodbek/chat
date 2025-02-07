package server

import (
	"chat-app/config"
	"chat-app/internal/database"
	"fmt"
	"log"
	"net/http"

	"github.com/joho/godotenv"
)

func InitServer() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, reading configuration from environment variables")
	}

	database.ConnectDB()

	port := fmt.Sprintf(":%s", config.Getenv("PORT"))
	fmt.Printf("Starting server at port http://localhost%s\n", port)

	mux := http.NewServeMux()

	_ = mux

	if err := http.ListenAndServe(port, nil); err != nil {
		log.Fatal(err)
	}
}
