package server

import (
	"fmt"
	"log"
	"net/http"
)

func InitServer() {
	http.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello World!")
	})

	fmt.Printf("Starting server at port http://localhost:3030\n")

	if err := http.ListenAndServe(":3030", nil); err != nil {
		log.Fatal(err)
	}
}
