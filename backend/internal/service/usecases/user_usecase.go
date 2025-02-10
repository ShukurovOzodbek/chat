package usecases

import (
	"chat-app/internal/service/dtos"
	"chat-app/internal/service/entities"
	"chat-app/internal/types"
	"chat-app/internal/utils"
	"net/http"
)

type UserUsecase struct {
	entity entities.User
}

func NewUserUsecase() *UserUsecase {
	return &UserUsecase{
		entities.User{},
	}
}

// func generateUserName() string {
// 	return ""
// }

func (urc UserUsecase) Auth(body dtos.UsersAuthDTO) (response types.Response) {
	if err := utils.Validate(body); err != "nil" {
		return types.Response{
			ErrorMessage: err,
			Status:       http.StatusBadRequest,
		}
	}

	

	return types.Response{
		Body: map[string]interface{}{
			"accessToken": "",
		},
		Status: http.StatusOK,
	}
}
