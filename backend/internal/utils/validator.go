package utils

import (
	"fmt"

	"github.com/go-playground/validator/v10"
)

func Validate(data interface{}) (response []string) {
	validate := validator.New()

	err := validate.Struct(data)

	if err != nil {
		if validationErrors, ok := err.(validator.ValidationErrors); ok {
			for _, fieldErr := range validationErrors {
				errorMessage := fmt.Sprintf("Error on field '%s': validation tag '%s' failed\n", fieldErr.Field(), fieldErr.Tag())
				response = append(response, errorMessage)
			}
		}
		return
	}

	return
}
