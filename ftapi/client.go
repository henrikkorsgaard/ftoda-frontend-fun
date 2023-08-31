package ftapi

import (
	"net/http"
)

// https://oda.ft.dk/api/Akt%C3%B8r?$inlinecount=allpages&$filter=typeid%20eq%205&$skip=100
// Learn:https://github.com/tonyghita/graphql-go-example

type apiClient struct {
	base string
	http *http.Client
}

func newClient() *apiClient {
	return &apiClient{base: "https://oda.ft.dk/api", http:http.DefaultClient}
}

func (a *apiClient) getActors() []Actor, err {
	return nil, nil 
}