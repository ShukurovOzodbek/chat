package usecases

import (
	"chat-app/internal/service/dtos"
	"chat-app/internal/service/entities"
	"chat-app/internal/service/repositories"
	"chat-app/internal/types"
	"chat-app/internal/utils"
	"context"
	"errors"
	"net/http"

	"gorm.io/gorm"
)

type UserUsecase struct {
	repository repositories.BaseRepository[entities.User]
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

	user, err := urc.repository.FindOne(context.Background(), "id = 23")

	if err != nil && errors.Is(err, gorm.ErrRecordNotFound) {
		_ = user
	}

	return types.Response{
		Body: map[string]interface{}{
			"accessToken": "",
		},
		Status: http.StatusOK,
	}
}
