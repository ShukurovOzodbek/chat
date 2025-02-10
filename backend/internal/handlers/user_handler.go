package handlers

import (
	"chat-app/internal/domain/entities"
	"net/http"
)

type UserHandler struct {
	entity entities.User
}

func NewUserHandler() *UserHandler {
	return &UserHandler{
		entity: entities.User{},
	}
}

func (ur UserHandler) GetCurrentUser(w http.ResponseWriter, r *http.Request) {
	_ = ur.entity
}

func (ur UserHandler) AuthUser(w http.ResponseWriter, r *http.Request) {

}
