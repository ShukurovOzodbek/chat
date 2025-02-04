package server

import (
	"chat-app/config"
	"fmt"
	"log"
	"net/http"

	"github.com/joho/godotenv"
)

func InitServer() {
	godotenv.Load()

	http.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Pong!")
	})

	fmt.Printf("Starting server at port http://localhost:%s\n", config.Getenv("PORT"))

	PORT := fmt.Sprintf(":%s", config.Getenv("PORT"))

	if err := http.ListenAndServe(PORT, nil); err != nil {
		log.Fatal(err)
	}
}
