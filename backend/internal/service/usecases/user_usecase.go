package usecases

import (
	"chat-app/internal/service/dtos"
	"chat-app/internal/service/repositories"
	"chat-app/internal/types"
	"chat-app/internal/utils"
	"net/http"
)

type UserUsecase struct {
	repository repositories.UserRepository
}

func NewUserUsecase() *UserUsecase {
	return &UserUsecase{
		repository: *repositories.NewUserRepository(),
	}
}

// func generateUserName() string {
// 	return ""
// }

func (urc *UserUsecase) Auth(body dtos.UsersAuthDTO) (response types.Response) {
	if err := utils.Validate(body); err != nil {
		return types.Response{
			Errors: err,
			Status: http.StatusBadRequest,
		}
	}

	return types.Response{
		Body: map[string]interface{}{
			"accessToken": "",
		},
		Status: http.StatusOK,
	}
}
