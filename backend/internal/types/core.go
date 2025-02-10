package types

import "net/http"

type HandlerFunc func(http.ResponseWriter, *http.Request)
type Middleware func(http.ResponseWriter, *http.Request) bool
