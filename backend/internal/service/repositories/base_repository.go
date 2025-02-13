package repositories

import (
	"chat-app/internal/database"
	"context"
	"errors"

	"gorm.io/gorm"
)

type BaseRepository[T interface{}] struct {
	db *gorm.DB
}

func NewBaseRepository[T interface{}]() *BaseRepository[T] {
	return &BaseRepository[T]{
		database.DB,
	}
}

func (baseRepo *BaseRepository[T]) Find(ctx context.Context, whereClause string) ([]T, error) {
	var entities []T

	if result := baseRepo.db.WithContext(ctx).Where(whereClause).Find(&entities); result.Error != nil {
		return nil, result.Error
	}

	return entities, nil
}

func (baseRepo *BaseRepository[T]) FindOne(ctx context.Context, whereClause string) (*T, error) {
	var entity T

	if result := baseRepo.db.Where(whereClause).First(&entity); result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, result.Error
		}
	}

	return &entity, nil
}

func (baseRepo *BaseRepository[T]) Create(ctx context.Context) {

}

func (baseRepo *BaseRepository[T]) Delete(ctx context.Context) {

}

func (baseRepo *BaseRepository[T]) Update(ctx context.Context) {

}
