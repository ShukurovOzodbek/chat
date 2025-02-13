package types

import "net/http"

type HandlerFunc func(http.ResponseWriter, *http.Request)
type Middleware func(http.ResponseWriter, *http.Request) bool

type JwtPaylod struct {
	UserId string
	Exp    int
}

type Response struct {
	Status int `json:"status"`
	Body   map[string]interface{}
	Errors any `json:"errors"`
}
