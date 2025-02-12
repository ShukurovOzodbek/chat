package repositories

import (
	"chat-app/internal/database"
	"context"

	"gorm.io/gorm"
)

type BaseRepository[T any] struct {
	db *gorm.DB
}

func NewBaseRepository[T any]() *BaseRepository[T] {
	return &BaseRepository[T]{
		database.DB,
	}
}

func (br *BaseRepository[T]) Find(ctx context.Context) {

}

func (br *BaseRepository[T]) FindOne(ctx context.Context, whereClause string) {

}

func (br *BaseRepository[T]) Create(ctx context.Context) {

}

func (br *BaseRepository[T]) Delete(ctx context.Context) {

}

func (br *BaseRepository[T]) Update(ctx context.Context) {

}
