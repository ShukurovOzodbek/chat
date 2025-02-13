package utils

import (
	"chat-app/internal/types"
	"encoding/json"
	"net/http"
)

func SendErrorResponse(w http.ResponseWriter, statusCode int, message any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)

	errResponse := types.ErrorResponse{
		Errors: message,
	}

	jsonData, err := json.Marshal(errResponse)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	w.Write(jsonData)
}
