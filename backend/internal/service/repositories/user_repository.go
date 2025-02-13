package repositories

import (
	"chat-app/internal/service/entities"
)


func NewUserRepository() *BaseRepository[entities.User] {
	return NewBaseRepository[entities.User]()
}
