package router

import (
	"chat-app/internal/handlers"
	"net/http"

	"github.com/gorilla/mux"
)

func NewRouter() {
	router := mux.NewRouter()

	userHandler := handlers.NewUserHandler()

	router.HandleFunc("/users/auth", userHandler.AuthUser).Methods("POST")

	http.Handle("/", router)
}
