package handlers

import (
	"chat-app/internal/service/dtos"
	"chat-app/internal/service/usecases"
	"chat-app/internal/utils"
	"encoding/json"
	"net/http"
)

type UserHandler struct {
	usecases usecases.UserUsecase
}

func NewUserHandler() *UserHandler {
	return &UserHandler{
		*usecases.NewUserUsecase(),
	}
}

func (uh UserHandler) AuthUser(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	var body dtos.UsersAuthDTO
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	res := uh.usecases.Auth(body)

	if res.Status != 200 && res.Status != 201 {
		utils.SendErrorResponse(w, res.Status, res.ErrorMessage)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(res.Body)
}
