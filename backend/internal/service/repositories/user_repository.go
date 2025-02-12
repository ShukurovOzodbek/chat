package repositories

import "chat-app/internal/service/entities"

type UserRepository struct {
	BaseRepository[entities.User]
}

func NewUserRepository() *UserRepository {
	return &UserRepository{}
}
